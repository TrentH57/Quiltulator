/**
 * 
 */

function createQuiltPieceBuilderTriangle(calcID, QuiltPieceShape, QuiltPieceFabric, baseLength){
	
	var quiltPieceBuilder = document.createElement('div');
	quiltPieceBuilder.setAttribute("calculation_id", calcID);
	quiltPieceBuilder.setAttribute("id", QuiltPieceShape);
	quiltPieceBuilder.setAttribute("onclick", "createQuiltPiece(event)");
	quiltPieceBuilder.setAttribute("fabricID", QuiltPieceFabric);
	quiltPieceBuilder.setAttribute("baseLength", baseLength);
	
	quiltPieceBuilder.style.borderBottom = (quiltPieceBuilder.getAttribute('baseLength') * 5) + 'px solid ' + colorfy(quiltPieceBuilder.getAttribute('fabricID'));
	quiltPieceBuilder.style.borderLeft = (Math.floor(quiltPieceBuilder.getAttribute('baseLength')/2 * 5)) + 'px solid transparent';
	quiltPieceBuilder.style.borderRight = (Math.floor(quiltPieceBuilder.getAttribute('baseLength')/2 * 5)) + 'px solid transparent';
	
	var quiltPieceNavBar = document.getElementById('quiltpieceNavBar');
	quiltPieceNavBar.appendChild(quiltPieceBuilder);
}

function createQuiltPieceBuilderRightTriangle(calcID, QuiltPieceShape, QuiltPieceFabric, baseLength, height){
	
	var quiltPieceBuilder = document.createElement('div');
	quiltPieceBuilder.setAttribute("calculation_id", calcID);
	quiltPieceBuilder.setAttribute("id", QuiltPieceShape);
	quiltPieceBuilder.setAttribute("onclick", "createQuiltPiece(event)");
	quiltPieceBuilder.setAttribute("fabricID", QuiltPieceFabric);
	quiltPieceBuilder.setAttribute("baseLength", baseLength);
	quiltPieceBuilder.setAttribute("height", height);
	
	if(quiltPieceBuilder.id == 'rightRightTriangle'){
		quiltPieceBuilder.style.borderBottom = (quiltPieceBuilder.getAttribute('height') * 5) + 'px solid ' + colorfy(quiltPieceBuilder.getAttribute('fabricID'));
		quiltPieceBuilder.style.borderLeft = (Math.floor(quiltPieceBuilder.getAttribute('baseLength') * 5)) + 'px solid transparent';
	}
	else if(quiltPieceBuilder.id == 'leftRightTriangle'){
		quiltPieceBuilder.style.borderBottom = (quiltPieceBuilder.getAttribute('height') * 5) + 'px solid ' + colorfy(quiltPieceBuilder.getAttribute('fabricID'));
		quiltPieceBuilder.style.borderRight = (Math.floor(quiltPieceBuilder.getAttribute('baseLength') * 5)) + 'px solid transparent';
	}
	
	var quiltPieceNavBar = document.getElementById('quiltpieceNavBar');
	quiltPieceNavBar.appendChild(quiltPieceBuilder);
}

function createQuiltPieceBuilderSquare(calcID, QuiltPieceShape, QuiltPieceFabric, sideLength){
	
	var quiltPieceBuilder = document.createElement('div');
	quiltPieceBuilder.setAttribute("calculation_id", calcID);
	quiltPieceBuilder.setAttribute("id", QuiltPieceShape);
	quiltPieceBuilder.setAttribute("onclick", "createQuiltPiece(event)");
	quiltPieceBuilder.setAttribute("fabricID", QuiltPieceFabric);
	quiltPieceBuilder.setAttribute("sideLength", sideLength);
	
	quiltPieceBuilder.style.width = (quiltPieceBuilder.getAttribute('sideLength') * 5) + 'px';
	quiltPieceBuilder.style.height = (quiltPieceBuilder.getAttribute('sideLength') * 5) + 'px';
	quiltPieceBuilder.style.backgroundColor = colorfy(quiltPieceBuilder.getAttribute('fabricID'));
	
	var quiltPieceNavBar = document.getElementById('quiltpieceNavBar');
	quiltPieceNavBar.appendChild(quiltPieceBuilder);
}

