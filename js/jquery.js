$(document).ready(function(){

    // ===== Title Bar and Settings =====

    // ----- Variables -----
    var settings = $(".settings-btn");
    var settingsbox = $("#settings-box");
    var themes = $("#themes");
    var resume = $("#resume");
    var themesbox = $("#themes-box");
    var lighttheme = $("#light-theme");
    var darktheme = $("#dark-theme");
    var colortheme = $("#color-theme");
    var restofbox = $("#restofbox");
    var whitebtn = $("#whitereqbtn");
    var blackbtn = $("#blackreqbtn");
    
    // ----- Drop menu hover effects -----
    $("#themes, #resume, #light-theme, #dark-theme, #color-theme").hover(function(){
        $(this).css("background-color", "white")
        $(this).css("color", "rgb(25, 25, 25)")
        $(this).css("cursor", "pointer")
    },function(){
        $(this).css("background-color","rgb(59, 59, 59)")
        $(this).css("color","white")
    })

    // ----- Settings button functions -----
    settings.click(function(){
        settingsbox.slideToggle()
        themesbox.fadeOut()
    })

    $(".container, .row, #background1, #background2, #background3, h1, p, label, input, #llwhite, #llblack").click(function(){
        settingsbox.stop().slideUp()
        themesbox.fadeOut()
    })

    restofbox.click(function(){
        themesbox.fadeOut()
    })

    themes.click(function(){
        themesbox.fadeToggle()
    })

    resume.click(function(){
        var open = require("open");
        
        themesbox.fadeOut()
        open("https://leandroleberon.github.io/Resume/")
    })

    // ----- Theme buttons function -----
    darktheme.click(function(){
        $("#background1").fadeIn().addClass("*");
        $("#background2").fadeOut().removeClass("*");
        $("#background3").fadeOut().removeClass("*");
        whitebtn.fadeIn("fast")
        blackbtn.fadeOut("fast")
        $("h1").css("color","white")
        $("p, label, result, input").css("color","white").css("font-weight","200")
        $("input").css("border","solid white 2px")
        $("#llwhite").fadeIn("fast");
        $("#llblack").fadeOut("fast");
    })

    lighttheme.click(function(){
        $("#background2").fadeIn().addClass("*");
        $("#background1").fadeOut().removeClass("*");
        $("#background3").fadeOut().removeClass("*");
        whitebtn.fadeOut("fast")
        blackbtn.fadeIn("fast")
        $("h1, p, label, result, input").css("color","rgb(67, 67, 67)").css("font-weight","500")
        $("input").css("border","solid rgb(75, 75, 75) 2px")
        $("#llwhite").fadeOut("fast");
        $("#llblack").fadeIn("fast");
    })

    colortheme.click(function(){
        $("#background3").fadeIn().addClass("*");
        $("#background1").fadeOut().removeClass("*");
        $("#background2").fadeOut().removeClass("*");
        whitebtn.fadeIn("fast")
        blackbtn.fadeOut("fast")
        $("h1").css("color","white")
        $("p, label, result, input").css("color","white").css("font-weight","200")
        $("input").css("border","solid white 2px")
        $("#llwhite").fadeIn("fast");
        $("#llblack").fadeOut("fast");
    })
    
    

    // ===== Request Buttons =====
    // ----- Request buttons hover effect -----
    blackbtn.hover(function(){
        $(this).css("background-color","rgb(67, 67, 67)")
        $(this).css("color", "white")
        $(this).css("cursor", "pointer")
    },function(){
        $(this).css("background-color","transparent")
        $(this).css("color","rgb(67, 67, 67)")
    })

    whitebtn.hover(function(){
        $(this).css("background-color","white")
        $(this).css("color", "rgb(25, 25, 25)")
        $(this).css("cursor", "pointer")
    },function(){
        $(this).css("background-color","transparent")
        $(this).css("color","white")
    })



    // ===== Weather Results =====
    // ----- Variables -----
    var button = $(".request-btn");
    var city = $("#city");
    var name = $("#name");
    var desc = $("#desc");
    var temp = $("#temp");
    var icon = $("#weather-icon");

    // ----- Text fade effects -----
    $("#name").fadeOut("slow");
    $("#desc").fadeOut("slow");
    $("#temp").fadeOut("slow");
    $("#weather-icon").fadeOut("slow");

    // ----- Request weather function -----
    button.click(function(){

        $("#name").fadeOut("slow");
        $("#desc").fadeOut("slow");
        $("#temp").fadeOut("slow");
        $("#weather-icon").fadeOut("slow");

        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city.val()+"&units=metric&appid=c6deab6d2453d7bf6933ef05f4f18955")
        .then(response => response.json())
        .then(data => {

            var nameValue = data['city']['name'];
            var counValue = data['city']['country'];
            var tempValue = data['list'][0]['main']['temp'];
            var condValue = data['list'][0]['weather'][0]['main'];
            var descValue = data['list'][0]['weather'][0]['description'];
            var iconValue = data['list'][0]['weather'][0]['icon'];

            setTimeout(function(){ name.text(nameValue+", "+counValue).fadeIn("slow"); }, 500);
            setTimeout(function(){ temp.text(tempValue+" °C.").fadeIn("slow"); }, 700);
            setTimeout(function(){ desc.text(condValue+" ("+descValue+")").fadeIn("slow"); }, 900);
            setTimeout(function(){ icon.css("background-image","url(http://openweathermap.org/img/wn/"+iconValue+"@2x.png").fadeIn("slow"); }, 1100);
        
        })
        
        .catch(err => {
            name.text("Please enter a valid city name.").fadeIn("slow");
            setTimeout(function(){ name.fadeOut("slow"); }, 2000);
            setTimeout(function(){ name.text(""); }, 2500);
        })

    })
    
    // ===== Logo click functions =====

    $("#llwhite, #llblack").hover(function(){
        $(this).css("cursor","pointer")
    })

    $("#llwhite, #llblack").click(function(){
        var open = require("open");
        open("https://leandroleberon.github.io/Portfolio/");
    })
    

});
