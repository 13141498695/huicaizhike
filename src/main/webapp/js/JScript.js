var xmlHttp;
var xmlHttpGet;
function GetXmlHttpObject() {
    var xmlHttpNew = null;
    try {
        xmlHttpNew = new XMLHttpRequest();
    }
    catch (e) {
        try {
            xmlHttpNew = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            xmlHttpNew = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttpNew;
}
$(function () {
    $(".clickMorecase").bind("click", function () {
       
        check_more(this);
       
    })
})
$(function() {
    $(".clickMore").bind("click", function () {
        check_morecase(this);
    })
})

$(function () {
    $(".clickMorenews").bind("click", function () {
        clickMorenews(this);
    })
})
$(function () {
    $(".clickMorelist").bind("click", function () {
        clickMorelist(this);
    })
})


var page = 2;
function check_morecase(obj) {
    var flag = $(obj).attr('data_id');
    var mid = document.getElementById("mid").value;
    if (flag == 1) {

        xmlHttpGet = GetXmlHttpObject();
        if (xmlHttpGet == null) {
            alert("浏览器不支持 AJAX!");
            return;
        }
        var url = "/Ajax.aspx"
        url = url + "?SID=" + Math.random();
        url = url + "&type=check_morecase";
        url = url + "&page=" + page;
        url = url + "&mid=" + mid;

        xmlHttpGet.onreadystatechange = GetOKp;
        xmlHttpGet.open("GET", url, true);
        xmlHttpGet.send(null);
    }
}
function GetOKp() {
    if (xmlHttpGet.readyState == 4) {

        if (xmlHttpGet.responseText != "") {
            $(".cate_main").append(xmlHttpGet.responseText);
            page++;
        }
        else {
            $(".clickMore").attr("data_id", 0);
            $(".clickMore").html("已加载全部");
        }
    }
}
function check_more(obj) {
    var flag = $(obj).attr('data_id');
    var mid = document.getElementById("mid").value;
    //alert(flag+mid);
    if (flag == 1) {

        xmlHttpGet = GetXmlHttpObject();
        if (xmlHttpGet == null) {
            alert("浏览器不支持 AJAX!");
            return;
        }
        var url = "/Ajax.aspx"
        url = url + "?SID=" + Math.random();
        url = url + "&type=checkcaseindex";
        url = url + "&page=" + page;
        url = url + "&mid=" + mid;

        xmlHttpGet.onreadystatechange = GetOK;
        xmlHttpGet.open("GET", url, true);
        xmlHttpGet.send(null);
    }
}
function clickMorenews(obj) {
    var flag = $(obj).attr('data_id');
    var mid = document.getElementById("mid").value;
    //alert(flag+mid);
    if (flag == 1) {

        xmlHttpGet = GetXmlHttpObject();
        if (xmlHttpGet == null) {
            alert("浏览器不支持 AJAX!");
            return;
        }
        var url = "/Ajax.aspx"
        url = url + "?SID=" + Math.random();
        url = url + "&type=checknewsindex";
        url = url + "&page=" + page;
        url = url + "&mid=" + mid;

        xmlHttpGet.onreadystatechange = GetOKnews;
        xmlHttpGet.open("GET", url, true);
        xmlHttpGet.send(null);
    }
}
function clickMorelist(obj) {
    var flag = $(obj).attr('data_id');
    var mid = document.getElementById("mid").value;
    //alert(flag+mid);
    if (flag == 1) {

        xmlHttpGet = GetXmlHttpObject();
        if (xmlHttpGet == null) {
            alert("浏览器不支持 AJAX!");
            return;
        }
        var url = "/Ajax.aspx"
        url = url + "?SID=" + Math.random();
        url = url + "&type=checknewslist";
        url = url + "&page=" + page;
        url = url + "&mid=" + mid;

        xmlHttpGet.onreadystatechange = GetOKnewslist;
        xmlHttpGet.open("GET", url, true);
        xmlHttpGet.send(null);
    }
}
function GetOKnewslist() {
    if (xmlHttpGet.readyState == 4) {

        if (xmlHttpGet.responseText != "") {
            $(".cate_main").append(xmlHttpGet.responseText);
            page++;
        }
        else {
            $(".clickMorelist").attr("data_id", 0);
            $(".clickMorelist").html("已加载全部");
        }
    }
}
function GetOKnews() {
    if (xmlHttpGet.readyState == 4) {

        if (xmlHttpGet.responseText != "") {
            $(".cate_main").append(xmlHttpGet.responseText);
            page++;
        }
        else {
            $(".clickMorenews").attr("data_id", 0);
            $(".clickMorenews").html("已加载全部");
        }
    }
}
function GetOK() {
    if (xmlHttpGet.readyState == 4) {

        if (xmlHttpGet.responseText != "") {
            $(".cate_main").append(xmlHttpGet.responseText);
            page++;
        }
        else {
            $(".clickMorecase").attr("data_id", 0);
            $(".clickMorecase").html("已加载全部");
        }
    }
}
