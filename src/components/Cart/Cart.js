import React, { useState } from 'react';
import {Button, Dropdown, DropdownButton} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'


const Cart = ({data, setCartItems }) => {
    var sum = 0;
    console.log("Length: ", data.length)
    for(var i=0; i<data.length; i++ ) {
        var price = parseFloat(data[i].price.substr(1));
        sum+=price
        console.log("Price :", price)
    }

    const history = useHistory();

    const routeChange = id =>{ 
        let path = "/Checkout/"; 
        history.push(path);
    }

    console.log("SUMs: ", sum)
    return (
        <div>
            <DropdownButton
                menuAlign="right"
                title="Cart"
                id="dropdown-menu-align-right"
                >
                {data.map((c) => (
                <Dropdown.Item >{c.name} {c.price}</Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Total: ${sum.toFixed(2)}</Dropdown.Item>
                <Button class="pay" onClick={routeChange}>Pay</Button>
            </DropdownButton>
        </div>
    )
}
export default Cart