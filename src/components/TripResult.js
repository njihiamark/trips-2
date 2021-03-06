import React from 'react';
import {Card, Rating, Image} from 'semantic-ui-react';
import { useNavigate } from "@reach/router";

const TripResult = (props) => {
    const navigate = useNavigate();

    const cardClickHandler = (e) => {
        e.preventDefault();
        navigate(`/trip/${props.id} `);
    }

    return (
        <Card href='#' fluid onClick={cardClickHandler}>
            <Card.Content>
            <Card.Description>
                <span>{props.pickup_date}</span>
                <span style={styles.pullRight}>{props.cost} {props.cost_unit}</span>
            </Card.Description>
            
            {props.rating ? <Card.Description style={styles.pullRight}><Rating defaultRating={props.rating} maxRating={5} disabled /></Card.Description> : '' }
            
            <Card.Description>
                <p>
                    <Image src='/start-cicle.png' style={styles.iconWidth}/>
                    <span> {props.pickup}</span>
                </p>
                <p>
                    <Image src='/end-circle.png' style={styles.iconWidth}/>
                    <span> {props.dropoff}</span>
                </p>
            </Card.Description>
            </Card.Content>
                <Card.Content extra>
                    {props.status === "COMPLETED" ?
                    <Card.Header textAlign='right' style={styles.greenBlue}>{props.status}</Card.Header> :
                    <Card.Header textAlign='right' style={styles.red}>{props.status}</Card.Header>
                }
            </Card.Content>
        </Card>
    );
};

const styles = {
    pullRight:{
        float: 'right'
    },
    red:{
        color: '#f85959'
    },
    greenBlue:{
        color: '#278ea5'
    },
    iconWidth:{
        width: '1em'
    }
}

export default TripResult;