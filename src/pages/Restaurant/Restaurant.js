import React, { useState } from 'react';
import FoodItem from '../../components/Card/FoodItem'
import { Button, Comment, Form } from 'semantic-ui-react'

const Comments = ({id}) => {
    let [info, setInfo] = useState(
        [
            {name: "Joe Henderson", text: "The food is great!"},
            {name: "Christian Rocha", text: "I didn't like the food!"},
        ]
    );
    
    const addInfo = (e) => {
        setInfo(
            [...info, 
            {name: "Me", text: document.getElementById("newComment").value}]
        )
        if(localStorage.getItem(id)) {
            let temp = JSON.parse(localStorage.getItem(id));
            temp.push({name: "Me", text: document.getElementById("newComment").value})
            localStorage.setItem(id, JSON.stringify(temp))
        } else {
            localStorage.setItem(id, JSON.stringify([{name: "Me", text: document.getElementById("newComment").value}]))
        }
        document.getElementById("newComment").value = ""
        console.log(info)
    }
    return (
        <Comment.Group>
            {localStorage.getItem(id) && JSON.parse(localStorage.getItem(id)).map((c) => (
            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                <Comment.Author>{c.name}</Comment.Author>
                <Comment.Text>{c.text}
                </Comment.Text>
                </Comment.Content>
            </Comment>
            ))}
        <Form reply>
            <Form.TextArea id="newComment" />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={() => addInfo()}/>
        </Form>
        </Comment.Group>
    )
};

const Restaurant = (props) => {
    const { match: {params} } = props
    console.log("MATCH", params);
    
    let [food, setFood] = useState([
        [
            {id: 100, name: "Burrito Wrap", price: "$9.99"}, 
            {id: 101, name: "Burrito Bowl", price: "$9.99"},
            {id: 102, name: "Food 1", price: "$9.99"}, 
            {id: 103, name: "Food 2", price: "$4.99"}
        ],
        [
            {id: 200,name: "Harvey's Burger", price: "$6.99"}, 
            {id: 201,name: "Fries", price: "$3.99"},
            {id: 202, name: "Food 1", price: "$9.99"}, 
            {id: 203, name: "Food 2", price: "$4.99"}
        ],
        [
            {id: 300, name: "Lazeez Wrap", price: "$9.99"}, 
            {id: 301, name: "Lazeez Bowl", price: "$9.99"}
        ],
        [
            {id: 400, name: "Food 1", price: "$9.99"}, 
            {id: 401, name: "Food 2", price: "$4.99"}
        ],
        [
            {id: 500, name: "Food 1", price: "$9.99"}, 
            {id: 501, name: "Food 2", price: "$4.99"}
        ],
        [
            {id: 600, name: "Food 1", price: "$9.99"}, 
            {id: 601, name: "Food 2", price: "$4.99"}
        ],
        [
            {id: 700, name: "Food 1", price: "$9.99"}, 
            {id: 701, name: "Food 2", price: "$4.99"}
        ],
    ]);

    let [restaurants, setRestaurants] = useState(
        [
            {id: "0", address: "Address 1", name:"Burrito Boyz", time:"30-40 Min", price:"$", rating:4, type:["Mexican"], location: '< 5km'},
            {id: "1", address: "Address 2", name:"Harvey's", time:"30-40 Min", price:"$", rating:3, type:["Canadian","Burger", "Fast Food"]},
            {id: "2", address: "Address 3", name:"Lazeez Shawarma", time:"30-40 Min", price:"$", rating:4, type:["Middle Eastern", "Salads", "Healthy"], location: '< 5km'},
            {id: "3",address: "Address 4", name:"Pizza Pizza", time:"20-30 Min", price:"$$", rating:2, type:["Middle Eastern", "Salads", "Healthy"], location: '5km - 20km'},
            {id: "4",address: "Address 5", name:"Popeyes", time:"10-20 Min", price:"$$$", rating:5, type:["Middle Eastern", "Salads", "Healthy"], location: '>20km'},
            {id: "5",address: "Address 6", name:"Burger King", time:"30-40 Min", price:"$", rating:1, type:["Middle Eastern", "Salads", "Healthy"], location: '< 5km'}
        ]
    );

    console.log("ID: ", params.id)
    return (

        <div>
            <div class="restaurant_title">
                <h1>{restaurants[params.id].name}</h1>
                <h2>{restaurants[params.id].address}</h2>
                <h4>{restaurants[params.id].price} {restaurants[params.id].type.map((e) => (" • " + e ))}</h4>
            </div>
            <div>
                <h1 class="comments">Food Items</h1>
            </div>
            <div class="all_cards ">
                {food[params.id].map((item) => (
                    <div class="cards">
                    <FoodItem name={item.name} price={item.price} id={item.id} setCartItems={props.setCartItems} cartItems={props.cartItems}
                    src='https://images.squarespace-cdn.com/content/v1/578ce85a29687f705d94f1a2/1589743327893-V0L59H9UGRIHSTOZYDO4/ke17ZwdGBToddI8pDm48kCcGjQlaoelt7C5hPGq9Rzp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UU4U4t-OyHRaY7T5z-1wzhl4DE2zD4tZbXSzBncBtN8HtEFb-HhWljtJ-vfKDf_eiw/BurritoBoyz_Hero_002.jpg?format=1500w'/>
                </div>
                ))}
            </div>
            <h2 class="comments">Comments</h2>
            <Comments id={params.id}/>
            <div class="space" />
        </div>
    );
};

export default Restaurant