function createQuiltPieceBuilderRectangle(calcID, QuiltPieceShape, QuiltPieceFabric, sideLength, sideHeight){
	
	var quiltPieceBuilder = document.createElement('div');
	quiltPieceBuilder.setAttribute("calculation_id", calcID);
	quiltPieceBuilder.setAttribute("id", QuiltPieceShape);
	quiltPieceBuilder.setAttribute("onclick", "createQuiltPiece(event)");
	quiltPieceBuilder.setAttribute("fabricID", QuiltPieceFabric);
	quiltPieceBuilder.setAttribute("sideLength", sideLength);
	quiltPieceBuilder.setAttribute("sideHeight", sideHeight);
	
	quiltPieceBuilder.style.width = (quiltPieceBuilder.getAttribute('sideLength') * 5) + 'px';
	quiltPieceBuilder.style.height = (quiltPieceBuilder.getAttribute('sideHeight') * 5) + 'px';
	quiltPieceBuilder.style.backgroundColor = colorfy(quiltPieceBuilder.getAttribute('fabricID'));
	
	var quiltPieceNavBar = document.getElementById('quiltpieceNavBar');
	quiltPieceNavBar.appendChild(quiltPieceBuilder);
}

function createQuiltPiece(event){
    var newQuiltPiece = document.createElement('div');
    newQuiltPiece.setAttribute("ondragstart", "drag_start(event)");
    newQuiltPiece.setAttribute("draggable", "true");
    newQuiltPiece.setAttribute("id", Math.floor(Math.random()*1001));
    newQuiltPiece.setAttribute("class", event.target.id);
    newQuiltPiece.setAttribute("onclick", "rotate(event)");
    newQuiltPiece.setAttribute("fabricID", event.target.getAttribute('fabricID'));
    if(event.target.id == 'EqualateralTriangle'){
		newQuiltPiece.setAttribute('baseLength', event.target.getAttribute('baseLength'));
		newQuiltPiece.style.borderBottom = (event.target.getAttribute('baseLength') * 5) + 'px solid ' + colorfy(event.target.getAttribute('fabricID'));
		newQuiltPiece.style.borderLeft = (Math.floor(event.target.getAttribute('baseLength')/2 * 5)) + 'px solid transparent';
		newQuiltPiece.style.borderRight = (Math.floor(event.target.getAttribute('baseLength')/2 * 5)) + 'px solid transparent';
	}
	else if(event.target.id == 'rightRightTriangle'){
		newQuiltPiece.setAttribute('baseLength', event.target.getAttribute('baseLength'));
		newQuiltPiece.setAttribute('height', event.target.getAttribute('height'));
		newQuiltPiece.style.borderBottom = (event.target.getAttribute('height') * 5) + 'px solid ' + colorfy(event.target.getAttribute('fabricID'));
		newQuiltPiece.style.borderLeft = (Math.floor(event.target.getAttribute('baseLength') * 5)) + 'px solid transparent';
	}
	else if(event.target.id == 'leftRightTriangle'){
		newQuiltPiece.setAttribute('baseLength', event.target.getAttribute('baseLength'));
		newQuiltPiece.setAttribute('height', event.target.getAttribute('height'));
		newQuiltPiece.style.borderBottom = (event.target.getAttribute('height') * 5) + 'px solid ' + colorfy(event.target.getAttribute('fabricID'));
		newQuiltPiece.style.borderRight = (Math.floor(event.target.getAttribute('baseLength') * 5)) + 'px solid transparent';
	}
	else if(event.target.id == 'Square'){
		newQuiltPiece.setAttribute('sideLength', event.target.getAttribute('sideLength'));
		newQuiltPiece.style.width = (event.target.getAttribute('sideLength') * 5) + 'px';
		newQuiltPiece.style.height = (event.target.getAttribute('sideLength') * 5) + 'px';
		newQuiltPiece.style.backgroundColor = colorfy(event.target.getAttribute('fabricID'));
	}
	else if(event.target.id == 'Rectangle'){
		newQuiltPiece.setAttribute('sideLength', event.target.getAttribute('sideLength'));
		newQuiltPiece.setAttribute('sideHeight', event.target.getAttribute('sideHeight'));
		newQuiltPiece.style.width = (event.target.getAttribute('sideLength') * 5) + 'px';
		newQuiltPiece.style.height = (event.target.getAttribute('sideHeight') * 5) + 'px';
		newQuiltPiece.style.backgroundColor = colorfy(event.target.getAttribute('fabricID'));
	}
	

    var classInput = document.createElement('input');
    classInput.setAttribute("type", "hidden");
    classInput.setAttribute("value", event.target.getAttribute('calculation_id'));
    newQuiltPiece.appendChild(classInput);

    var quiltDesign = document.getElementById('quiltPatternCanvas');
    quiltDesign.appendChild(newQuiltPiece);
}

