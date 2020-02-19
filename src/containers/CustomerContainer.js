import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import AppFrame from '../components/AppFrame';
import { getCostumersByDni } from '../selectors/customers'
import { Route } from 'react-router-dom';
import CustomerData from '../components/CustomerData';
import CustomerEdit from '../components/CustomerEdit';

export class CustomerContainer extends Component {


    // componentDidMount() {
    //     const { customers, dni } = this.props;
    //     if (!customers) {

    //         fetch("http://localhost:3001/costumers").then(v => v.json()).then((response) => {
    //             const customers=response.find(element => element.dni === dni);
    //             this.setState(customers)
    //         })
    //     }
    // }

    //  <p>Datos del cliente {customer && customer.name} </p>


    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} />;
            }
        } />
    )

    static propTypes = {
        dni: PropTypes.string.isRequired,
        customer: PropTypes.object,
    }

    render() {
        const { dni } = this.props;
        return (
            <div>
                <AppFrame header={`Cliente ${dni}`} body={this.renderBody()}></AppFrame>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    customer: getCostumersByDni(state, props)
})

export default connect(mapStateToProps, null)(CustomerContainer)
