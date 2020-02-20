import React from 'react'
import PropTypes from 'prop-types'
import CustomerActions from './CustomerActions';

const CustomerData = ({ id, name, dni, age, onBack, onDelete, isAllowDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <h2> Datos del cliente </h2>
                <div> <strong>Nombre</strong> <i> {name} </i></div>
                <div> <strong>DNI</strong> <i> {dni} </i></div>
                <div> <strong>Edad</strong> <i> {age} </i></div>
                <CustomerActions>
                    <button type="button" onClick={onBack}>Volver</button>
                    {isAllowDelete && <button onClick={() => onDelete(id)}>Eliminar</button>}
                </CustomerActions>
            </div>
        </div>
    )
}

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    isAllowDelete: PropTypes.bool,
}

export default CustomerData

