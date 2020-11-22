import React, { Component, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { FormControl } from 'react-bootstrap';


const locations = [
  { key: 1, text: '< 5km', value: '< 5km'},
  { key: 2, text: '5km - 20km', value: '5km - 20km'},
  { key: 3, text: '>20km', value: '>20km'},
]

const categories = [
  { key: 1, text: 'Burger', value: 'Burger' },
  { key: 2, text: 'American', value: 'American' },
  { key: 3, text: 'Mexican', value: 'Mexican' },
  { key: 4, text: "Middle Eastern", value: "Middle Eastern" },
  { key: 5, text: "Fast Food", value: "Fast Food" },
  { key: 6, text: "Healthy", value: "Healthy" },
]

const prices = [
  { key: 1, text: '$', value: '$' },
  { key: 2, text: '$$', value: '$$' },
  { key: 3, text: '$$$', value: '$$$' },
]

const ratings = [
  { key: 1, text: '5', value: 5 },
  { key: 2, text: '4', value: 4 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '2', value: 2 },
  { key: 5, text: '1', value: 1 },
]

const FilterMenu = (props) => {
const [activeItem, setActiveItem] = useState(
  {
    rating: "",
    prices: "",
    categories: "",
    locations: "",
    search: ""
  }
);

  const handleChange = (e, data, type) => {
    let obj = {}
    obj[type] = data.value;
    // setActiveItem({...activeItem, type: data.value})
    props.parentCallback(obj);
  }

    return (
      <Menu>
        <Dropdown placeholder='Location' clearable options={locations} selection onChange={(event, data) => handleChange(event, data, "locations")}/>
        <Dropdown placeholder='Category' clearable options={categories} selection onChange={(event, data) => handleChange(event, data, "categories")}/>
        <Dropdown placeholder='Price' clearable options={prices} selection onChange={(event, data) => handleChange(event, data, "prices")}/>
        <Dropdown placeholder='Rating' clearable options={ratings} selection onChange={(event, data) => handleChange(event, data, "rating")}/>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => handleChange(event, event.target, "search")}/>
      </Menu>
    )
}

export default FilterMenu