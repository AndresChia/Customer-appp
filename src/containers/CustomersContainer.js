import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import CustomerList from '../components/CustomerList'
import CustomerActions from '../components/CustomerActions';
import { connect } from "react-redux";
import { fetchCustomer } from '../actions/fetchCustomers';
import PropTypes from 'prop-types'
import { getCostumers } from './../selectors/customers'



export class CustomersContainer extends Component {


    componentDidMount() {
        this.props.fetchCustomer();
    }

    handleAddNew() {
        this.props.history.push('/customers/new')
    }


    renderBody = (customers) => {
        return (
            <div>
                <CustomerList customers={customers} urlPatch={'customers/'}>
                </CustomerList>
                <CustomerActions>
                    <button onClick={() => this.handleAddNew()}>Nuevo Cliente</button>
                </CustomerActions>
            </div>
        )
    }


    static propTypes = {
        fetchCustomer: PropTypes.func.isRequired,
        customers: PropTypes.array.isRequired,
    }

    render() {
        const { customers } = this.props;
        return (
            <div>
                <AppFrame header={'Listado de clientes'} body={this.renderBody(customers)}></AppFrame>
            </div>
        )
    }
}


// const mapDispatchToProps = (dispatch) => ({
//     fetchCustomer: () => dispatch(fetchCustomer())
// })

CustomersContainer.defaultProps = {
    customers: []
}

const mapStateToProps = (state) => ({
    customers: getCostumers(state)
})

export default connect(mapStateToProps, { fetchCustomer })(CustomersContainer)

