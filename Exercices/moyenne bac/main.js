let note=Array(18,7,5,6,3,14,12,16);
let moyenne=0;
let somme=0;
for(var i = 0; i<note.length; i++)
{
	somme=somme+note[i];
	if(note[i]>=16){
		document.write (+note[i]+"très bien");
	}
	else if (note[i]>=13){
		document.write (+note[i]+"bien");
	}
	else if (note[i]>=10){
		document.write (+note[i]+" passable");
	}
	else if (note[i]>=9){
		document.write (+note[i]+"rattrapage");
	}
	else if (note[i]>=5){
		document.write (+note[i]+"recommence");
	}
	document.write('<br>');
}
moyenne = parseFloat (somme/note.length);
document.write ("la moyenne est de:" +moyenne);