import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function AllAnime() {

  const mainDivStyle={
    width:'100%',
    backgroundColor:'#000032',
  }
  const libraryBlockStyle={
    maxWidth:'980px',
    minWidth:'300px',
    height:'500px',
    margin:'0px auto',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    borderLeft:'1px solid #5d5d7d',
    borderRight:'1px solid #5d5d7d'
  }

  return (
    <div style={mainDivStyle}>
      <div style={libraryBlockStyle}>
          

      </div>
    </div>
      
  );
}

export default AllAnime;