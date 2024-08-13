
var str_id = "";
var str_pw = "";

var input_id;
var input_pw;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    clock = document.getElementById("clock");
    setInterval(out_time, 1000);

//todo

    str_id = input_id.value;
    //str_pw = input_pw.value;

    

}

function login(){

    // alert("id:"+str_id+" pw:"+str_pw);
    // alert("id:"+input_id.value+" pw:"+input_pw.value);

    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "cat" && local_pw == "1234"){
        input_id.value = local_id + " 회원님 반갑습니다.";
    }else{
        alert("로그인 실패");
    }
}

function out_time() {
    var now = new Date();
    str = now.getFullYear() + "년 " + (now.getMonth() + 1) + "월 " + now.getDate() + "일 ";
    switch (now.getDay()) {
        case 0:
            str = str + "일요일 ";
            break;
        case 1:
            str = str + "월요일 ";
            break;
        case 2:
            str = str + "화요일 ";
            break;
        case 3:
            str = str + "수요일 ";
            break;
        case 4:
            str = str + "목요일 ";
            break;
        case 5:
            str = str + "금요일 ";
            break;
        case 6:
            str = str + "토요일 ";
            break;
    }
    str = str + "<br>";
    str = str + now.getHours() + "시 " + now.getMinutes() + "분 " + now.getSeconds() + "초 " + now.getMilliseconds() + "밀리초<br>";

    clock.innerHTML = str;
}

