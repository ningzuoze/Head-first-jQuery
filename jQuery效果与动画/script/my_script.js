$(document).ready(function(){

        face("head");
        face("eyes");
        face("nose");
        face("mouth");
        setInterval("lightning('lightning1')",4300);
        setInterval("lightning('lightning2')",5000);
        setInterval("lightning('lightning3')",7000);
        


        function face(str){
                var clix=0;//设定几面的值
                $("#"+str).click(function(){//获取点击元素
                        if(clix<9){//判断是否超过设定的面数
                                $(this).animate({left:"-=367px"},500);//把图片想左移动
                                clix+=1;//面数加1
                        }else{
                                $(this).animate({left:"0px"},500);//最后一面时调到第一面
                                clix=0;//初始化面
                        }
                })
        }//end face function
})

               
        function lightning(str){
                $("#"+str).fadeIn(250).fadeOut(250);//获取闪电隐藏和显示
        }//end lightning function