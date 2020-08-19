do{
 note=parseInt(prompt("Veuillez entrer une note entre 1 et 5:"))
}while(isNaN(note) || note<1 || note>5);

switch (note) {
  case 1:
  document.write("horrible");
  break;

  case 2:
  document.write("médiocre");
  break;

case 3:
  document.write("moyen");
  break;

  case 4:
  document.write("bien");
  break;

  case 5:
  document.write("excellent");
  break;
}
