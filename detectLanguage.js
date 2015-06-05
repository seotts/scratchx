
(function(ext) {
    console.log('in function');
    var ext = this;
    var apiKey="trnsl.1.1.20150605T132039Z.c660d54664d42d1d.3e02378e3b4f321ba39e2dee119909f8b402292a";

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
    var langNames={"ar":"Arabic","az":"Azerbaijani","be":"Belarusian","bg":"Bulgarian","bs":"Bosnian","ca":"Catalan","cs":"Czech","da":"Danish","de":"German","el":"Greek","en":"English","es":"Spanish","et":"Estonian","fa":"Persian","fi":"Finnish","fr":"French","he":"Hebrew","hr":"Croatian","hu":"Hungarian","hy":"Armenian","id":"Indonesian","is":"Icelandic","it":"Italian","ja":"Japanese","ka":"Georgian","ko":"Korean","lt":"Lithuanian","lv":"Latvian","mk":"Macedonian","ms":"Malay","mt":"Maltese","nl":"Dutch","no":"Norwegian","pl":"Polish","pt":"Portuguese","ro":"Romanian","ru":"Russian","sk":"Slovak","sl":"Slovenian","sq":"Albanian","sr":"Serbian","sv":"Swedish","th":"Thai","tr":"Turkish","tt":"Tatar","uk":"Ukrainian","vi":"Vietnamese","zh":"Chinese"};
    var names = [];
    for(var n in langNames) names.push(n);

    ext.get_lang = function(text, callback){
	console.log('setting key');
//	var apiKey="trnsl.1.1.20150605T132039Z.c660d54664d42d1d.3e02378e3b4f321ba39e2dee119909f8b402292a";
	console.log('starting ajax');
	var urltext = "https://translate.yandex.net/api/v1.5/tr.json/detect?key="+apiKey+"&text="+text+"&callback=myCallback";
	console.log(urltext);
	$.ajax({
		url: urltext,		
		dataType:'jsonp',
		success: function(language_results){
			langCode = language_results["lang"];
			langName = langNames[langCode];
			callback(langName);
		}
	});
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
		// Block type, block name, function name, param1 default value, param2 default value
            ['R', 'language of %s', 'get_lang','Hello world'],
	    ['R', 'translate %s from %m.langs to %m.langs', 'translate', 'Hola mundo', 'Spanish', 'English'],
        ]
    };
	
    menus: {
  	langs: names,
    }

    // Register the extension
    ScratchExtensions.register('Detect Language', descriptor, ext);
})({});
