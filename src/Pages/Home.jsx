import React from 'react';

import Photo from "../img/epic_Bg_Trigun.jpg"
import NewsElement from '../Components/NewsElement';
import OldNewsElement from '../Components/OldNewsElement';
import Futer from '../Components/Futer';
import Add from '../Components/Add'


import BerserkNewsPhoto from '../img/berserk2.jpg'
import onePeaceNewsPhoto from '../img/onePeaceNetflix.jpg'
import onePeaceMangaNewsPhoto from '../img/onePeaceManga.jpg'


const Home = () => {
  
  const homeBlockStyle = {
    backgroundColor:'#000032'
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'relative'
  };

  const textBlockStyle = {
    position: 'absolute',
    top: 100,
    left: 120,
    padding: '20px',
    zIndex: 1,
    color: 'white',
    fontSize:'50px',
    maxWidth:'680px',
    lineHeight: '1.4',
  };

  const imageStyle = {
    margin:'50px 120px 0px 50px ',
    maxWidth: '100%',
    height: '550px',
  };

  const newsBlockStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '150px 100px', 
    backgroundColor: '#000032',
    height:'100%',
    padding: '20px',
  };
  const whiteNewsBlockStyle = {
    display: 'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    wigth:'100%',
    backgroundColor: '#ffffff',
    padding: '10px 100px 50px 100px',
    
  } 
  const oldNewsBlockStyle = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    flexGrow:'1',
    justifyContent:'space-between',
    width:'1000px',
  }
  return (
    <div style={homeBlockStyle}>
      <div style={containerStyle}>
        <div style={textBlockStyle}>
          Аниме-Сериал Триган:<br/>
          Спустя пол года второй сезон подошел к 
          своему логическому завершению. Cтудия MAPPA: -"Продолжения не будет." 
        </div>
        <img
          src={Photo} 
          alt="Фото"
          style={imageStyle}
        />
      </div>

      <div style={newsBlockStyle}>
        <NewsElement imageUrl={BerserkNewsPhoto} type="Anime" info="Ожидаются новые серии берсерка на этой неделе" a="/all"/>
        <NewsElement imageUrl={onePeaceMangaNewsPhoto} type="Manga" info="1232 Глава ванпис уже на сайте" a="/manga"/>
        <NewsElement imageUrl={onePeaceNewsPhoto} type="Anime" info="Вышла завершая адаптацию серия ванпис" a="/all"/>
      </div>
      
      <div style={whiteNewsBlockStyle}>
        <div style={oldNewsBlockStyle}>
        <OldNewsElement text="Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь" 
        imageUrl={BerserkNewsPhoto} 
        type="Anime" 
        info="Ожидаются новые серии берсерка на этой неделе" 
        a="/all"/>
        <OldNewsElement 
        text="Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь" 
        imageUrl={onePeaceMangaNewsPhoto} 
        type="Manga" 
        info="1232 Глава ванпис уже на сайте" 
        a="/manga"/>
        <OldNewsElement text="Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь" 
        imageUrl={onePeaceNewsPhoto}
        type="Anime" 
        info="Вышла завершая арку серия ванпис" 
        a="/all"/>
        </div>
        <Add infoAdd="Здесь могла быть ваша реклама, но у вас нет денег."></Add>
        <div>

        </div>
      </div>
      <Futer></Futer>
    </div>
  );
};



export default Home;