import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const UserItem = (props) => {
    return (
        <div className="col-md-2 border m-3">
            <img src={props.user.avatar_url} alt="" className="circle mx-auto d-block mt-2" style={{height:70}} />
            <p className="text-center">{props.user.login }</p>
            <Link to={`/user/${props.user.login}`} className="btn btn-dark d-flex justify-content-center mt-2">more</Link>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
