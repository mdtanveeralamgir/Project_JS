function Controller(idTheTable, jsonObject) {
	
	this.idTheTable = idTheTable;
	this.jsonObject = jsonObject;
	var countCB = 0;
	
	
	
	
	this.createTable = function(){
		
		var oTheTable = document.getElementById(this.idTheTable); 
		var oTheBodyOfTheTable = document.createElement('TBODY');
		
		//A
		for(key1 in this.jsonObject) {
			
			//B
			for(var x = 0; x < this.jsonObject[key1].length; x++){ 
				
				var oTR = document.createElement('TR');
				
				var counter = 0;
				//C
				for(key2 in this.jsonObject[key1][x]){  
					
					counter++;
					if(key2 != "PICTURE"){
						
						var sDataForCells = this.jsonObject[key1][x][key2]; 
						var oTD = document.createElement('TD');
						oTD.appendChild(document.createTextNode(sDataForCells));
						oTR.appendChild(oTD);
						
						if(counter == 3){
							var oCB = document.createElement('INPUT');
							oCB.setAttribute('type', 'checkbox');
							var oTD = document.createElement('TD');
							oTD.appendChild(oCB);
							oTR.appendChild(oTD);
							countCB++;
						}
						
					}
					else {
						var oIMG = document.createElement('IMG');
						oIMG.setAttribute('src', this.jsonObject[key1][x][key2]);
						var oTD = document.createElement('TD');
						oTD.appendChild(oIMG);
						oTR.appendChild(oTD);
					}
					
					}//C


					oTheBodyOfTheTable.appendChild(oTR);

				}//B



			}
			//A
			
			oTheTable.appendChild(oTheBodyOfTheTable);

		}
		
		this.createTable();
		
		//function for button
		this.highLightSelectedRows = function() {
			
			var oTheTable = document.getElementById(this.idTheTable); 
			var oTBODY = oTheTable.getElementsByTagName('TBODY')[0];
			var oTR = oTBODY.getElementsByTagName('TR'); 
			var aInputs = oTBODY.getElementsByTagName('INPUT'); 
			
			for(var x = 0; x < aInputs.length; x++){
				
				if(aInputs[x].checked){
					oTR[x].style.backgroundColor = "#679DBE";
				}

				else {
					oTR[x].style.backgroundColor = "";
				}
				
			}
			
			
		}



	}