
(function(ext) {

    var ext = this;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
  
    ext.get_lang = function(text){
	apiKey='trnsl.1.1.20150605T132039Z.c660d54664d42d1d.3e02378e3b4f321ba39e2dee119909f8b402292a';	
	$.ajax({
		url: 'https://translate.yandex.net/api/v1.5/tr.json/detect?key='+APIkey+'&text='+text+'&callback=myCallback',
		dataType:'jsonp',
		success: function(language_results){
			console.log('succeessssss');
			langCode = 'en'
			callback(langCode);
		}
	});
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
		// Block type, block name, function name, param1 default value, param2 default value
            ['R', 'language of %s', 'get_lang','Hello world'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Detect Language', descriptor, ext);
})({});
