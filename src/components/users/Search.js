import React, { useState } from 'react'

 const Search = (props) => {
     const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
           props.setAlert('Please type something...', 'secondary');
        }else{
           props.searchUsers(text);
            setText('');
        }
     }

    const clearUsers = () => {
         props.clearUsers();
     }

        return (
            <div>
                <form onSubmit={onSubmit}>
                <input type="text" name="text" value={text} onChange={onChange} placeholder="Search users..." className="form-control" />
                <input type="submit" value="Search" className="form-control mt-3 btn btn-dark" />
            </form>  
            {props.showClear && <button className="form-control mt-3 btn btn-light" onClick={clearUsers} >Clear</button>}
                
            </div>
        )
}

export default Search;
