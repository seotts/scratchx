
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
  
    ext.get_lang = function(text){
	$.ajax({
		url: 'http://ws.detectlanguage.com/0.2/detect?q='+text+ '&key=demo',
		dataType:'json',
		success: function(language_results){
			langCode = 'en'
			callback(langCode);
		}
	});
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
		// Block type, block name, function name, param1 default value, param2 default value
            ['r', 'language of %s', 'get_lang','Hello world'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Detect Language', descriptor, ext);
})({});
