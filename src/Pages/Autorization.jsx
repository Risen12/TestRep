import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import "../Styles/Autorization-page.css";


function Autorization() {
    return (
      <div id='Autorization-page'>
        <Header id='Autorization_header'/>
        <div id='Autorization_content'>
            <form id='Autorization_form'>
            <h1>Авторизация</h1>
            <div>Имя пользователя</div><input placeholder="Пользователь"></input>
            <div>Пароль</div><input placeholder="*****" type="password"></input>
            </form>
        </div>
        <Footer id='Autorization_footer'/>
      </div>
    );
  }
  
  export default  Autorization;