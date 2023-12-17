import React from "react";

const Add = (props) =>{
    const addsBlockStyle = {
        width:'300px',
        height:'1200px',
        border:'1px solid black',
        marginTop:'40px',
      }
    return(
        <div style={addsBlockStyle}>
          <div>{props.infoAdd}</div>
        </div>
    );
}
export default Add;