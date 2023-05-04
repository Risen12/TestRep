import React from "react";
import "../Styles/Autorization-page.css";
import "../Styles/Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { UpdateData } from "../Store/Reducers/userSlice";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";
import MyAlert from "../UI/MyAlert";
let current_state = {info:{}};



function Autorization() {
  const dispatch = useDispatch();
  let Error = "";
  const [AlertActive,setAlertActive] = useState(false);
  const navigator = useNavigate();
  async function Auth() {
    let auth_data = {User:user,Pass:pass};
    let url = "https://subabonent.ru/danila/auth.php";
    let response = await fetch(url, 
      {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth_data)
      });
    console.log(auth_data);
    let result = await response.text();
    //console.log(json_result[0]["device_ip"]);
    //console.log(Object.keys(json_result).length);
    //console.log(result); - выводит текст
    if(result !== "error")
    {
      let json_result = JSON.parse(result);
      let store_data = {"user":user,"devices_count": Object.keys(json_result).length,"devices": json_result};
      console.log("Аутенфикация пройдена.");
      dispatch(UpdateData(store_data));
      setCookie("auth",true,1);
      navigator("/Main");
      window.location.reload(false);
    }
    else
    {
      Error = "Ошибка авторизации";
      setAlertActive(true);
      console.log(AlertActive);
      //alert("Ошибка авторизации");
      setPass("");
      setUser("");
    }
  };

  function setCookie(name,value,hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";

  };


  const [user,setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeUser = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const handleChangePass = (event) => {
    const value = event.target.value;
    setPass(value);
  };

  const SubmitHandler = (event) =>
  {
    event.preventDefault();
    console.log("Форма отправлена.");
    Auth();
  };
    return (
      <div id='Autorization-page'>
        <div id='Autorization_content'>
            <form onSubmit={SubmitHandler} method="POST" id='Autorization_form'>
            <h1>Авторизация</h1>
            <div>Имя пользователя</div><MyInput  text={user} plholder="Имя пользователя" changeAction={handleChangeUser}/>
            <div>Пароль</div><MyInput  text={pass} plholder="Пароль" changeAction={handleChangePass} type="password"/>
            <div><MyButton text={"Войти"} type="Submit"/></div>
            </form>
        </div>
        <MyAlert active={AlertActive} setShowAlert={setAlertActive} children={"Ошибка авторизации"} title={"Ошибка"}/>
      </div>
    );
  };
  
  // функция для того, чтоб забрать текующее состояние store в определённом слайсе( в данном случае userSlice)
  function mapStateToProps (current_state) {
    return {
      user: current_state.info
    }
  }
  export default connect(mapStateToProps)(Autorization);