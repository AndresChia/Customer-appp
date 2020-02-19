import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const styles={
    "display": "inline-block",
    "background": "#EEE",
    "width": "160px",
    "margin": "1px",
    "padding": "4px",
    "textAlign": "left"
}


function CustomerListItem({ name, editAction, deleteAction, urlPatch, dni }) {
    return (
        <div>

            <div className="customer-list-item" >
                <div className="field" style={styles}>
                    <Link to={`${urlPatch}${dni}`}>{name}</Link>
                </div>
                <div className="field" style={styles}>
                    <Link to={`${urlPatch}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field" style={styles}>
                    <Link to={`${urlPatch}${dni}/del`}>{deleteAction}</Link>
                </div>
            </div>
        </div>
    )
}

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    deleteAction: PropTypes.string.isRequired,
    urlPatch: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
}

export default CustomerListItem

