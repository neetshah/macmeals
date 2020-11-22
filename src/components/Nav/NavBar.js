import { Switch, Route, Link } from 'react-router-dom';
import {Navbar, Nav, FormControl} from 'react-bootstrap';
import React, {useState} from 'react';
import Home from './../../pages/Home/Home'
import Cart from './../Cart/Cart'
import Restaurant from '../../pages/Restaurant/Restaurant';
import Checkout from './../../pages/Checkout/Checkout'


const Navigation = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
      <div>
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">MacMeals</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" class="navBar">Home</Nav.Link>
                <FormControl type="text" placeholder="Address" className="mr-sm-2" class="navBar" style={{marginLeft: 300}}/>
                </Nav>
                <Cart data={cartItems} setCartItems={setCartItems}></Cart>
            </Navbar.Collapse>
            </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Checkout' render={(props) => <Checkout setCartItems={setCartItems} {...props} />}/>
            <Route path='/Restaurant/:id' render={(props) => <Restaurant setCartItems={setCartItems} cartItems={cartItems} {...props} />} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </div>
    );
}
export default Navigation