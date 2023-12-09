import React from 'react';

import Photo from "../img/epic_Bg_Trigun.jpg"

const Home = () => {
  const homeBlockStyle = {
    backgroundColor:' #000032'
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'relative'
  };

  const textBlockStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '20px',
    zIndex: 1,
  };

  const imageStyle = {
    margin:'30px',
    maxWidth: '100%',
    height: '500px',
    borderRadius: '8px', 
  };

  const flexBlockStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '200px 100px', // Отступы сверху и снизу на 200px, отступы по бокам на 100px
    backgroundColor: '#f0f0f0',
    padding: '20px',
  };

  return (
    <div style={homeBlockStyle}>
      <div style={containerStyle}>
        <div style={textBlockStyle}>
          <h1>Заголовок</h1>
          <p>Текстовое описание</p>
        </div>
        <img
          src={Photo} // Пример изображения, замените на своё
          alt="Фото"
          style={imageStyle}
        />
      </div>

      <div style={flexBlockStyle}>
        <div>Элемент 1</div>
        <div>Элемент 2</div>
        <div>Элемент 3</div>
      </div>
    </div>
  );
};



export default Home;