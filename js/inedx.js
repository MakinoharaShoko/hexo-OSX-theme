clickMenu("blogMenu","blog");
clickMenu("controlMenu","control");
clickMenu("optionsMenu","options");
clickMenu("aboutMenu","about");





function clickMenu(menuID,textID) {
    document.getElementById(textID).addEventListener("click",function () {
        hideMenu("blogMenu", "blog");
        hideMenu("controlMenu", "control");
        hideMenu("optionsMenu", "options");
        hideMenu("aboutMenu", "about");
        showMenu(menuID,textID)
    });

}

function showMenu(menuID,textID) {
    document.getElementById(menuID).style.display = "block";
    document.getElementById(textID).style.backgroundColor ="rgba(3,76,218,1)";
    document.getElementById(textID).style.color = "white";
}

function hideMenu(menuID,textID){
    document.getElementById(menuID).style.display = "none";
    document.getElementById(textID).style.backgroundColor ="rgba(0,0,0,0)";
    document.getElementById(textID).style.color = "black";
}



    document.onclick = function (event) {
        var e = event || window.event;
        var elem = e.srcElement || e.target;
        while (elem) {
            if (elem != document) {
                if (elem.id == "blogMenu" || elem.id == "blog"
                    || elem.id == "controlMenu" || elem.id == "control"
                    || elem.id == "optionsMenu" || elem.id == "options"
                    || elem.id == "aboutMenu" || elem.id == "about") {

                    return;
                }
                elem = elem.parentNode;
            } else {
                hideMenu("blogMenu", "blog");
                hideMenu("controlMenu", "control");
                hideMenu("optionsMenu", "options");
                hideMenu("aboutMenu", "about");
                return;
            }
        }
    }

