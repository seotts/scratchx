
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
	langCode = 'en';
	callback(langCode);
//	$.ajax({
//		url: 'http://ws.detectlanguage.com/0.2/detect?q='+text+'&key=8bf13d378daa410481e35ba046d47d3a',
//		dataType:'json',
//		success: function(language_results){
//			langCode = 'en'
//			callback(langCode);
//		}
//	});
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
