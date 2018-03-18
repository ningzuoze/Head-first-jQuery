$(document).ready(function(){

    window.onblur=stopLightning;
    window.onfocus=goLightning;

    var int1,int2,int3;
    function goLightning(){
    int1= setInterval("lightning('lightning1')",4300);
    int2= setInterval("lightning('lightning2')",5000);
    int3= setInterval("lightning('lightning3')",7000);
    }
    function stopLightning(){
        clearInterval(int1);
        clearInterval(int2);
        clearInterval(int3);
    }
    

    //闪电背景


    var clix=[0,0,0,0]//储存各个部位的样式

    $("#head").click(function(){
        moveMe(0,this);
    });

    $("#eyes").click(function(){
        moveMe(1,this);
    });

    $("#nose").click(function(){
        moveMe(2,this);
    });

    $("#mouth").click(function(){
        moveMe(3,this);
    });

    function moveMe(i,obj){
            if(clix[i]<9){
                $(obj).animate({left:"-=357px"},500);
                clix[i]=clix[i]+1;
            }else{
                    clix[i]=0;
                    $(obj).animate({left:"0px"},500);
            }
    }
})

           
function lightning(str){
        $("#"+str).fadeIn(250).fadeOut(250);//获取闪电隐藏和显示
}//闪电背景函数（必须放到加载前不然检测不要）