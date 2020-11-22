import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { ToastProvider, useToasts } from 'react-toast-notifications'

const FoodItem = (props) => {

    let selectedObj = {name: props.name, price: props.price}

    const { addToast } = useToasts()

    const Submit = () => {
        // console.log("CARTITEMS: ", props)
        props.setCartItems([selectedObj, ...props.cartItems])
        addToast('Added to Cart', { appearance: 'success' })
    }

    return (
    <Card class="pointer">
        <Image src={props.src} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
            <span className='date'>{props.price}</span>
        </Card.Meta>
        <Button onClick={Submit}>Add to Cart</Button>
        </Card.Content>
    </Card>
    )
}

export default FoodItem