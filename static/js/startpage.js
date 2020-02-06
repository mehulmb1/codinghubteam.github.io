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

var allmails=["master@gmail.com","hacker@gmail.com","coder@gmail.com","tracker@gmail.com","expert@gmail.com",
              "deval123@gmail.com","omkarjoshi@gmail.com","shubhambajare8@gmail.com","abhishekraikar37@gmail.com",
              "abdullazakir99@gmail.com","diagambarghode09@gmail.com","ramankasast1004@gmail.com","hiteshmunot1596@gmail.com",
              "sgalinde2516@gmail.com","pkpoojakamle@gmail.com","adbangal@gmail.com","moresayali27@gmail.com",
              "shubhamgilda319@gmail.com","shwetamerulkar19@gmail.com","Akanshadeshmuk05059@gmail.com","sdanyashweri1@gmail.com",
              "varjavakambhavana@gmail.com","skasalukhe085@gmail.com","architajaiswal71@gmail.com","patilpranav151@gmail.com",
              "somesh@gmail.com","abhishek@gmail.com","adi123@gmail.com","alekhg@gmail.com","ojjawal7@gmail.com","laxman@gmail.com",
              "shubham@gmail.com","karunaagholap@gmail.com","akshadagage@gmail.com","prats.deshmukh@gmail.com","gargi123@gmail.com",
              "aarya@gmail.com","sarangvyawahare123@gmail.com","chinmaysuryw97@gmail.com","joshipritesh73@gmail.com",
              "singhpriyanshi@gmail.com","inglepranil@gmail.com","savkare.piyush@gmail.com","ssssuummeet@gmail.com",
              "jhmahajan98@gmail.com","kviraj72@gmail.com","patilsiddhant1999@gmail.com","chaudhariniraj758@gmail.com",
              "omkarkulkarninisha@gmail.com","akshay.mane@gmail.com","pankaj.patil@gmail.com","dsangde98@gmail.com",
              "srnarule@gmail.com","jayashri101998@gmail.com","shweta.srrathod@gmail.com","tkambale200@gmail.com",
              "addyk700@gmail.com","taranpreekingh902@gmail.com","nirajkhare1911@gmail.com","daundpratik7777@gmail.com",
              "susrutpatil1610@gmail.com","rushabh.surpuriya@gmail.com","soniharsit079@gmail.com","barapukarjeet@gmail.com",
              "vaishvikshooter@gmail.com","atharvawadkar68@gmail.com","rmorkar99@gmail.com","rbp10399@gmail.com",
              "vaidehi5lehekar@gmail.com","reshmakuchekar16@gmail.com","omkarnagarkar53@gmail.com","sarthakshivgan31@gmail.com",
              "jainmeet053@gmail.com","anshula.awasthi10@gmail.com","rajatgade1@gmail.com","akulgod@gmail.com",
              "shraddhapansare16@gmail.com","sanketsuryawanshi1571@gmail.com","abhishek.chilekar@gmail.com","aditya.dorekar@gmail.com",
              "sourabhmahale98@gmail.com","samruddhitamboli@gmail.com","sorgamsunil10@gmail.com","vedantshirude7@gmail.com"
              ]


function validate(){
    //console.log("Validating the email");
    var mail=document.getElementById("email");
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
        hide();
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

function show() {
  var element, name, arr;
  element = document.getElementById("req");
  element.className = element.className.replace(/\bhide\b/g, "");
  name = "show";
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className +=name;
  }
}

function hide() {
  var element, name, arr;
  element = document.getElementById("req");
  element.className = element.className.replace(/\bshow\b/g, "");
  name = "hide";
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className +=name;
  }
}