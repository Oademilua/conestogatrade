var faces = [{
    src:'images/dangote.jpg',
    title:'dangote',
    hint:'richest man in 9ja',
    clue:'tdagnygvotluer',
    link: 'https://en.wikipedia.org/wiki/Aliko_Dangote'
},{src:'images/donjazzy.jpg',
    title:'donjazzy',
    hint:'mavin records',
    clue:'dtotnejbazdzyc',
  link: 'https://en.wikipedia.org/wiki/Don_Jazzy'},{src:'images/myoga.jpg',
    title:'ogaatthetop',
    hint:'NSCDC.thatsall',
    clue:'ogaattohestsfp', link: 'https://en.wikipedia.org/wiki/My_Oga_at_the_top'},{src:'images/2baba.jpg',
    title:'2baba',
    hint:'african queen',
    clue:'u2bhfagdbmnixa', link: 'https://en.wikipedia.org/wiki/2Baba'},{src:'images/abacha.jpg',
    title:'abacha',
    hint:'apple killed him',
    clue:'arbaurcdidhgfa', link: 'https://en.wikipedia.org/wiki/Sani_Abacha'},{src:'images/adeboye.jpg',
    title:'adeboye',
    hint:'can somebody shout hallelujah',
    clue:'pxswtrayebofde', link: 'https://en.wikipedia.org/wiki/Enoch_Adeboye'},{src:'images/adefarasin.jpg',
    title:'adefarasin',
    hint:'He is a Pastor',
    clue:'aspdebfasaridn', link: 'https://en.wikipedia.org/wiki/Paul_Adefarasin'},{src:'images/awolowo.jpg',
    title:'awolowo',
    hint:'look at the cap and glasses',
    clue:'tawgoljovwonki', link: 'https://en.wikipedia.org/wiki/Obafemi_Awolowo'},{src:'images/banky.jpg',
    title:'bankyw',
    hint:'capable man',
    clue:'abheansducywop', link: 'https://en.wikipedia.org/wiki/Banky_W.'},{src:'images/buhari.jpg',
    title:'buhari',
    hint:'the change',
    clue:'bxcusvfharyrfi', link: 'https://en.wikipedia.org/wiki/Muhammadu_Buhari'},{src:'images/chimamanda.jpg',
    title:'chimamanda',
    hint:'a writer',
    clue:'cshiumadmanvda', link: 'https://en.wikipedia.org/wiki/Chimamanda_Ngozi_Adichie'},{src:'images/deolasagoe.jpg',
    title:'deolasagoe',
    hint:'Deola fashion designer',
    clue:'dexolgasdargoe', link: 'https://en.wikipedia.org/wiki/Deola_Sagoe'},{src:'images/djspinall.jpg',
    title:'djspinall',
    hint:'the cap',
    clue:'drjsapibnaluly', link: 'https://en.wikipedia.org/wiki/DJ_Spinall'},{src:'images/dokubo.jpg',
    title:'asaridokubo',
    hint:'militant',
    clue:'asbaridoktuibo', link: 'https://en.wikipedia.org/wiki/Mujahid_Dokubo-Asari'},{src:'images/fela.jpg',
    title:'fela',
    hint:'plenty wives + ganja',
    clue:'fenuyexoungrla', link: 'https://en.wikipedia.org/wiki/Fela_Kuti'},{src:'images/goodluck.jpg',
    title:'goodluck',
    hint:'ex president',
    clue:'gnoorsdlusrfck', link: 'https://en.wikipedia.org/wiki/Goodluck_Jonathan'},{src:'images/herbert.jpg',
    title:'macaulay',
    hint:'10 naira note',
    clue:'mawcfarsulfuey', link: 'https://en.wikipedia.org/wiki/Herbert_Macaulay'},{src:'images/honpatrick.jpg',
    title:'honpatrick',
    hint:'la honourable grammarly',
    clue:'hoenpadtrmiuck', link: 'http://infonubia.com/2013/09/hon-patrick-obahiagbons-interview-on.html'},{src:'images/jagaban.jpg',
    title:'jagaban',
    hint:'Tinubu nickname',
    clue:'jtagradbadtrun', link: 'https://en.wikipedia.org/wiki/Bola_Tinubu'},{src:'images/kanu.jpg',
    title:'kanu',
    hint:'olympics 98 hero',
    clue:'kyritadenyvhou', link: 'https://en.wikipedia.org/wiki/Nwankwo_Kanu'},{src:'images/lagbaja.jpg',
    title:'lagbaja',
    hint:'konko below',
    clue:'layvgbiajdavbr', link: 'https://en.wikipedia.org/wiki/Lagbaja'},{src:'images/obasanjo.jpg',
    title:'obasanjo',
    hint:'baba iyabo',
    clue:'obrasfyauvnjor', link: 'https://en.wikipedia.org/wiki/Olusegun_Obasanjo'},{src:'images/okonjo.jpg',
    title:'okonjo',
    hint:'finance',
    clue:'oekcdgtoyvnjuo', link:'https://en.wikipedia.org/wiki/Ngozi_Okonjo-Iweala'},{src:'images/oritsejafor.jpg',
    title:'oritsejafor',
    hint:'CAN',
    clue:'oruitgsejdafor', link: 'https://en.wikipedia.org/wiki/Ayo_Oritsejafor'},{src:'images/psquare.jpg',
    title:'psquare',
    hint:'Senorita',
    clue:'pyusqdqrutarve', link: 'https://en.wikipedia.org/wiki/P-Square'},{src:'images/toolz.jpg',
    title:'toolz',
    hint:'NdaniTV',
    clue:'teovstuiobflzs', link: 'https://en.wikipedia.org/wiki/Toolz'},{src:'images/wizkid.jpg',
    title:'wizkid',
    hint:'One dance ft drake',
    clue:'awsridzyekbind', link: 'https://en.wikipedia.org/wiki/Wizkid_(musician)'},{src:'images/wole.jpg',
    title:'soyinka',
    hint:'nobel laurel',
    clue:'scrotysijdnkda', link: 'https://en.wikipedia.org/wiki/Wole_Soyinka'}];

