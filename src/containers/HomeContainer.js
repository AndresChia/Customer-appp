import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerActions from './../components/CustomerActions';


export default class HomeContainer extends Component {
    static propTypes = {

    }

    handleOnClick(event) {
        this.props.history.push('/customers')
    }


    render() {
        return (
            <div>

                <AppFrame header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={(event) => this.handleOnClick(event)}>Listado de clientes</button>
                                {/* <Link to="/customers">Listado de clientes</Link> */}
                            </CustomerActions>
                        </div>
                    } >


                </AppFrame>
            </div>
        )
    }
}
