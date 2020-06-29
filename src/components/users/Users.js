import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'ninja',
                avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '3',
                login: 'travercy',
                avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/mojombo'
            }
        ]
    };

    render() {
        return (
                <div className= "row mt-2">
                    {this.state.users.map(user => <UserItem key={user.id} user={user} />
                    )}
                </div>
        )
    }
}

export default Users
