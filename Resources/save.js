var ui = require("ui");

exports.saveData = function(jsonInfo) {
	var data = Ti.Database.open('week3avf');
	data.execute('CREATE TABLE IF NOT EXISTS avfweek3 (id INTEGER PRIMARY KEY, url TEXT, thumbnail TEXT, title TEXT, owner TEXT)');
	data.execute('INSERT INTO avfweek3 (url,thumbnail,title,owner) VALUES (?,?,?,?)', jsonInfo.list.url, jsonInfo.list.thumbnail, jsonInfo.list.title, jsonInfo.list.owner);
	data.close();

	Cloud.Objects.create({
		classname : "Videos",
		custom_fields : {
			url : jsonInfo.url,
			thumbnail : jsonInfo.thumbnail,
			title : jsonInfo.title,
			owner : jsonInfo.owner,
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
var tblData = [];
var read = function() {
	var db = Ti.Database.open('week3avf');
	var dbRows = db.execute('SELECT * FROM avfweek3');
	while (dbRows.isValidRow()) {
		tblData.push({
			url : dbRows.fieldByName('url'),
			thumbnail : dbRows.fieldByName('thumbnail'),
			title : dbRows.fieldByName('title'),
			owner : dbRows.fieldByName('owner'),
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	ui.createUI(tblData);
};
