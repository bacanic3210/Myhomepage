

var input_id;
var input_pwd;
var input_pwdchk;
var input_name;
var input_email;
var input_byear;
var input_bmonth;
var input_bday;
var input_gender;
var input_phone;


var id;
var pwd;
var pwdchk;
var name1;
var email;
var byear;
var bmonth;
var bday;
var gender;
var phone;



window.onload = function() {
    input_id = document.getElementById("signup_id");
    input_pwd = document.getElementById("signup_pwd");
    input_pwdchk = document.getElementById("signup_pwdchk");
    input_name = document.getElementById("signup_name");
    input_email = document.getElementById("signup_email");
    input_byear = document.getElementById("birth_y");
    input_bmonth = document.getElementById("birth_m");
    input_bday = document.getElementById("birth_d");
    input_gender = document.getElementsByName("sex");
    input_phone = document.getElementById("phone");
}

function signup() {
    id = input_id.value;
    pwd = input_pwd.value;
    pwdchk = input_pwdchk.value;
    name1 = input_name.value;
    email = input_email.value;
    byear = input_byear.value;
    bmonth = input_bmonth.value;
    bday = input_bday.value;
    phone = input_phone.value;

    for(var i=0;i<input_gender.length;i++){
        if(input_gender[i].checked == true) {
            gender = input_gender[i].value;
        }
    }


    if( lengthchk(id) && lengthchk(pwd) && lengthchk(name1) && lengthchk(email)) {
        if(pwd == pwdchk) {
            out_result();
        }
        else alert("패스워드와 패스워드 재입력 칸이 일치하지 않습니다.")
    }
    else {
        alert("아이디, 패스워드, 이름, 이메일은 6글자 이상 12글자 이하여야 합니다.");
    }
}

function lengthchk(val) {
    if(val.length >= 6 && val.length <=12) {
        return true;
    }
    else {
        return false;
    }
}

function out_result()
{

    alert("ID : " + id + "\nPassword : " + pwd + "\nName : " + name1 + "\nE-mail : " + email + "\nBirthday : " + byear + "-" + bmonth + "-" + bday + "\nGender : " + gender + "\nPhone number : " + phone);
}