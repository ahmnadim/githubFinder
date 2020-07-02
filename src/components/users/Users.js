import React, {useContext} from 'react'
import UserItem from './UserItem'
import Spinar from '../layout/Spiner'
import GithubContext from '../../context/github/GithubContext'


const Users = () => {
    const githubContext = useContext(GithubContext);
    if(githubContext.loading){
        return <Spinar />
    }else{
        return (
            <div className= "row mt-2">
                {githubContext.users.map(user => <UserItem key={user.id} user={user} />
                )}
            </div>
        )
    }
}


export default Users
