$(document).ready(function(){
        var headclix=0,eyeclix=0,noseclix=0,mouthclix=0;
        lightning_one(4000);
        lightning_two(5000);
        lightning_three(7000);

        $("#head").click(function(){
                if(headclix<9){
                        $(this).animate({left:"-=367px"},500);
                        headclix+=1;
                }else{
                        $(this).animate({left:"0px"},500);
                        headclix=0;
                }
        })
        $("#eyes").click(function(){
                if(eyeclix<9){
                        $(this).animate({left:"-=367px"},500);
                        eyeclix+=1;
                }else{
                        $(this).animate({left:"0px"},500);
                        eyeclix=0;
                }
        })
        
        $("#nose").click(function(){
                if(noseclix<9){
                        $(this).animate({left:"-=367px"},500);
                        noseclix+=1;
                }else{
                        $(this).animate({left:"0px"},500);
                        noseclix=0;
                }
        })
        
        $("#mouth").click(function(){
                if(mouthclix<9){
                        $(this).animate({left:"-=367px"},500);
                        mouthclix+=1;
                }else{
                        $(this).animate({left:"0px"},500);
                        mouthclix=0;
                }
        })
        
        
        function lightning_one(t){
                $("#container #lightning1").fadeIn(250).fadeOut(250);
                setTimeout("lightning_one()",t);
        }
        function lightning_two(t){
                $("#container #lightning2").fadeIn(250).fadeOut(250);
                setTimeout("lightning_two()",t);
        }
        function lightning_three(t){
                $("#container #lightning_three").fadeIn(250).fadeOut(250);
                setTimeout("lightning_three()",t);
        }
        


})