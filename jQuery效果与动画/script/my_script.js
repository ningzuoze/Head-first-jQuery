$(document).ready(function(){
        var headclix=0,eyeclix=0,noseclix=0,mouthclix=0;

        function face(parts,partsclix){
                $("#"+parts).click(function(){
                        if(partsclix<9){
                                partsclix+=1;
                        }else{
                                partsclix=0;
                        }
                })
        }//end face function
        lightning(4000);
        function lightning(t){
                $("#container #lightning1").fadeIn(250).fadeOut(250);
                setTimeout("lightning(t)",t);
        }

        function lightning_one(){
                $("#container #lightning1").fadeIn(250).fadeOut(250);
                setTimeout("lightning_one()",4000);
        };
        

})