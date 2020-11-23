import React, { useState} from 'react';
import Card from '../../components/Card/Card'
import FilterMenu from '../../components/Menu/FilterMenu'
import { useHistory } from 'react-router-dom'


const Home = () => {
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
    const [activeItem, setActiveItem] = useState(
        {
          rating: "",
          prices: "",
          categories: "",
          locations: "",
          search: ""
        }
    );
    const history = useHistory();

    const routeChange = id =>{ 
        let path = "/Restaurant/"+id; 
        history.push(path);
    }

    const filters = (values) => {
        setActiveItem({...activeItem, ...values});
    }

    const toShow = (res) => {
        // console.log(activeItem)
        if(activeItem.prices != "" && res.price != activeItem.prices)
            return false
        if(activeItem.categories != "" && !res.type.includes(activeItem.categories))
            return false
        if(activeItem.locations != "" && res.location!=activeItem.locations)
            return false
        if(activeItem.rating != "" && res.rating!=activeItem.rating)
            return false
        if(activeItem.search != "" && !res.name.includes(activeItem.search))
            return false
        return true
    }

    return (
        <div id="mainPage">
            <h1 class="comments">Restaurants</h1>
            <FilterMenu parentCallback={(val) => filters(val)}/>
            <div class="all_cards">
                {restaurants.filter((res)=>toShow(res)).map((r) => (
                    <div class="cards pointer" onClick={() => routeChange(r.id)}>
                    <Card name={r.name} time={r.time} price={r.price} rating={r.rating} type={r.type}
                    src='https://images.squarespace-cdn.com/content/v1/578ce85a29687f705d94f1a2/1589743327893-V0L59H9UGRIHSTOZYDO4/ke17ZwdGBToddI8pDm48kCcGjQlaoelt7C5hPGq9Rzp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UU4U4t-OyHRaY7T5z-1wzhl4DE2zD4tZbXSzBncBtN8HtEFb-HhWljtJ-vfKDf_eiw/BurritoBoyz_Hero_002.jpg?format=1500w'/>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Home



