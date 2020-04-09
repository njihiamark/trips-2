import React from 'react';
import {Divider, Image, Grid, Rating} from 'semantic-ui-react';
import MapTrip from '../components/MapTrip';
import {TRIPSARRAY} from '../data/DummyData';


const TripDetail= props => {
    const filteredArray = TRIPSARRAY.filter(function (item) {
        return item.id == props.id
    });
    console.log(filteredArray)
    return(
        filteredArray.map((filteredValue,index)=> {
            return (
                <div key={index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <p>
                                    <span><b>Picked up:</b> {filteredValue.pickup_date}</span>
                                </p>
                                <p>
                                    <span><b>Dropped off:</b> {filteredValue.dropoff_date}</span>
                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <p style={styles.pullRight}>
                                    <b>Cost: </b>
                                    <Image src='/grey-dollar.png' style={styles.iconWidth}/>
                                    <span> {filteredValue.cost} {filteredValue.cost_unit}</span>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <p>
                                    <Image src='/start-cicle.png' style={styles.iconWidth}/>
                                    <span> {filteredValue.pickup_location}</span> 
                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <p style={styles.pullRight}>
                                    {filteredValue.pickdate}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <p>
                                    <Image src='/end-circle.png' style={styles.iconWidth}/>
                                    <span> {filteredValue.dropoff_location}</span> 
                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <p style={styles.pullRight}>
                                    {filteredValue.dropdate}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                    </Grid> 
                    <Grid columns={3} divided style={styles.bottomMargin}>
                        <Grid.Row>
                            <Grid.Column>
                                
                            <div>
                                <Image src={filteredValue.car_pic} size='tiny' verticalAlign='middle' />
                                <p style={styles.mb0}>
                                    <b>Car Model: </b>
                                    {filteredValue.car_model}
                                </p>
                                
                            </div>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                   <b>Distance</b>
                                   <span style={styles.pullRight}> {filteredValue.distance} {filteredValue.distance_unit}</span> 
                                </p>
                                <p>
                                   <b>Duration</b>
                                   <span style={styles.pullRight}> {filteredValue.duration} {filteredValue.duration_unit}</span> 
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <Image src={filteredValue.driver_pic} size='tiny' verticalAlign='middle' />
                                    <p style={styles.mb0}><b> Driver: </b> 
                                    {filteredValue.driver_name }</p>
                                    {filteredValue.driver_rating > 0 ? <Rating defaultRating={filteredValue.driver_rating} maxRating={5} disabled /> : ''}
                                </div>
                                
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid> 
                    <MapTrip pickup_lat={filteredValue.pickup_lat} pickup_lng={filteredValue.pickup_lng} dropoff_lat={filteredValue.dropoff_lat} dropoff_lng={filteredValue.dropoff_lng} /> 
                </div>       
            );
        })
    );
}

const styles = {
    pullRight:{
        float: 'right'
    },
    iconWidth:{
        width: '1em',
        display: 'inline'
    },
    bottomMargin:{
        marginBottom: "1em"
    },
    mb0 :{
        marginBottom: 0
    }
}

export default TripDetail;