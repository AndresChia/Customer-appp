import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';

//a nivel de campo
const isRequired = value => (!value && "Este campo es requerido");
const isNumber = value => (isNaN(value) ? "Este campo debe ser un numero" : null)

//a nivel global
const validate = (values) => {
    const error = {};

    if (!values.name) {
        error.name = "El campo es requerido"
    }

    return error;
}

const myField = ({ input, input: { name }, meta, type = "text", label }) =>
    (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={type} />
            {(meta.error && meta.touched) ? <span>{meta.error} </span> : null}
        </div>
    )

const toNumber = (value) => value && Number(value);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edición del cliente </h2>
            <form onSubmit={handleSubmit}>
                {/* fomat: como lo quiero ver en el campo
                ** parse: como lo voy a obtener luego de editarlo
                ** normalice: obtiene el valor actual y el previo y sirve para volver a valor anterior o poner una condicion 
                */}
                <Field name="name" label="Nombre" component={myField} type="text" validate={isRequired}></Field>
                <Field name="dni" label="Dni" component={myField} type="text" validate={[isRequired, isNumber]}></Field>
                <Field name="age" label="Edad" component={myField} type="number" validate={isNumber} parse={toNumber}></Field>
                <CustomerActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
}

const CustomerEditform = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit);

export default setPropsAsInitial(CustomerEditform);

