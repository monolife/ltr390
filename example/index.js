var console = require('console');
var LTR390 = require('../ltr390');
var light = new LTR390();

light.readLight(function(err, value){
    if (err) {
        console.log("light error: " + err);
        throw err;
    } else {
        console.log("light value is: ", value, "lx");
    }
});
