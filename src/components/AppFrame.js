import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from './AppHeader'

function AppFrame({ header, body }) {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header}></AppHeader>
                <div>{body}</div>
                <div>Applicación de ejemplo</div>
            </div>
        </div>
    )
}

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
}

export default AppFrame

