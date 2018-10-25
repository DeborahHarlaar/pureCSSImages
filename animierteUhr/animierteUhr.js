const sekunde = document.querySelector('.sekunde');
const minute = document.querySelector('.minute');
const stunde = document.querySelector('.stunde');

function setDate(){
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60)*360) + 90;
	sekunde.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes/60)*360) + 90;
	minute.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours/12)*360) + ((minutes/60)*30) + 90;
	stunde.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000)