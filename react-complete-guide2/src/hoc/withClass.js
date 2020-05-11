import React from 'react'

const withClass = (Component, cssClass) => {

    return (props) => (
        <div className={cssClass}><Component {...props} /></div>
    )
}

export default withClass