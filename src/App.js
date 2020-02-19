import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/customers/new" component={null} />
          <Route exact path="/customers/:dni" render={props => <CustomerContainer {...props} dni={props.match.params.dni} />} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Route exact path="/" component={HomeContainer} />
        </Switch>
        <Route exact path="/customers/:dni/edit" render={props => <CustomerContainer {...props} dni={props.match.params.dni} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
