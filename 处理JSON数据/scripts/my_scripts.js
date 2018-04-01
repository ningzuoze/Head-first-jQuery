$(document).ready(function(){
    //jq插件（把ul元素转换为可点击的标签页）
    $("#main ul").idTabs("male");
    //jq插件（把ul元素转换为可点击的标签页）

    //变量
    var FREQ=1000;//创建等待的时间
    var repeat=true;//设置开关

    //设置开关 
    function startAJAXcalls(){
        if(repeat){
            setTimeout(function(){
                getDBRacers();//ajax
                startAJAXcalls();//调用自身
            },FREQ)//定时调用函数
        }//判断是否为true(刚开始为true)
    } ;//每隔一秒进行一次调用函数
    startAJAXcalls();

    //开停按钮
    $("#btnStop").click(function(){
        repeat=false;//设为false后startAJAXcalls函数不再运行
        $("#freq").html("停止更新");//更新提示文档提示
    });
    //停止按钮
    $("#btnStart").click(function(){
        repeat=true;//设为true后startAJAXcalls函数再次运行
        startAJAXcalls();//运行自引用函数
        showFrequency();//显示跟新频率
    })
    //开始按钮




    //循环处理service.php文件内容为json
    function getDBRacers(){
        $.getJSON("serivce.php?action=getRunners",function(json){//只能解析json文件的格式否则不能运行函数
            if(json.runners.length>0){//判断json文件是否存在
                $('#finishers_m').empty();//清空之前数据
                $('#finishers_f').empty();
                $('#finishers_all').empty();

                $.each(json.runners,function(){//循环json文件（要循环的文件，循环执行的函数）
                    var info ='<li>名字：'+this['fname']+'  '+this['lname']+' '+this['time']+'</li>';//用li储存
                    if(this['gender']=='m'){//判断男女
                       $('#finishers_m').append(info); //添加进去
                    }else if(this['gender']=='f'){
                        $('#finishers_f').append(info);
                    }else{}
                    $('#finishers_all').append(info);
                })
            }
        })
        getTimeAjax();//利用ajax快捷方式load加载time.php文件
    }//用post方法
    




        function getTimeAjax(){
            $('#updateTime').load("time.php");
        }    
    
    function showFrequency(){
        $("#freq").html("每隔"+FREQ/1000+"秒更新数据");
    }
    showFrequency();//显示更新频率


//json
    $("#btnSave").click(function(){
        var data =$("#addRunner :input").serializeArray();
        console.log(data);
        
        $.post("serivce.php?action=addRunner",data,function(json){//$.post(数据发送地址，发送的数据提前串行化，处理函数);
            alert(json);
            if(json.status=='fail'){//判断是否传输成功
                alert(json.message)//弹出为啥错误
            }else if(json.status=="success"){
                alert(json.message);//弹出传输成功
                clearInputs();//清空表单
            }

        },"json")
        console.log(data);
    })
    function clearInputs() {
        $("#addRunner :input").each(function(){
            $(this).val('');
        })
    }//清空表单内容

    $("#addRunner").submit(function(){
        return false;
    })//取消表单中的提交动作
    
})