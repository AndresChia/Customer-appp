import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import AppFrame from '../components/AppFrame';
import { getCostumersByDni } from '../selectors/customers'
import { Route } from 'react-router-dom';
import CustomerData from '../components/CustomerData';
import CustomerEdit from '../components/CustomerEdit';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';
import { deleteCustomer } from '../actions/deleteCustomer';

import { SubmissionError } from 'redux-form';

export class CustomerContainer extends Component {


    componentDidMount() {
        const { customers } = this.props;
        if (!customers) {
            this.props.fetchCustomers();
        }
    }

    //  <p>Datos del cliente {customer && customer.name} </p>


    handleSubmit = (values) => {
        values.id = values.dni;
        return this.props.updateCustomer(values.id, values).then(r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnSubmitSuccess = () => (this.props.history.goBack())

    handleOnBack = () => (this.props.history.push("/customers"))

    handleOnDelete = (id) => {
        return this.props.deleteCustomer(id).then(v => {
            this.props.history.push("/customers");
        });
    }

    renderCustomerControl = (isEdit, isDelete) => {
        const CustomerControl = isEdit ? CustomerEdit : CustomerData;
        return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess} onBack={this.handleOnBack} onDelete={this.handleOnDelete} isAllowDelete={!!isDelete} />;
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match: isEdit }) =>
                (<Route path="/customers/:dni/del" children={
                    ({ match: isDelete }) => (this.renderCustomerControl(isEdit, isDelete))
                } />
                )
        } />
    )

    static propTypes = {
        dni: PropTypes.string.isRequired,
        customer: PropTypes.object,
        fetchCustomers: PropTypes.func.isRequired,
        updateCustomer: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { fetchCustomers, updateCustomer, deleteCustomer })(CustomerContainer)
