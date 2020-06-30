import React, { Component } from 'react'

 class Search extends Component {
     state = {
         text: ''
     };

     onChange = (e) => this.setState({[e.target.name]: e.target.value});
     onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
     }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search users..." className="form-control" />
                <input type="submit" value="Search" className="form-control mt-3 btn btn-dark" />
            </form>  
            </div>
        )
    }
}

export default Search;
