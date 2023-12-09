import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "../Components/css/Header.css";
import LOGO from "../MainLogo.png";
import {Button} from 'react-bootstrap';

const Header = () =>
{
return(
<Header>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img 
                src={LOGO}
                className="d-inline-block align-top"
                alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/">Все аниме</Nav.Link>
                    <Nav.Link href="/">Топ 100</Nav.Link>
                    <Nav.Link href="/">Избранные</Nav.Link>
                    <Nav.Link href="/">Манга</Nav.Link>
                    <Nav.Link href="/">Контакты</Nav.Link>
                    <Nav.Link href="/">О нас</Nav.Link>
                    <Nav.Link href="/">Личный кабинет</Nav.Link>                    
               </Nav>
               <Form inline>
                    <FormControl 
                    type="text"
                    placeholder="Search"
                    ckassName="mr-sm-2"
                    />
               </Form>
               <Button variant="outline-info">search</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</Header>
);
} 

export default Header;