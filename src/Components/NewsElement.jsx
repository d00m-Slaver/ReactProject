import React from "react";
import Berserk from "../img/berserk2.jpg";

const NewsElement = (props) =>{

    const mainBlockStyle ={
        display:'flex',
        flexDirection:'column',
        width:'420px',
        height:'240px',
        textDecoration:'none',
        margin:'5px'
    }
    const imageStyle ={
        width:'370px',
    }
    const topicStyle ={
        fontSize:'15px',
        color:'red',
    }
    const infoStyle ={
        fontSize:'25px',
        color:'white',
        maxWidth:'470px',
        margin:'0px 15px 5px 15px'
    }


    return(
        <a href = {props.a} style={mainBlockStyle}>
            <img 
            src={Berserk}
            alt="Фото"
            style={imageStyle}
            />
            <div style={topicStyle}>{props.type}</div>
            <div style={infoStyle}>{props.info}</div>
        </a>
    );
}
export default NewsElement;