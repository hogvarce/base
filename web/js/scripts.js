$(function(){
    // wow animation activation
    new WOW().init();

    //active button in menu
    $('.navigation .nav a').each(function(e){
        var href = $(this).attr('href');
        if (location.pathname == href)
            $(this).parent().addClass('active');
    });

    //stick navigation on top when scroll
    $('.navigation').tmStickUp();

    //load google maps
    if($('#map').length){
        $.ajax({
	         type: "GET",
	         url: "//maps.google.com/maps/api/js?sensor=false&callback=initMap",
	         dataType: "script",
	         cache: true,
	     });
    }

    $(document).on({
        click: function(e) {
            e.preventDefault();
            if( localStorage.getItem('basket').length ){
                $('#order-form').submit();
            }
        }
    }, '.send-order');

}());

function initMap() {
      var map, marker, infowindow;
      var locationLat = parseFloat(document.getElementById('map').getAttribute('data-x'));
      var locationLng = parseFloat(document.getElementById('map').getAttribute('data-y'));

      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: locationLat, lng: locationLng},
        zoom: 12
      });

      marker = new google.maps.Marker({
          map: map,
          draggable: true,
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
          infowindow.open(map);
      });

      infowindow = new google.maps.InfoWindow({
        content: 'Наш адрес',
        position: marker.getPosition()
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
