import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    render() {
        return (
                <div className= "row mt-2">
                    {this.props.users.map(user => <UserItem key={user.id} user={user} />
                    )}
                </div>
        )
    }
}

export default Users
