import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => (
  <Card>
    <Image src={props.src} wrapped ui={false} />
    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false}/> */}
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.time} • {props.price}</span>
      </Card.Meta>
      <Card.Description>
        Rating: {props.rating}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {props.type.map((e) => (
        e + ", "
      ))}
    </Card.Content>
  </Card>
)

export default CardExampleCard