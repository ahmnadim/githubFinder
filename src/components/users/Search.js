import React, { Component } from 'react'

 class Search extends Component {
     state = {
         text: ''
     };

     onChange = (e) => this.setState({[e.target.name]: e.target.value});
     onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please type something...', 'secondary');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
     }

     clearUsers = () => {
         this.props.clearUsers();
     }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search users..." className="form-control" />
                <input type="submit" value="Search" className="form-control mt-3 btn btn-dark" />
            </form>  
            {this.props.showClear && <button className="form-control mt-3 btn btn-light" onClick={this.clearUsers} >Clear</button>}
                
            </div>
        )
    }
}

export default Search;
