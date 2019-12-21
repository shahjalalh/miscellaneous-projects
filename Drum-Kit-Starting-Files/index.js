var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var allSounds = ["w", "a", "s", "d", "j", "k", "l"]

for(var i=0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert(allSounds[i]+" clicked");
    });
}


