// JavaScript Document

$(document).ready(function(){
	var s = skrollr.init({
        render: function(data) {
            $("#scrollinfo").text(data.curTop);
        }
    });
});