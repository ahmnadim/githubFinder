import React from 'react'
import UserItem from './UserItem'
import Spinar from '../layout/Spiner'
import PropTypes from 'prop-types'


const Users = ({users, loading}) => {
    if(loading){
        return <Spinar />
    }else{
        return (
            <div className= "row mt-2">
                {users.map(user => <UserItem key={user.id} user={user} />
                )}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
