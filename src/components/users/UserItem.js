import React from 'react'
import PropTypes from 'prop-types'


const UserItem = (props) => {
    return (
        <div className="col-md-2 border ml-3">
            <img src={props.user.avatar_url} alt="" className="circle mx-auto d-block mt-2" style={{height:70}} />
            <p className="text-center">{props.user.login }</p>
            <a href={props.user.html_url} className="btn btn-dark d-flex justify-content-center mt-2">more</a>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
