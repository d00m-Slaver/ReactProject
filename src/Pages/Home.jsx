import React from 'react';

import Photo from "../img/epic_Bg_Trigun.jpg"
import NewsElement from '../Components/NewsElement';
import OldNewsElement from '../Components/OldNewsElement';
import Futer from '../Components/Futer';

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
  const addsBlockStyle = {
    width:'300px',
    height:'1200px',
      border:'1px solid black'
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
        <NewsElement scra="" type="Anime" info="Ожидаются новые серии берсерка на этой неделе" a="/all"/>
        <NewsElement scra="" type="Manga" info="1232 Глава ванпис уже на сайте" a="/all"/>
        <NewsElement scra="" type="Anime" info="Вышла завершая арку серия ванпис" a="/all"/>
      </div>
      
      <div style={whiteNewsBlockStyle}>
        <div style={oldNewsBlockStyle}>
        <OldNewsElement text="Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь" 
        scra="" 
        type="Anime" 
        info="Ожидаются новые серии берсерка на этой неделе" 
        a="/all"/>
        <OldNewsElement 
        text="Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь" 
        scra="" 
        type="Manga" 
        info="1232 Глава ванпис уже на сайте" 
        a="/all"/>
        <OldNewsElement text="Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь
        Лучшие и самые новые новости только у нас, оставляйте отзывы и подписывайтесь" 
        scra="" 
        type="Anime" 
        info="Вышла завершая арку серия ванпис" 
        a="/all"/>
        </div>
        <div style={addsBlockStyle}>
          <div>Тут могла быть ваша реклама.</div>
        </div>
        <div>

        </div>
      </div>
      <Futer></Futer>
    </div>
  );
};



export default Home;