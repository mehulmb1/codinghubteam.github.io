var startGame=function(){
    document.getElementById('Start').disabled='disabled';
};

function go_full_screen(){
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
}

var allmails=["master@gmail.com","hacker@gmail.com","coder@gmail.com"]


function validate(){
    //console.log("Validating the email");
    var mail=document.getElementById("email");
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
        if(allmails.every(function(o){return o!=mail.value}))
        {
            alert("You are not registered with us.If registered and can't play,then" + "\n" + "Contact the Administrator.");
            mail.value="";
            mail.focus();
        }
        else{
            var a=allmails.indexOf(mail.value);
            console.log("Your Team no is:"+(a+1));
            var team=document.getElementById("team");
            team.value=a+1;
            go_full_screen();
        }
    }
    else{
        //console.log("Emaii ID is Invalid");
        mail.focus();
    }
}

