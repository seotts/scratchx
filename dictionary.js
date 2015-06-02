(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
		['', 'i am sarah', 's'],
//		['', 'use English dictionary','test'],
//		['', 'use %m.languages to English dictionary', 'test']
//		['r', 'definition of %s', 'test'],
        ]

	//menus: {
	//	languages: ['Spanish', 'Polish', 'Cherokee'],
	//}
    };
	
   

    // Register the extension
    ScratchExtensions.register('Dictionary extension', descriptor, ext);
})({});
