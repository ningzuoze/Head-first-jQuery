$(document).ready(function () {
    function getTime() {
        var a_p = "";
        var d = new Date;
        var curr_hour = d.getHours();
        (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
        (curr_hour == 0) ? curr_hour = 12 : curr_hour = curr_hour;
        (curr_hour > 12) ? curr_hour = curr_hour - 12 : curr_hour = curr_hour;
        var curr_min = d.getMinutes().toString();
        var curr_sec = d.getSeconds().toString();
        if (curr_min.length == 1) { curr_min = "0" + curr_min };
        if (curr_sec.length == 1) { curr_sec = "0" + curr_sec };
        $('#updateTime').html(curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p);
    }
    //返回时间函数

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
                getXMLRacers();//ajax
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

    //循环处理finishers.xml文件
    function getXMLRacers() {
        $.ajax({
            url: "finishers.xml", //通过ajax加载fininshers.xml文件
            cache: false, //本地缓存结果，减少对服务器的调用
            dataType: "xml", //从服务器返回的数据类型
            success: function (xml) {//用返回的数据完成任务
                $("#finishers_m").empty(); //将原先的内容清空
                $("#finishers_f").empty();
                $("#finishers_all").empty();
                $(xml).find("runner").each(function () {//用find找出runner并遍历
                    var info = '<li>姓名：' + $(this).find("fname").text() + ' ' + $(this).find("lname").text() +"  "+ $(this).find("time").text() + '</li>';
                    //找到runner文件中全部的的姓（fneme）和名(lname)还有比赛时间(time)
                    if ($(this).find("gender").text() == "m") {
                        $('#finishers_m').append(info); //判断性别将女运动员放到女列表中
                    } else if ($(this).find("gender").text() == "f") {
                        $('#finishers_f').append(info); //判断性别将男运动员放到男列表中
                    } else { }
                    $('#finishers_all').append(info); //将所有的运动员放到全部列表中
                })
            }
        })

        function getTimeAjax(){
            $('#updateTime').load("time.php");
        }
        getTimeAjax();//利用ajax快捷方式load加载time.php文件
    }
    getXMLRacers();
    //用ajax
    
    function showFrequency(){
        $("#freq").html("每隔"+FREQ/1000+"秒更新数据");
    }
    showFrequency();//显示更新频率

})