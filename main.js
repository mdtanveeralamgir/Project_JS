$(document).ready(function() {	
	
	$.getJSON("jaosn/data.json", function(result){
		
		
		var oController = new Controller("studentTable", result);
		document.getElementById("highlightRow").onclick = function(){
			
			oController.highLightSelectedRows();
			
		}
		
	})
	
});