requirejs.config({
    baseUrl: 'js/product'
});

$(function(){
    // wow animation activation
    if ( $('.wow').length ) {
        requirejs(['wow.min'], function(){
            new WOW().init();
        });
    }
    //active button in menu
    $('.navigation .nav a').each(function(e){
        var href = $(this).attr('href');
        if (location.pathname == href)
            $(this).parent().addClass('active');
    });

    //stick navigation on top when scroll
    requirejs(['tm-stick-up'], function(tmStickUp){
        $('.navigation').tmStickUp();
    });

    //load google maps
    if($('#map').length){
        $.ajax({
	         type: "GET",
	         url: "//maps.google.com/maps/api/js?sensor=false&callback=initMap",
	         dataType: "script",
	         cache: true,
	     });
    }

    if( $('.camera_wrap').length ){
        requirejs(['camera.min'], function(camera){
            $('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails
                    height: '40%',
                    minHeight: '',
                    pauseOnClick: false,
                    hover: 1,
                    fx: 'simpleFade',
                    loader: 'none',
                    pagination: 1,
                    thumbnails: 0,
                    thumbheight: 75,
                    thumbwidth: 100,
                    time: 10000,
                    transPeriod: 1000,
                    alignment: 'center',
                    autoAdvance: 1,
                    mobileAutoAdvance: 1,
                    portrait: 0,
                    barDirection: 'leftToRight',
                    imagePath: '/img/',
                    lightbox: 'mediaboxck',
                    fullpage: 0,
    				mobileimageresolution: '0',
                    navigationHover: false,
                    navigation: false,
                    playPause: false,
                    barPosition: 'bottom'
            });
        });
    }

    $(document).on({
        click: function(e) {

            e.preventDefault();

            if( localStorage.getItem('basket').length ){

                var customer = {
                    name  : $('#customers-customer_name').val(),
                    phone : $('#customers-customer_phone').val(),
                    email : $('#customers-customer_email').val()
                };

                localStorage.setItem('customer', JSON.stringify(customer));

                var form = $('#order-form'),
                    list = $('.order-list').parent().html();
                form.append('
                    <textarea id="customers-order_list" class="form-control" name="Customers[order_list]" style="display:none;">'
                        + list +
                    '</textarea>');
                form.submit();
            }
        }

    }, '.send-order');

}());

var map, marker, infowindow;

function initMap() {
      var locationLat = parseFloat(document.getElementById('map').getAttribute('data-x'));
      var locationLng = parseFloat(document.getElementById('map').getAttribute('data-y'));

      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: locationLat, lng: locationLng},
        zoom: 12
      });

      marker = new google.maps.Marker({
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: {lat: locationLat, lng: locationLng}
      });
      marker.addListener('mouseover', function(){
          marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      marker.addListener('mouseout', function(){
           marker.setAnimation(null);
      });
      marker.addListener('click', function(){
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
      });

      infowindow = new google.maps.InfoWindow({
        content: 'Наш адрес'
      });

      if ( $('#order-form').length ) {

          $('#customers-order_address').change(function(){
              var self = $(this);
              getGeo(self.val());
          });

         map.addListener('click', function(event) {
            loc = event.latLng;
            getLoc(loc);
         });
         
      }
}

function getGeo(query){
    $.getJSON('//maps.googleapis.com/maps/api/geocode/json?address='+query, function(response){
        marker.setPosition(response.results[0].geometry.location);
        map.setCenter(marker.getPosition());
    });
}

function getLoc(loc){
    $.getJSON('//maps.googleapis.com/maps/api/geocode/json?latlng='+loc.lat()+','+loc.lng()+'&sensor=true', function(response){
        $('#customers-order_address').val(response.results[0].formatted_address);
        marker.setPosition(loc);
        map.setCenter(marker.getPosition());
    });
}

function addParamUrl(key, val){
    var url = window.location.href;
    var reExp = new RegExp("[\?|\&]"+key + "=[0-9a-zA-Z\_\+\-\|\.\,\;]*");

if(reExp.test(url))
{ // update
    var reExp = new RegExp("[\?&]" + key + "=([^&#]*)");
    var delimiter = reExp.exec(url)[0].charAt(0);
    url = url.replace(reExp, delimiter + key + "=" + val);
}
else
{ // add
    var newParam = key + "=" + val;
    if(url.indexOf('?')){url += '?';}

    if(url.indexOf('#') > -1){
        var urlparts = url.split('#');
        url = urlparts[0] +  "&" + newParam +  (urlparts[1] ?  "#" +urlparts[1] : '');
    }
    else
    {
        url += "&" + newParam;
    }
  }
  window.history.pushState(null, document.title, url);
  location.href=url;
}

function declOfNum(number, titles)
{
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
