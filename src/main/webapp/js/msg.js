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
function addBook() {
    var name = document.getElementById("txtName");
    var tel = document.getElementById("txtTel");
    var add = document.getElementById("txtadd");
    var comp = document.getElementById("txtComp");
    var msg = document.getElementById("txtMsg");
   
    if (name.value == "") {
        alert("请填写您的姓名！");
        name.focus();
        return;
    }
    if (tel.value == "") {
        alert("请填写您的电话！");
        tel.focus();
        return;
    }
    if (tel.value != "") {
        var reg = /^[08]\d{2,3}-?\d{7,8}$/; //验证电话号码为7-8位数字并带有区号
        var regmobile = /^((13[0-9])|(147)|(15[^4,\\D])|(18[0-9]))\d{8}$/;  //移动电话
        if (!reg.test(tel.value) && (!regmobile.test(tel.value))) {
            alert("您输入的联系电话格式不正确！");
            tel.focus();
            return;
        }
    }
    if (add.value == "") {
        alert("请填写贵公司的产品或网址！");
        add.focus();
        return;
    }
    if (comp.value == "") {
        alert("请填写公司名称！");
        comp.focus();
        return;
    }
    if (msg.value == "") {
        alert("请填写留言内容！");
        msg.focus();
        return;
    }
   
    xmlHttpGet = GetXmlHttpObject();
    if (xmlHttpGet == null) {
        alert("浏览器不支持 AJAX!");
        return;
    }
    var url = "/Msg_Add.aspx"
    url = url + "?SID=" + Math.random();
    url = url + "&Name=" + escape(name.value) + "&Tel=" + escape(tel.value);
    url = url + "&Email=" + escape(add.value);
    url = url + "&Comp=" + escape(comp.value);
    url = url + "&Msg=" + escape(msg.value);
    xmlHttpGet.onreadystatechange = addBookOK;
    xmlHttpGet.open("GET", url, true);
    xmlHttpGet.send(null);
}
function addBookOK() {
    if (xmlHttpGet.readyState == 4) {
        if (xmlHttpGet.responseText == "success") {
            alert("留言成功，我们会尽快联系您！");
            return;
        }
        if (xmlHttpGet.responseText == "error") {
            alert("系统忙，请稍后！");
            return;
        }
       
    }
}
function setNull() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtTel").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtComp").value = "";
    document.getElementById("txtMsg").value = "";
}
function addBook2() {
    var name = document.getElementById("txtName");
    var tel = document.getElementById("txtTel");
    var msg = document.getElementById("txtMsg");
    var code = document.getElementById("txtCode");
    if (name.value == "") {
        alert("请填写您的姓名！");
        name.focus();
        return;
    }
    if (tel.value == "") {
        alert("请填写您的电话！");
        tel.focus();
        return;
    }
    if (tel.value != "") {
        var reg = /^[08]\d{2,3}-?\d{7,8}$/; //验证电话号码为7-8位数字并带有区号
        var regmobile = /^((13[0-9])|(147)|(15[^4,\\D])|(18[0-9]))\d{8}$/;  //移动电话
        if (!reg.test(tel.value) && (!regmobile.test(tel.value))) {
            alert("您输入的联系电话格式不正确！");
            tel.focus();
            return;
        }
    }
    if (msg.value == "") {
        alert("请填写留言内容！");
        msg.focus();
        return;
    }
    if (code.value == "") {
        alert("请填写验证码！");
        code.focus();
        return;
    }
    xmlHttpGet = GetXmlHttpObject();
    if (xmlHttpGet == null) {
        alert("浏览器不支持 AJAX!");
        return;
    }
    var url = "../Msg_Add.aspx"
    url = url + "?SID=" + Math.random();
    url = url + "&Name=" + escape(name.value) + "&Tel=" + escape(tel.value);
    url = url + "&Msg=" + escape(msg.value);
    url = url + "&Code=" + code.value;
    xmlHttpGet.onreadystatechange = addBookOK;
    xmlHttpGet.open("GET", url, true);
    xmlHttpGet.send(null);
}
