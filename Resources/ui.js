exports.createUI = function(tblData){
	console.log(tblData);
	
	var getVideo = function(){
		
	};
	
	var win = Ti.UI.createWindow({
		backgroundColor: "grey",
	});
	
	var table  = Ti.UI.createTableView({
	});
	
	for(var i = 0; j=tblData.length; i<j, i++){
		var row = Ti.UI.createTableViewRow({
			height: 50,
			text: tblData[i].title
		});
		
		var image = Ti.UI.createImageView({
			image: tblData[i].thumbnail_60_url,
			left: 5,
			height: 45,
			width: 45,
		});
		
		row.add(image);
	};
	row.addEventListener("click", getVideo);
	
};
