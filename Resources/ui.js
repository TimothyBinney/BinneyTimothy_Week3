exports.createUI = function(tblData){
	//console.log(tblData);
	
	var getVideo = function(){
		
	};
	
	var win = Ti.UI.createWindow({
		backgroundColor: "white",
	});
	
	var table  = Ti.UI.createTableView({
	});
	
	for(var i = 0, j=tblData.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			height: 50,
		});
		
		var image = Ti.UI.createImageView({
			image: tblData[i].thumbnail_60_url,
			left: 5,
			height: 45,
			width: 45,
		});
		
		var label = Ti.UI.createLabel({
			text: tblData[i].title,
		});
		
		row.add(label);
		row.add(image);
		table.add(row);
		
	};
	row.addEventListener("click", getVideo);
	
	win.add(table);
	win.open();
	
	
};
