import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LOGO from "../img/logo.png";
import Styles from"../Components/css/Header.css"


import Home from "../Pages/Home";
import AllAnime from "../Pages/AllAnime";
import Top100 from "../Pages/Top100";
import Manga from "../Pages/Manga";
import Contacts from "../Pages/Contacts";
import AboutUs from "../Pages/AboutUs";




const Header = () =>
{
return(
<>
    <Navbar sticky="top" collapseOnSelect expand="md" style={{backgroundColor:'#000032'}}>
        <Container>
            <Navbar.Brand href="/">
                <img 
                src={LOGO}
                className="d-inline-block align-top"
                width="30"
                height="30"
                alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" style={{color:'#5d5d7d'}}>Главная</Nav.Link>
                    <Nav.Link href="/all" style={{color:'#5d5d7d'}}>Все аниме</Nav.Link>
                    <Nav.Link href="/top100" style={{color:'#5d5d7d'}}>Топ 100</Nav.Link>

                   <Nav.Link href="/manga" style={{color:'#5d5d7d'}}>Манга</Nav.Link>
                    <Nav.Link href="/contacts" style={{color:'#5d5d7d'}}>Контакты</Nav.Link>
                    <Nav.Link href="/aboutUs" style={{color:'#5d5d7d'}}>О нас</Nav.Link>   
                </Nav>
                <div style={{display:'flex',flexGrow:'1', flexDirection:'row', alignItems:'flex-end'}}>
                    <Form style={{maxWidth:'400px'}}>
                        <FormControl 
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2 mr-r"
                        />
                    </Form>
                    <Button variant="outline-info">Search</Button>
                </div>
                     
                    
               

            </Navbar.Collapse>
        </Container>
    </Navbar>
    
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/all" element={<AllAnime/>}/>
            <Route exact path="/top100" element={<Top100/>}/>
            <Route exact path="/manga" element={<Manga/>}/>
            <Route exact path="/contacts" element={<Contacts/>}/>
            <Route exact path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
    </Router>
   
    </>
);
} 

export default Header;