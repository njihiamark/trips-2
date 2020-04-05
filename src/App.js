import React from 'react';
import { Container } from 'semantic-ui-react';
import TripSearch from './screens/TripSearch';
import TripSearchResults from './screens/TripSearchResults';


function App() {
  return (
    <Container style={styles.containerPadding}>
      <TripSearch  />
      <TripSearchResults />
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
