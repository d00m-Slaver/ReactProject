import React from "react";
import "../Components/css/Footer.css";
import LOGO from "../img/nightLogoF.png";
import odloklDark from "../img/odnoklassniki.png";
import vkDark from "../img/vkD.png";
import faceBookDark from "../img/free-icon-facebookDark.png";
import instDark from "../img/free-icon-instagramDark.png";
import tiktokDark from "../img/tiktokDark.png";

const Footer = () =>{


return(
<div className="doubleFuterBlockStyle">
    <div className="questionFormBlockStyle">
        <div className="AddBlockTextStyle">
            Оставьте свой комментарий о сайте!
        </div>
        <div className="ContactFormStyle">
            <div className="wContactFormStyle"></div>
            <div className="bContactFormStyle"></div>
        </div>
    </div>
    <div className="futerInfoBlockStyle">
        <div className="wrapStyle"> <a href="\aboutUs" className="FooterATextStyle">О компании</a></div>
        <div className="wrapStyle"> <a href="\contacts" className="FooterATextStyle">Контакты редакции и администрации</a></div>
        <div className="wrapStyle"> <a href="\PublicSecurity" className="FooterATextStyle">Пользовательское соглашение</a></div>
        <div className="wrapStyle"> Tecnology Parthner - chatGPT <br/>Follow us in BSTU</div>
        <div className="imgCollectorBlock">
            <img className="imgStyle" src={LOGO}></img>
            <a href="https://ok.ru"><img className="imgStyle" src={odloklDark}/></a>
            <a href="https://vk.com/"><img className="imgStyle" src={vkDark}/></a>
            <a href="https://ru-ru.facebook.com/"><img className="imgStyle" src={faceBookDark}/></a>
            <a href="https://www.instagram.com/"><img className="imgStyle" src={instDark}/></a>
            <a href="https://www.tiktok.com/"><img className="imgStyle" src={tiktokDark}/></a>
        </div>

    </div>
</div>

);
}

export default Footer;