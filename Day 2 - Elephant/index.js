document.addEventListener('mousemove', function(event) {
	mousePosition(event, 'left');
	mousePosition(event, 'right');
}, false);

function mousePosition(event, eyeDefinition){
	//Position of Cursor:
/*	var PositionCursorX = null;
	var PositionCursorY = null;*/

	PositionCursorX = event.pageX;
	PositionCursorY = event.pageY;
	//console.log(PositionCursorX, PositionCursorY);

	//Position of div (middle):
	var eye = document.getElementById(eyeDefinition + "Eye");
	var position = eye.getBoundingClientRect();

	var MittelpunktAugeX = (position.left + position.right) / 2;
	var MittelpunktAugeY = (position.top + position.bottom) / 2;

	//Position of pupil (middle):
	var pupil = document.getElementById(eyeDefinition + "Pupil");
	var position = pupil.getBoundingClientRect();

	var MittelpunktPupilleX = (position.left + position.right) / 2;
	var MittelpunktPupilleY = (position.top + position.bottom) / 2;

	//Radius berechnen:
	var radius = 12;

	//Schnittpunkt x zwischen Kreis und Strecke; Mittelpunkt der Pupille
	var Steigung = (PositionCursorY - MittelpunktAugeY) / (PositionCursorX - MittelpunktAugeX)

	var SchnittpunktKreisX = radius / Math.sqrt(Steigung*Steigung + 1) * (PositionCursorX - MittelpunktAugeX) / Math.abs(PositionCursorX - MittelpunktAugeX);
	var SchnittpunktKreisY = SchnittpunktKreisX * Steigung;

	//oben links bei der Pupile:
	var SxOben = SchnittpunktKreisX;
	var SyLinks = SchnittpunktKreisY;
	//console.log(SxOben, SyLinks);

	//Position the Pupil at the new Point
	var newpupil = document.getElementById(eyeDefinition +"Pupil");
	newpupil.style.position = "absolute";
	newpupil.style.left = "calc(35% + " + SxOben + "px)";
	newpupil.style.top = "calc(35% + " + SyLinks + "px)";
}