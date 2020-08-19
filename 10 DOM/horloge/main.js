document.getElementById("para").innerHTML = 'ce texte est affiché par JavaScript!';

document.querySelector("#horloge span").textContent = "12:30:00";

function horloge(id)
{
        
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }

        document.querySelector("#horloge span").textContent = h+':'+m+':'+s;
        setTimeout('date_heure("'+horloge+'");','1000');
        return true;
}