import React from "react";
const AnimeBlock = (props) =>{
    return(
        <div>
            <img/>
            <div>{props.name}</div>
            <div>{props.count}</div>
        </div>
    );
}
export default AnimeBlock;