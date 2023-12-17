import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Footer from '../Components/Footer';
import AnimeBlock from '../Components/AnimeBlock';
function Top100() {

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
          <AnimeBlock name="Ванпис" sCount="1200" fCount="12" put="/" imageLink="https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg" ></AnimeBlock>
          <AnimeBlock name="Ванпис" sCount="1200" fCount="12" put="/" imageLink="https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg" ></AnimeBlock>
          <AnimeBlock name="Ванпис" sCount="1200" fCount="12" put="/" imageLink="https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg" ></AnimeBlock>
          <AnimeBlock name="Ванпис" sCount="1200" fCount="12" put="/" imageLink="https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg" ></AnimeBlock>
      </div>
    </div>
      <Footer></Footer>
    </div>
      
  );
}

export default Top100;