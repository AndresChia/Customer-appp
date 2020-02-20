import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import { connect } from "react-redux";
import { insertCustomer } from '../actions/insertCustomer';
import PropTypes from 'prop-types'

export class NewCustomerContainer extends Component {
    static propTypes = {
        insertCustomer: PropTypes.func.isRequired,
    }

    handleOnBack = () => (this.props.history.push("/customers"))
    handleOnSubmitSuccess = () => (this.props.history.push("/customers"))
    handleSubmit = (values) => {
        values.id = values.dni;
        return this.props.insertCustomer(values);
    }

    renderBody = () => (<CustomerEdit onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess} onBack={this.handleOnBack} />)


    render() {
        return (
            <div>
                <AppFrame header={`Creación del cliente`} body={this.renderBody()}></AppFrame>
            </div>
        )
    }
}



export default connect(null, { insertCustomer })(NewCustomerContainer)
