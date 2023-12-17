import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Footer from '../Components/Footer';
import AnimeBlock from '../Components/AnimeBlock';
function AllAnime() {

  const mainDivStyle={
    width:'100%',
    backgroundColor:'#000032',
  }
  const libraryBlockStyle={
    maxWidth:'980px',
    minWidth:'300px',
    margin:'0px auto',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    borderLeft:'1px solid #5d5d7d',
    borderRight:'1px solid #5d5d7d',
    justifyContent:'space-between',
  }

  return (
    <div>
      <div style={mainDivStyle}>
      <div style={libraryBlockStyle}>
          <AnimeBlock name="Ванпис" sCount="1200" fCount="12" put="/" imageLink="https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg" ></AnimeBlock>
          <AnimeBlock name="Берсерк" sCount="68" fCount="1" put="/" imageLink="https://media.2x2tv.ru/content/images/2022/05/vfyu.jpg" ></AnimeBlock>
          <AnimeBlock name="Волейбол" sCount="88" fCount="3" put="/" imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnP7DpXqqrDE-f6F9MQSGSGFU86YufqwvJAw&usqp=CAU" ></AnimeBlock>
          <AnimeBlock name="Ковбой бибоп" sCount="36" fCount="2" put="/" imageLink="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/fcb7c273-40a2-49fc-a925-783c673f0159/600x900" ></AnimeBlock>
          <AnimeBlock name="Триган" sCount="44" fCount="1" put="/" imageLink="https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg" ></AnimeBlock>
      </div>
    </div>
      <Footer></Footer>
    </div>
      
  );
}

export default AllAnime;