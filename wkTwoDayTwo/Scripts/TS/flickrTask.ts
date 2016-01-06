const flickrAPI = 'https://api.flickr.com/services/rest/?api_key=c7c96901811b7c04bbe1bae3ad27f541&format=json&nojsoncallback=1&method=flickr.photos.search&tags=tesla';

let reqFlickr = new XMLHttpRequest();
reqFlickr.open('GET', flickrAPI);

reqFlickr.addEventListener('load', function (e) {
//Using DOM
    //var html = '<ul>';
    let dataFlickr = JSON.parse(reqFlickr.responseText);
    for (var i = 0; i < dataFlickr.photos.photo.length; i++) {
        var imageURL = flickrImageURL(dataFlickr.photos.photo[i]);
        console.log(dataFlickr.photos.photo[i]);
        //Using jQuery
        $(document).ready(function() {
            $('#results').append(`<img src= "${imageURL}" />`);
        });

        //html = html + '<li><img src="' + imageURL + '" /></li>';
    }
    //html = html + '</ul>';

    //document.getElementById('results').innerHTML = html;
});

reqFlickr.send();

interface FlickrImage {
    id: number,
    farm: number,
    server: number,
    secret: string
}

function flickrImageURL(image: FlickrImage) {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
}





