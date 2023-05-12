function Toggle()
{
    var knapp = document.getElementById("toggle");

    document.body.classList.toggle("dark-mode");
    
    var menu = document.getElementsByClassName("Menu");
    
    console.log(menu);

    menu[0].classList.toggle("dark-mode-nav");

    if("Dark mode off"==knapp.textContent)
    
    {

        knapp.textContent =  "Dark mode on";

    }
    else
    {
        knapp.textContent =  "Dark mode off";

    }

}

function ClosePopUpp() {
    const closebutton1 = document.getElementById("PopUpp").style.display = "none";
}
function Getinfoboxtextcolor() {
    const informationdiv = document.getElementsByClassName("PopUpp");
    document.getElementById("PopUpp").style.display = "block"
}