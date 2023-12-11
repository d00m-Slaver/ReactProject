import React from "react";

const Futer = () =>{

    const doubleFuterBlockStyle={
        wigth:'100%',
    }
    const questionFormBlockStyle={
        display:'flex',
        flexDirection:'column',
        height:'350px',
        width:'100%',
        background: 'linear-gradient(to right, #fe0000, #fe9d04)',
        padding:'100px 0px 0px 0px'
    }
    const futerInfoBlockStyle={
        width:'100%',
        height:'100px',
        backgroundColor:'#000032',
        display:'flex',
        flexDirection:'row',
        color:'#5d5d7d',
        justifyContent:'space-between',
    }
    const ContactFormStyle={ 
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'40px',
    }
    const wContactFormStyle={
        width:'700px',
        height:'40px',
        backgroundColor:'white',
        margin:'0px 0px 0px auto ',
    }
    const bContactFormStyle={ 
        width:'100px',
        height:'40px',
        backgroundColor:'black',
        margin:'0px auto 0px 0px  ',
    }
    const textStyle={
        fontSize:'30px',
        height:'40px',
        color:'white',
        margin:'0px auto',
        textAlign:'center',
    }
    const wrapStyle={
        width:'100px',
        textAlign:'center',
        padding:'10px'
    }

return(
<div style={doubleFuterBlockStyle}>
    <div style={questionFormBlockStyle}>
        <div style={textStyle}>
            Наша рассылка может быть на вашей почте!
        </div>
        <div style={ContactFormStyle}>
            <div style={wContactFormStyle}></div>
            <div style={bContactFormStyle}></div>
        </div>
    </div>
    <div style={futerInfoBlockStyle}>
        <div style={wrapStyle}>Adversite</div>
        <div style={wrapStyle}>Contribute</div>
        <div style={wrapStyle}>About</div>
        <div style={wrapStyle}>Self Regulation</div>
        <div style={wrapStyle}>Privacy Policy</div>
        <div style={wrapStyle}>Terms Of Use</div>
        <div style={wrapStyle}>Tecnology Parthner - monocept</div>
        <div style={wrapStyle}>Syte by AREA 17</div>
        <div style={wrapStyle}> follow us in BSTU</div>
    </div>
</div>

);
}

export default Futer;