//used to display objects in the faces when u get the pics right
var counter = 0;
//variables used in the game
var idea;
var names;
var namesNo = 0;
var namesSplit = [];
var nice = 0;
var comment;
var scores = 0;
var levels = 1;
var kicker;

//array that throws jab when u get it wrong
var abuse = ["where are you from","can i see your passport","shaking my head","beht why",
            "just try again","u miss am o"];
//array that informs them that they passed
var correctG = ["You passed: you smart","You passed: you sabi","You passed: ride on","You passed: i like that",
            "You passed: keep it up","You passed: thumbs up"];

//putting the clickable buttons below pix
function putclickable(){

  //  counter = window.localStorage.getItem('key');
    var nameforsplit = faces[counter].title;
    namesplitter = nameforsplit.split("");
    for (var t = 0; t < namesplitter.length; t++){
        var btn = document.createElement("BUTTON");
        var texts = document.createTextNode(namesplitter[t]);
     //   btn.appendChild(texts);
        document.body.appendChild(btn);
        document.getElementById("clickable").appendChild(btn);
        $('#clickable button').addClass("inputx");
        //$('#clickable button').attr("onclick", revclick());
    }
}
//filling option buttons
function splitNamesForButtons(){
    idea = faces[counter].clue;
    namesSplit = idea.split("");
    for (var i = 0;i < namesSplit.length;i++){
        // trying fills the buttons
        var trying = i;
        document.getElementById(trying).value = namesSplit[i];
    }
}


//new way to check winner...fantastic
var kicker;
function emptyalert(){
        kicker = $('#clickable .inputx').text();
}

//checks winning if button is fully filled
function trykicker(){
    names = faces[counter].title;
    if(kicker.length == names.length){
        if(kicker === names){
            winningFunction();
        }else {losingfunction();}
    }
}



function winningFunction(){
    counter++;
    scores += 10;
    levels += 1;
    //saving the scores to the phone
   // window.localStorage.setItem('points', scores);
//    scores = parseInt(window.localStorage.getItem('points'));
    //saving the stage to the phone
  //  window.localStorage.setItem('stages', levels);
//    levels = parseInt(window.localStorage.getItem('stages'));
    //saving the counter to phone
  //  window.localStorage.setItem('key', counter);
//    counter = window.localStorage.getItem('key');
    /////
    document.getElementById("score").innerHTML = scores;
    document.getElementById("level").innerHTML = levels;

    //new things
   var nice = Math.floor(Math.random() * 6);
    comment = correctG[nice];
   // alert(comment);
    navigator.notification.alert(comment, null, "9ja Mascots", "Continue");
    $('.inputx').remove();
    putclickable();
    $('#options input').show();
    splitNamesForButtons();
   // clicking();
    //end of new things
    document.getElementById("result").innerHTML = " ";
    document.getElementById("help").innerHTML = " ";
    $('.inputx').remove();
    $('#options input').show();
    $('#images').attr("src",faces[counter].src);
    $('#images').attr("alt",faces[counter].title);
    splitNamesForButtons();
    putclickable();
// return click on other levels
$('.inputx').click(function(e){
    e.preventDefault();
    if($(this).is(':not(:empty)')){
        var letter = $(this).text()
        $('#options input:not(:visible)').filter(function(){
            return this.value == letter;
        }).first().show();
        $(this).empty();
    }
}).not(':empty').each(function(){
    var letter = $(this).text()
    $('#options input:visible').filter(function(){
        return this.value == letter;
    }).first().hide();
})
}
function losingfunction(){
   var yab = Math.floor(Math.random() * 6);
    document.getElementById("result").innerHTML = abuse[yab];
    navigator.vibrate(200);
//
}




function loading(){
    $('#images').attr("src",faces[counter].src);
    $('#images').attr("alt",faces[counter].title);
    splitNamesForButtons();
    putclickable();
    clicking();
}

$(document).ready(
    function(){
        loading();
})

//jQuery for clickable

function clicking(){
$('#options input').click(function(e){
    e.preventDefault()
    if($('.inputx:empty:first').text($(this).val()).length)
        $(this).hide();
    emptyalert();
    trykicker();
        })

$('.inputx').click(function(e){
    e.preventDefault();
    if($(this).is(':not(:empty)')){
        var letter = $(this).text()
        $('#options input:not(:visible)').filter(function(){
            return this.value == letter;
        }).first().show();
        $(this).empty();
    }
}).not(':empty').each(function(){
    var letter = $(this).text()
    $('#options input:visible').filter(function(){
        return this.value == letter;
    }).first().hide();
})
}

//help function
function helperMan(){
    document.getElementById("help").innerHTML = faces[counter].hint;
}

//controlling nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
function openAccord(){
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
}
//end of nav bar