function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
    event.dataTransfer.setData("quiltPieceID", event.target.id)
}

function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(',');
    var quiltPiece = document.getElementById(offset[2]);
    quiltPiece.style.left = (event.clientX + parseInt(offset[0])) + 'px';
    quiltPiece.style.top = (event.clientY + parseInt(offset[1])) + 'px';
    event.preventDefault();
    var quiltPiece = document.getElementById(event.dataTransfer.getData("quiltPieceID"));
    return false;
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

var degrees = 0; 
function rotate(event){
	degrees+=90;
	event.target.style.transform = 'rotateZ(' + degrees + 'deg)';
}

function colorfy(fabricID){
	var color = '';
	if(fabricID == 'A'){
		color = 'red';
	}
	else if(fabricID == 'B'){
		color = 'blue';
	}
	else if(fabricID == 'C'){
		color = 'green';
	}
	else if(fabricID == 'D'){
		color = 'orange';
	}
	else if(fabricID == 'E'){
		color = 'yellow';
	}
	else if(fabricID == 'F'){
		color = 'purple';
	}
	else if(fabricID == 'G'){
		color = 'pink';
	}
	return color;
}

function gatherQuiltPieces(){
	var quiltPieces = document.getElementById("quiltPatternCanvas").childNodes;
    return quiltPieces;	
	
}

function sortQuiltPiecesByFabric(quiltPieces){
	var Apieces = [];
	var Bpieces = [];
	var Cpieces = [];
	var Dpieces = [];
	var Epieces = [];
	var Fpieces = [];
	var Gpieces = [];
	var sortedQuiltPieces = [];
	for(var i = 0; i < quiltPieces.length; i++){
		if(quiltPieces[i].getAttribute('fabricID') == 'A'){
			Apieces.push(quiltPieces[i]);
		}
		else if(quiltPieces[i].getAttribute('fabricID') == 'B'){
			Bpieces.push(quiltPieces[i]);
		}
		else if(quiltPieces[i].getAttribute('fabricID') == 'C'){
			Cpieces.push(quiltPieces[i]);
		}
		else if(quiltPieces[i].getAttribute('fabricID') == 'D'){
			Dpieces.push(quiltPieces[i]);
		}
		else if(quiltPieces[i].getAttribute('fabricID') == 'E'){
			Epieces.push(quiltPieces[i]);
		}
		else if(quiltPieces[i].getAttribute('fabricID') == 'F'){
			Fpieces.push(quiltPieces[i]);
		}
		else if(quiltPieces[i].getAttribute('fabricID') == 'G'){
			Gpieces.push(quiltPieces[i]);
		}
	}
	if(Apieces.length > 0){
		sortedQuiltPieces.push(Apieces);
	}
	if(Bpieces.length > 0){
		sortedQuiltPieces.push(Bpieces);
	}
	if(Cpieces.length > 0){
		sortedQuiltPieces.push(Cpieces);
	}
	if(Dpieces.length > 0){
		sortedQuiltPieces.push(Dpieces);
	}
	if(Epieces.length > 0){
		sortedQuiltPieces.push(Epieces);
	}
	if(Fpieces.length > 0){
		sortedQuiltPieces.push(Fpieces);
	}
	if(Gpieces.length > 0){
		sortedQuiltPieces.push(Gpieces);
	}
	return sortedQuiltPieces;
}

function equalateralTriangleArea(trianglePiece){
	var sideLength = trianglePiece.getAttribute('baseLength');
	sideLength++;
	var area = (Math.sqrt(3)/4)*(sideLength * sideLength);
	return area;
}

