var flickrAPI = 'https://api.flickr.com/services/rest/?api_key=c7c96901811b7c04bbe1bae3ad27f541&format=json&nojsoncallback=1&method=flickr.photos.search&tags=tesla';
var reqFlickr = new XMLHttpRequest();
reqFlickr.open('GET', flickrAPI);
reqFlickr.addEventListener('load', function (e) {
    //Using DOM
    //var html = '<ul>';
    var dataFlickr = JSON.parse(reqFlickr.responseText);
    for (var i = 0; i < dataFlickr.photos.photo.length; i++) {
        var imageURL = flickrImageURL(dataFlickr.photos.photo[i]);
        console.log(dataFlickr.photos.photo[i]);
        //Using jQuery
        $(document).ready(function () {
            $('#results').append("<img src= \"" + imageURL + "\" />");
        });
    }
    //html = html + '</ul>';
    //document.getElementById('results').innerHTML = html;
});
reqFlickr.send();
function flickrImageURL(image) {
    return "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + ".jpg";
}
