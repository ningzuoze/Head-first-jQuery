$(document).ready(function(){
        var headclix=0,eyeclix=0,noseclix=0,mouthclix=0;
        lightning_one(4000);
        lightning_two(5000);
        lightning_three(7000);

        function face(parts,partsclix){
                $("#"+parts).click(function(){
                        if(partsclix<9){
                                partsclix+=1;
                        }else{
                                partsclix=0;
                        }
                })
        }//end face function
        
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