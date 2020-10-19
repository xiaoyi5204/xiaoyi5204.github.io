$(function () {
    //2018年已更新
    //每年12月需更新一次  所有的js均是如此（有一个是11月） 更新时12月以当前年为准则   其他的月以下一年为准则
    //倒计时js开始
    //周一周二周三显示周三 周四周五显示周五  周六周日显示周日
    var mydate = new Date();
    $(".month").html(mydate.getMonth() + 1)
    $(".day").html(mydate.getDate())
    //如果是星期一
    if (mydate.getDay() == "1") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate()+2)

        //如果是4月
        if (mydate.getMonth() == 3 && mydate.getDate() == 30) {
            $(".month").html(5);
            $(".day").html(2);
        }
        //如果是7月
        if (mydate.getMonth() == 6 && mydate.getDate() == 30) {
            $(".month").html(8);
            $(".day").html(1);
        }

    } else if (mydate.getDay() == "2") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 1)
        //如果是1月  month02  day02是前边的日期 是当前日期
        if (mydate.getMonth() == 0 && mydate.getDate() == 31) {
            $(".month").html(2);
            $(".day").html(1);
        }
        //如果是7月
        if (mydate.getMonth() == 6 && mydate.getDate() == 31) {
            $(".month").html(8);
            $(".day").html(1);
        }
    } else if (mydate.getDay() == "3") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate())
    }
    else if (mydate.getDay() == "4") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 1)
        //如果是5月
        if (mydate.getMonth() == 4 && mydate.getDate() == 31) {
            $(".month").html(6);
            $(".day").html(1);
        }
    }
    else if (mydate.getDay() == "5") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate())
    }
    else if (mydate.getDay() == "6") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 1)
        //如果是3月
        if (mydate.getMonth() == 2 && mydate.getDate() == 31) {
            $(".month").html(4);
            $(".day").html(1);
        }
        //如果是6月
        if (mydate.getMonth() == 5 && mydate.getDate() == 30) {
            $(".month").html(7);
            $(".day").html(1);
        }
    }
    else if (mydate.getDay() == "0") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate())
    }

});