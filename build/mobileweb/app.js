var api = require("api");
var save = require("save");


var Cloud = require("ti.cloud");

var loginUser = function(){
	Cloud.Users.login({
	login:'timothybinyy@yahoo.com',
	password: 'rocko123'
}, function(e) {
	if (e.success){
		alert("User Logged In");
		api.getInfo();
	}else {
		alert(JSON.stringify(e));
		
		}
	});
};

if (Ti.Network.online){
	loginUser();
}else{
	alert("ERROR NETWORK REQUIRED");
	save.saveData();
};
