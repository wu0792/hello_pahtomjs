var page = require('webpage').create();
//phantom.outputEncoding="utf-8";

page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};

page.open("https://www.baidu.com", function(status) {
   if ( status === "success" ) {
      console.log(page.title); 
   } else {
      console.log("Page failed to load."); 
   }
   phantom.exit(0);
});