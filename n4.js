var express = require("express");
var myParser = require("body-parser");
var app = express();
var port = 7070;
var data;
var o = process.stdout;
app.use(myParser.json());
app.use(myParser.urlencoded({extended : true}));
app.post("*", function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
	o.write('--------------------------');
	o.write('\n method = ' + req.method);
	o.write('\n -> ' + req.url);
	o.write('\n ');

	var len = req.body.length;
	req.body.forEach(function (item){
	    o.write('\n Payload: ' + JSON.stringify(item.data));
	    o.write('\n Full string: ' + JSON.stringify(item));
	    o.write('\n   id: ' + JSON.stringify(item.id) + '[');
	    o.write('\n');

	    item.data.forEach(function (datum) {
		o.write('     ' + datum.timestamp);	
		o.write(' --> ' + datum.value);	
		});
	    o.write('\n ]');
	});
});
app.listen(port);

console.log('Server running at http://localhost:' + port + '/');

