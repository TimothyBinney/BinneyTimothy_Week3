exports.createUI = function(tblData){
	console.log(tblData);
	
	var getVideo = function(){
		console.log(this);
		var vidWin = Titanium.UI.createWindow({
    	title : this.title,
   		backgroundColor : '#fff'
		});

	var videoPlayer = Titanium.Media.createVideoPlayer({
    	top : 15,
    	autoplay : true,
    	backgroundColor : 'blue',
    	height : 300,
    	width : 300,
    	url: this.embed_html,
    	mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
		});
		
		vidWin.add(videoPlayer);
		vidWin.open();
		};
	
	var win = Ti.UI.createWindow({
		backgroundColor: "white",
	});
	
	var table  = Ti.UI.createTableView({
	});
	var rowData = [];
	for(var i = 0, j=tblData.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			height: 50,
			data: tblData[i],
			hasChild: true,
		});
		
		var image = Ti.UI.createImageView({
			image: tblData[i].thumbnail,
			left: 5,
			height: 45,
			width: 45,
		});
		
		var label = Ti.UI.createLabel({
			text: tblData[i].title,
			left: 55,
			font: {fontSize: 12},
		});
		
		row.add(label);
		row.add(image);
		rowData.push(row);
		row.addEventListener("click", getVideo);
	};
	
	
	
	table.setData(rowData);
	win.add(table);
	win.open();
	
	
};
