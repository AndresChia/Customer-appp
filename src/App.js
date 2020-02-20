import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/customers/new" component={NewCustomerContainer} />
          <Route exact path="/customers/:dni" render={props => <CustomerContainer {...props} dni={props.match.params.dni} />} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Route exact path="/" component={HomeContainer} />
        </Switch>
        <Route exact path="/customers/:dni/edit" render={props => <CustomerContainer {...props} dni={props.match.params.dni} />} />
        <Route exact path="/customers/:dni/del" render={props => <CustomerContainer {...props} dni={props.match.params.dni} />} />

      </div>
    </BrowserRouter>
  );
}

export default App;