function rightTriangleArea(rightTrianglePiece){
	var baseLength = rightTrianglePiece.getAttribute('baseLength');
	var height = rightTrianglePiece.getAttribute('height');
	baseLength++;
	height++;
	var area = (baseLength * height)/ 2;
	return area;
	
}

function squareArea(squarePiece){
	var sideLength = squarePiece.getAttribute('sideLength');
	sideLength++;
	var area = sideLength * sideLength;
	return area;
}

function rectangleArea(rectanglePiece){
	var sideLength = rectanglePiece.getAttribute('sideLength');
	var sideHeight = rectanglePiece.getAttribute('sideHeight');
	sideLength++;
	sideHeight++;
	var area = sideLength * sideHeight;
	return area;
}



const smallRollYard = 1944;
const mediumRollYard = 2592;
const largeRollYard = 4248;

function calculateFabricYards(){
	var Atotal = 0;
	var Btotal = 0;
	var Ctotal = 0;
	var Dtotal = 0;
	var Etotal = 0;
	var Ftotal = 0;
	var Gtotal = 0;
	var quiltPieces = gatherQuiltPieces();
	var sortedQuiltPieces = sortQuiltPiecesByFabric(quiltPieces);
	for (var i = 0; i < sortedQuiltPieces.length; i++){
		for ( var j = 0; j < sortedQuiltPieces[i].length; j++){
			if (sortedQuiltPieces[i][j].getAttribute('fabricID') == 'A'){
				if(sortedQuiltPieces[i][j].getAttribute('class')== 'EqualateralTriangle'){
					Atotal += equalateralTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'rightRightTriangle' || sortedQuiltPieces[i][j].getAttribute('class') == 'leftRightTriangle'){
					Atotal+= rightTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Square'){
					Atotal+= squareArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Rectangle'){
					Atotal+= rectangleArea(sortedQuiltPieces[i][j]);
				}
			}
			else if (sortedQuiltPieces[i][j].getAttribute('fabricID') == 'B'){
				if(sortedQuiltPieces[i][j].getAttribute('class')== 'EqualateralTriangle'){
					Btotal += equalateralTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'rightRightTriangle' || sortedQuiltPieces[i][j].getAttribute('class') == 'leftRightTriangle'){
					Btotal+= rightTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Square'){
					Btotal+= squareArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Rectangle'){
					Btotal+= rectangleArea(sortedQuiltPieces[i][j]);
				}
			}
			else if (sortedQuiltPieces[i][j].getAttribute('fabricID') == 'C'){
				if(sortedQuiltPieces[i][j].getAttribute('class')== 'EqualateralTriangle'){
					Ctotal += equalateralTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'rightRightTriangle' || sortedQuiltPieces[i][j].getAttribute('class') == 'leftRightTriangle'){
					Ctotal+= rightTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Square'){
					Ctotal+= squareArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Rectangle'){
					Ctotal+= rectangleArea(sortedQuiltPieces[i][j]);
				}
			}
			else if (sortedQuiltPieces[i][j].getAttribute('fabricID') == 'D'){
				if(sortedQuiltPieces[i][j].getAttribute('class')== 'EqualateralTriangle'){
					Dtotal += equalateralTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'rightRightTriangle' || sortedQuiltPieces[i][j].getAttribute('class') == 'leftRightTriangle'){
					Dtotal+= rightTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Square'){
					Dtotal+= squareArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Rectangle'){
					Dtotal+= rectangleArea(sortedQuiltPieces[i][j]);
				}
			}
			else if (sortedQuiltPieces[i][j].getAttribute('fabricID') == 'E'){
				if(sortedQuiltPieces[i][j].getAttribute('class')== 'EqualateralTriangle'){
					Etotal += equalateralTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'rightRightTriangle' || sortedQuiltPieces[i][j].getAttribute('class') == 'leftRightTriangle'){
					Etotal+= rightTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Square'){
					Etotal+= squareArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Rectangle'){
					Etotal+= rectangleArea(sortedQuiltPieces[i][j]);
				}
			}
			else if (sortedQuiltPieces[i][j].getAttribute('fabricID') == 'F'){
				if(sortedQuiltPieces[i][j].getAttribute('class')== 'EqualateralTriangle'){
					Ftotal += equalateralTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'rightRightTriangle' || sortedQuiltPieces[i][j].getAttribute('class') == 'leftRightTriangle'){
					Ftotal+= rightTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Square'){
					Ftotal+= squareArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Rectangle'){
					Ftotal+= rectangleArea(sortedQuiltPieces[i][j]);
				}
			}
			else if (sortedQuiltPieces[i][j].getAttribute('fabricID') == 'G'){
				if(sortedQuiltPieces[i][j].getAttribute('class')== 'EqualateralTriangle'){
					Gtotal += equalateralTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'rightRightTriangle' || sortedQuiltPieces[i][j].getAttribute('class') == 'leftRightTriangle'){
					Gtotal+= rightTriangleArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Square'){
					Gtotal+= squareArea(sortedQuiltPieces[i][j]);
				}
				else if(sortedQuiltPieces[i][j].getAttribute('class') == 'Rectangle'){
					Gtotal+= rectangleArea(sortedQuiltPieces[i][j]);
				}
			}
		}
	}
	displayYardage(Atotal, Btotal, Ctotal, Dtotal, Etotal, Ftotal, Gtotal);
}

