var timer = null;
var hh = 0; // heures
var mm = 0; // Minutes
var ss = 0; // Secondes
var cs = 0; // Centièmes de secondes
var Start = document.getElementById('start');
var Reset = document.getElementById('reset');

function ajouter (){
	console.log('Ajout');
	cs++;
	if (cs>99){
		ss++;
		cs=0;
	}
	if (ss>59){
		mm++;
		ss=0;
	}
	if (mm>59){
		hh++;
		mm=0;
	}
	/*Afficher la valeur du chrono*/
	document.getElementById('chronotime').innerHTML = hh+':'+mm+':'+ss+','+cs;
}

function chronoStartStop() {
	console.log('Démarrer/arrêter le chrono');
	if (timer == null) {
		/*demarrage du chrono*/
		document.getElementById('start').value = "Arreter";
		document.getElementById('start').style.backgroundColor = "#CC0000";
		timer = window.setInterval(ajouter, 10);
	}
	else {
		document.getElementById('start').value = "Démarrer";
		document.getElementById('start').style.backgroundColor = "darkgreen";
		window.clearInterval(timer);
		timer = null;
	}
}

function chronoReset() {
	console.log('RAZ du chrono');
	document.getElementById("chronotime").innerHTML = "0:00:00:00";
	start = new Date()
}


Start.addEventListener('click', chronoStartStop);
Reset.addEventListener('click', chronoReset);

