exports.createUI = function(tblData){
	console.log(tblData);
	
	var getVideo = function(){
		var vidWin = Titanium.UI.createWindow({
   		backgroundColor : '#fff'
		});
		
	var titleView = Ti.UI.createView({
		top: 20,
		height: 40,
		backgroundColor: "grey",
	});
	
	var titleLabel = Ti.UI.createLabel({
		text: this.videoTitle,
		align: "center",
		color: "black",
	});

	var videoPlayer = Titanium.Media.createVideoPlayer({
    	top : 60,
    	autoplay : true,
    	backgroundColor : 'blue',
    	height : 300,
    	width : 300,
    	url: this.video,
    	mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
		});

		
	var button = Ti.UI.createButton({
		backgroundColor: "green",
		top: 400,
		height: 50,
		width: 200,
		align: "center",
	});
	
	var buttonLabel = Ti.UI.createLabel({
		text: "Back",
		align: "center",
		color: "white",
	});
		
		button.addEventListener("click", function(){
			vidWin.close();
		});
		
		
		button.add(buttonLabel);
		titleView.add(titleLabel);
		vidWin.add(titleView);
		vidWin.add(button);
		vidWin.add(videoPlayer);
		vidWin.open();
		};
		
	
	var win = Ti.UI.createWindow({
		backgroundColor: "white",
	});
	
	var winTitle = Ti.UI.createView({
		top:20,
		height: 40,
		backgroundColor: "grey",
	});
	
	var winLabel = Ti.UI.createLabel({
		text: "Motocross Videos",
		align: "center",
		color: "black",
	});
	
	var table  = Ti.UI.createTableView({
		top: 80,
	});
	var rowData = [];
	for(var i = 0, j=tblData.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			height: 50,
			videoTitle: tblData[i].title,
			data: tblData[i],
			hasChild: true,
			video: tblData[i].url,
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
	winTitle.add(winLabel);
	win.add(winTitle);
	win.add(table);
	win.open();
	
	
};