function displayYardage(A, B, C, D, E, F, G){
	var AsmallYard = Math.ceil(A / smallRollYard);
	var AmediumYard = Math.ceil(A / mediumRollYard);
	var AlargeYard = Math.ceil(A / largeRollYard);
	
	var BsmallYard = Math.ceil(B / smallRollYard);
	var BmediumYard = Math.ceil(B / mediumRollYard);
	var BlargeYard = Math.ceil(B / largeRollYard);

	var CsmallYard = Math.ceil(C / smallRollYard);
	var CmediumYard = Math.ceil(C / mediumRollYard);
	var ClargeYard = Math.ceil(C / largeRollYard);
	
	var DsmallYard = Math.ceil(D / smallRollYard);
	var DmediumYard = Math.ceil(D / mediumRollYard);
	var DlargeYard = Math.ceil(D / largeRollYard);
	
	var EsmallYard = Math.ceil(E / smallRollYard);
	var EmediumYard = Math.ceil(E / mediumRollYard);
	var ElargeYard = Math.ceil(E / largeRollYard);
	
	var FsmallYard = Math.ceil(F / smallRollYard);
	var FmediumYard = Math.ceil(F / mediumRollYard);
	var FlargeYard = Math.ceil(F / largeRollYard);
	
	var GsmallYard = Math.ceil(G / smallRollYard);
	var GmediumYard = Math.ceil(G / mediumRollYard);
	var GlargeYard = Math.ceil(G / largeRollYard);
	
	document.getElementById('AsmallYard').innerHTML= AsmallYard;
	document.getElementById('AmediumYard').innerHTML= AmediumYard;
	document.getElementById('AlargeYard').innerHTML= AlargeYard;
	
	document.getElementById('BsmallYard').innerHTML= BsmallYard;
	document.getElementById('BmediumYard').innerHTML= BmediumYard;
	document.getElementById('BlargeYard').innerHTML= BlargeYard;
	
	document.getElementById('CsmallYard').innerHTML= CsmallYard;
	document.getElementById('CmediumYard').innerHTML= CmediumYard;
	document.getElementById('ClargeYard').innerHTML= ClargeYard;
	
	document.getElementById('DsmallYard').innerHTML= DsmallYard;
	document.getElementById('DmediumYard').innerHTML= DmediumYard;
	document.getElementById('DlargeYard').innerHTML= DlargeYard;
	
	document.getElementById('EsmallYard').innerHTML= EsmallYard;
	document.getElementById('EmediumYard').innerHTML= EmediumYard;
	document.getElementById('ElargeYard').innerHTML= ElargeYard;
	
	document.getElementById('FsmallYard').innerHTML= FsmallYard;
	document.getElementById('FmediumYard').innerHTML= FmediumYard;
	document.getElementById('FlargeYard').innerHTML= FlargeYard;
	
	document.getElementById('GsmallYard').innerHTML= GsmallYard;
	document.getElementById('GmediumYard').innerHTML= GmediumYard;
	document.getElementById('GlargeYard').innerHTML= GlargeYard;

}






