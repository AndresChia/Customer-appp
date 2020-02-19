import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from './CustomerListItem'

function CustomerList({ customers, urlPatch }) {
    return (
        <div>

            <div className="customers-list">
                {
                    customers.map(element => {

                        return <CustomerListItem key={element.dni} dni={element.dni} name={element.name} editAction={'Editar'} deleteAction={'Eliminar'} urlPatch={urlPatch}></CustomerListItem>

                    })
                }
            </div>

        </div>
    )
}

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
}

export default CustomerList

