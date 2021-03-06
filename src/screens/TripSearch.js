import React, { useState } from 'react';
import { useNavigate } from "@reach/router";
import { Header, Divider, Input, Checkbox, Button, Grid, Form, Radio } from 'semantic-ui-react';

const TripSearch = () => {
    const [status, setStatus] = useState('COMPLETED');
    const [keyword, setKeyWord] = useState('');
    const [distanceRadios, setDistanceRadios] = useState('moreThanZero');
    const [durationRadios, setDurationRadios] = useState("moreThanZero");
    const navigate = useNavigate();

    const keywordInputHandler = e => {
        setKeyWord(e.target.value);
    };

    const cancelCheckboxHandler = e => {
        if (status === "CANCELED")
            setStatus("COMPLETED");
        else
            setStatus("CANCELED");     
    }

    const distanceRadioGroupHandler = (e, value) => {
        setDistanceRadios( value.value);
    }

    const durationRadioGroupHandler = (e, value) => {
        setDurationRadios( value.value);
    }

    const searchButtonHandler = e => {
        e.preventDefault();
        navigate(`/results/${keyword}/${status}/${distanceRadios}/${durationRadios}`);
    }

    return (
        <div>
            <Header as='h1' textAlign='center' >TripSearch</Header>
            <Divider />
            <span>Keyword</span>
            <div style={styles.bottomMargin}>
                <Input fluid style={styles.bottomMargin} value={keyword} onChange={keywordInputHandler}/>
                <Checkbox label='Include cancelled trips' value={status} checked={status === 'CANCELED'} onChange={cancelCheckboxHandler}/>
            </div>
            <Grid style={styles.bottomMargin}>
                <Grid.Row>
                    <Grid.Column width={8}>
                       <Header as='h4'>Distance</Header> 
                       <Form>
                            <Form.Field>
                                <Radio
                                    label='Any'
                                    name='distanceGroup'
                                    value='moreThanZero'
                                    checked={distanceRadios === 'moreThanZero'}
                                    onChange={distanceRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='Under 3 km'
                                    name='distanceGroup'
                                    value='lessthan3km'
                                    checked={distanceRadios === 'lessthan3km'}
                                    onChange={distanceRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='3 to 8 km'
                                    name='distanceGroup'
                                    value='between3and8'
                                    checked={distanceRadios === 'between3and8'}
                                    onChange={distanceRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='8 to 15 km'
                                    name='distanceGroup'
                                    value='between8and15'
                                    checked={distanceRadios === 'between8and15'}
                                    onChange={distanceRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='More than 15 km'
                                    name='distanceGroup'
                                    value='morethan15'
                                    checked={distanceRadios === 'morethan15'}
                                    onChange={distanceRadioGroupHandler}
                                />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={8}>
                       <Header as='h4'>Time</Header> 
                       <Form>
                            <Form.Field>
                                <Radio
                                    label='Any'
                                    name='timeGroup'
                                    value='moreThanZero'
                                    checked={durationRadios === 'moreThanZero'}
                                    onChange={durationRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='Under 5 min'
                                    name='timeGroup'
                                    value='under5min'
                                    checked={durationRadios === 'under5min'}
                                    onChange={durationRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='5 to 10 min'
                                    name='timeGroup'
                                    value='between5and10'
                                    checked={durationRadios === 'between5and10'}
                                    onChange={durationRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='10 to 15 min'
                                    name='timeGroup'
                                    value='between10and15'
                                    checked={durationRadios === 'between10and15'}
                                    onChange={durationRadioGroupHandler}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='More than 20 min'
                                    name='timeGroup'
                                    value='morethan20'
                                    checked={durationRadios === 'morethan20'}
                                    onChange={durationRadioGroupHandler}
                                />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider />
            <div style={styles.textCenter}>
                <Button primary onClick={searchButtonHandler}>Search</Button>
            </div>
        </div>
    );
};

const styles = {
    bottomMargin:{
        marginBottom: "1em"
    },
    textCenter:{
        textAlign:'center'
    }
};


export default TripSearch;