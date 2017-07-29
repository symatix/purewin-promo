/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */


/* pricing popup */

$(document).ready(function() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $(".btn-pricing").click(function(){
        var type = $(this).attr("data-type");
        var model = $(this).attr("data-model");
        console.log(type, model);
        if (model === "Trial"){
            $("#signup-type-txt").text(model);
        }
        if (model === "Full"){
            $("#signup-type-txt").text(type);
        }
        $("#signup-type").val(type);
        $("#signup-model").val(model);
        $(".sign-up").css("display","block").animate({height:"533px"})
    })

    $("#submit-signup").on("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(".err-msg").addClass("hidden");

        var type, model, firstName, lastName, eMail, password, passwordRepeat;
        var user = {};

        type = $("#signup-type").val();
        model = $("#signup-model").val();
        firstName = $("#signup-firstName").val();
        lastName = $("#signup-lastName").val();
        eMail = $("#signup-eMail").val();
        //password = $("#signup-password").val();
        confirmPass = $("#signup-pwVerify").val();

        if(!firstName || !lastName || !eMail || !password){
            if (!firstName){
                $("#firstName-err").removeClass("hidden");
                $("#firstName-err").text(" *First name is required");
            }  
            if (!lastName){
                $("#lastName-err").removeClass("hidden");
                $("#lastName-err").text(" *Last name is required");
            }  
            if (!eMail){
                $("#email-err").removeClass("hidden");
                $("#email-err").text(" *E-mail field required");
            } 
            /*if (!password){
                $("#password-err").removeClass("hidden");
                $("#password-err").text(" *Password field required");
            } */
        } else if (eMail.indexOf('@') == -1 || eMail.indexOf('.') == -1){
                $("#email-err").removeClass("hidden");
                $("#email-err").text(" *Invalid e-mail");
        } /*else if (password != confirmPass){
                $("#password-err").removeClass("hidden");
                $("#password-err").text(" *Passwords do not match");
        }*/   else {
            user = {
                subscription:{
                    type:type,
                    model:model,
                },
                firstName:firstName,
                lastName:lastName,
                eMail:eMail,
                //password:password,
            }
            $(".sign-up").animate({height:"0px"},"slow",function(){
                document.getElementById("signup-form").reset();
                $(".sign-up").css("display","none");
            })
        }
    })

    $("#contact-submit").on("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(".err-msg").addClass("hidden");

        var fullName, eMail, message;
        var user = {};

        fullName = $("#contact-fullName").val();
        eMail = $("#contact-email").val();
        message = $("#contact-message").val();

        if(!fullName || !eMail || !message){
            if (!fullName){
                $("#contact-fullName-err").removeClass("hidden");
                $("#contact-fullName-err").text(" *Full name is required");
            }  
            if (!eMail){
                $("#contact-email-err").removeClass("hidden");
                $("#contact-email-err").text(" *E-mail is required");
            }  
            if (!message){
                $("#contact-message-err").removeClass("hidden");
                $("#contact-message-err").text(" *E-mail field required");
            } 
        } else if (eMail.indexOf('@') == -1 || eMail.indexOf('.') == -1){
                $("#contact-email-err").removeClass("hidden");
                $("#contact-email-err").text(" *Invalid e-mail");
        } else {
            contact = {
                fullName:fullName,
                message:message,
                eMail:eMail,
            }
            $(".contact-heading").html("<span>Thank you</span> for contacting us.")
            document.getElementById("contact-form").reset();
        }
    })
});


/* signup form */