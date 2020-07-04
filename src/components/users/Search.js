import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

 const Search = (props) => {
     const githubContext = useContext(GithubContext);
     const alertContext = useContext(AlertContext);

     const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Please type something...', 'secondary');
        }else{
            githubContext.searchUsers(text);
            setText('');
        }
     }

    const clearUsers = () => {
         githubContext.clearUsers();
     }

        return (
            <div>
                <form onSubmit={onSubmit}>
                <input type="text" name="text" value={text} onChange={onChange} placeholder="Search users..." className="form-control" />
                <input type="submit" value="Search" className="form-control mt-3 btn btn-dark" />
            </form>  
            {githubContext.users.length > 0 && <button className="form-control mt-3 btn btn-light" onClick={clearUsers} >Clear</button>}
                
            </div>
        )
}

export default Search;
