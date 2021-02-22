// import Typewriter from 'typewriter-effect/dist/core';

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const navbarLinks = document.querySelectorAll(".navbar-link");
const sections = document.querySelectorAll("section");
const mainFn = () => {
    var scrollvar = $(window).scrollTop();
    console.log(window.pageYOffset, scrollvar, navbarOffsetTop);
    if (scrollvar >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });
};
window.addEventListener("scroll", () => {
    mainFn();
});
mainFn();

$('.customPreviousBtn').click(function () {
    debugger
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel');
})
// Go to the next item
$('.customNextBtn').click(function () {
    debugger
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel');
})
$('.close').click(function () {
    $('.chatCont').toggle("slow", "linear");
    $('.bot-icon').toggle("slow", "linear");
})
$('.bot-icon').click(function () {
    $('.bot-icon').toggle("slow", "linear");
    $('.chatCont').toggle("slow", "linear");
    var bot_profile = $("#bot_profile").height();
    var chat_div = $("#chat-div").height();
    var chatCont = $("#chatCont").height();
    $("#chat-scroll").height(chatCont - chat_div - bot_profile);
    console.log($("#chat-scroll").height())
})

// Go to the previous item
$('.customPrevBtn').click(function () {
    owl.trigger('owl.next');
})
$(document).ready(function () {


    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
        inherit_height_from: '#section-1'
    });
    $('#chat-input').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            console.log(e)
            var query = $('#chat-input')[0].value;
            $('#chat-input')[0].value = "";
            var element = $('#result_div')
            element.append("<div class='userEnteredText'><p>" + query + "</p > </div > ")
            $.ajax({
                type: "POST",
                data: JSON.stringify({
                    "text": query
                }),
                url:"https://protected-castle-46673.herokuapp.com/api/df_text_query",
                contentType: "application/json",
                dataType: "json",
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    var reply = msg.fulfillmentText ;
                    var element = $('#result_div')
                    element.append("<div class='botEnteredText'><p>" + reply + "</p > </div > ")
                  
                        var elementchat = document.getElementById('chat-scroll');
                        elementchat.scrollTop = elementchat.scrollHeight;
                     
                }

            });

        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 5,
        nav: true,
        navText: [$('.am-next'), $('.am-prev')]

    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: 'rgb(0, 71, 70)',
        trackColor: false,
        scaleColor: false,
        lineWidth: 7,
        size: 152,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    new Typewriter('#typewriter', {
        strings: ["Web Developer", "Student", "SoftWare Engineer", "ML Enthusiast"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
    });
    // var typed = new Typed(".typed", {
    // 	strings: [ "Web Developer.","Web Developer.", "Student.","SoftWare Engineer","ML Enthusiast"],
    // 	typeSpeed: 50,
    // 	loop: true,
    // 	showCursor: false
    // });

});