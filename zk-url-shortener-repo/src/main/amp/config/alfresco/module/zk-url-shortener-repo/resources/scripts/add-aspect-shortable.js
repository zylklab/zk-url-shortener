function getFormattedDate(mydate) {
    var str = mydate.getFullYear() + "-" + (mydate.getMonth() + 1) + "-" + mydate.getDate() 
    return str;
}

// Have a look at the behaviour object that should have been passed
if (behaviour == null) {
    logger.log("The behaviour object has not been set.");
    scriptFailed = true;
}

// Check the name of the behaviour
if (behaviour.name == null && behaviour.name != "onAddAspect") {
    logger.log("The behaviour name has not been set correctly.");
    scriptFailed = true;
} else {
    logger.log("Behaviour name: " + behaviour.name);
    //logger.log("behav:"+behaviour);
}

// Check behaviour arguments
if (behaviour.args == null) {
    logger.log("The args have not been set.");
    scriptFailed = true;

} else {
    var node     = behaviour.args[0];
    var before   = behaviour.args[1];
    var after    = behaviour.args[2];

    var shortUrl = node.properties['dw:shorturl'];

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
            node.properties['dw:shorturl']=shortUrl;
        }
        length++;    
    }
    node.save();
    logger.warn("[zk] Setting dw:shorturl : " + shortUrl);
}