import React from 'react';
import { Container } from 'semantic-ui-react';
import { Router } from "@reach/router"

import TripSearchResults from './screens/TripSearchResults';
import TripSearch from './screens/TripSearch';
import TripDetail from './screens/TripDetail';


function App() {
  return (
    <Container style={styles.containerPadding}>
      <Router>
        <TripSearch path="/" />
        <TripSearchResults path="results/:word/:status/:distance/:duration"/>
        <TripDetail path="trip/:id" />
      </Router>
    </Container>
  );
};

const styles ={
  containerPadding: {
    paddingTop: '2em',
    paddingBottom: '2em'
  }
}

export default App;
