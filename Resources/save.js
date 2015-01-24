var ui = require('ui');

var tblData = [];
var read = function() {
	var db = Ti.Database.open('week3avf');
	var dbRows = db.execute('SELECT * FROM avfweek3');
	while (dbRows.isValidRow()) {
		tblData.push({
			id: dbRows.fieldByName('id'),
			url : dbRows.fieldByName('url'),
			thumbnail : dbRows.fieldByName('thumbnail'),
			title : dbRows.fieldByName('title'),
			owner : dbRows.fieldByName('owner'),
			html: dbRows.fieldByName('embed_html'),
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	ui.createUI(tblData); 
	
};

exports.saveData = function(jsonInfo) {
	var j = jsonInfo.length;
	var data = Ti.Database.open('week3avf');
	data.execute('CREATE TABLE IF NOT EXISTS avfweek3 (id INTEGER PRIMARY KEY, url TEXT, thumbnail TEXT, title TEXT, owner TEXT, embed_html TEXT)');
	for(var i=0; i<j; i++){
	data.execute('INSERT INTO avfweek3 (url,thumbnail,title,owner) VALUES (?,?,?,?)', jsonInfo[i].url, jsonInfo[i].thumbnail_60_url, jsonInfo[i].title, jsonInfo[i].owner, jsonInfo[i].embed_html);
	};
	data.close();

	Cloud.Objects.create({
		classname : "Videos",
			fields : {
			url : jsonInfo.url,
			thumbnail : jsonInfo.thumbnail,
			title : jsonInfo.title,
			owner : jsonInfo.owner,
			embed_html: jsonInfo.embed_html,
		}
	}, function(e) {
		if (e.success) {
			alert("SAVED TO CLOUD");
		} else {
			alert(e);
		}
	});
	read();
};
