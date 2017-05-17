How to create a simple url shortener for Alfresco (>=4.0):
-------------------------------------------------

1. Create the Shortable Aspect: 
    * Copy [shortUrlModel.xml](https://gist.github.com/2779867#file_short_url_model.xml) in the repository in /Data dictionary/Models
    * edit document properties and activate the model

2. Make the aspect and the property visible:
    * Add the content of [share-config-custom.xml](https://gist.github.com/2779867#file_share_config_custom.xml) to /tomcat/shared/classes/alfresco/web-extension/share-config-custom.xml
    * restart Alfresco

3. Create the script to generate the short url:
    * Copy [createShortUrl.js](https://gist.github.com/2779867#file_create_short_url.js) in the repository in /Data dictionary/Scripts

4. Create a Rule in a folder (can be the root of the document library of your share site):
    * When the content is added
    * For all the content NOT having the aspect "Short url enabled"
    * Execute two actions:
        * Add "Short url enabled" aspect
        * Execute Script createShortUrl.js
    * Apply rule to subfolders


5. If you add a document to the folder you will see it will have a property (dw:shorturl) of 3 or 4 chars eg. xyz
    * now you can find the document in the search page eg. http://localhost:8080/share/page/search?t=dw:shorturl:xyz

6. To have a really short url you can use, for example, a rewrite rule on Apache as in [rewrite-rule.conf](https://gist.github.com/2779867#file_rewrite_rule.conf) 