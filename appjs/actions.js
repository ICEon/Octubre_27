// JavaScript Document
function get_device_info(){
	$('#device table td').eq(1).text(navigator.device.name);
    $('#device table td').eq(3).text(device.phonegap);
	$('#device table td').eq(5).text(device.plataform);
	$('#device table td').eq(7).text(device.version);
	$('#device table td').eq(7).text(device.uuid);
}

$(document).ready(function(e) {

    document.addEventListener('deviceready', function (){
	get_device_info();	
	},false);
});