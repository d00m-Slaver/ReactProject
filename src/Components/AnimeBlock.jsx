import React from "react";

import "../Components/css/Anime.css"

const AnimeBlock = (props) =>{
    return( 
        <a href={props.put} className="Animeblock">
            <img src={props.imageLink} className="allAnimeImgStyle"/>
            <div>{props.name}</div>
            <div>Серий: {props.sCount}</div>
            <div>Фильмов: {props.fCount}
            </div>
        </a>
    );
}
export default AnimeBlock;