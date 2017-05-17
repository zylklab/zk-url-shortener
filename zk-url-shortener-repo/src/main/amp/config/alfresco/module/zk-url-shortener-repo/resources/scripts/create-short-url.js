var shortUrl = document.properties['dw:shorturl'];

while (!shortUrl){
    var newUrl = "";
    var length = 6;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ ){
        newUrl += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var nodes = search.luceneSearch("@dw\\:shorturl:"+newUrl);
    if (nodes.length==0){
        shortUrl = newUrl;
        document.properties['dw:shorturl']=shortUrl;
    }
    length++;    
}
document.save();