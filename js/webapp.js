(function () {

    var share = document.querySelector('#share');
    share.onclick = function() {
        navigator.geolocation.getCurrentPosition(function (position) {
            location.href = "mailto: ?subject=Let's meet here&body="
            +"http://m.here.com/map="+position.coords.latitude+","
            +position.coords.longitude+",14"+"&title=Let's meet here"
        });
    }

})();
