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

}());

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
