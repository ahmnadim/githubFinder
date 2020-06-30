import React, { Component, Fragment } from 'react'
import Spinar from '../layout/Spiner'
import {Link} from 'react-router-dom'

class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        
    }
    render() {
        const {name, avatar_url, location, bio, blog, company, login, html_url, followers, following, public_repos, public_gists, hireable} = this.props.user;

        const {loading} = this.props;
        if(loading){
            return <Spinar />
        }else{
            return (
                <Fragment>
                    <Link to="/" className="form-control mt-3 btn btn-secondary">Back to search</Link>
                    Hireable: {' '}
                    {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

                <div className="card">
                <div class="row">
                    <div class="col-sm-4">
                        <div className="card-body">
                            <img src={avatar_url} alt="Avatar" className="rounded-circle ml-5 d-block mt-2" style={{height:100}} />
                                <h1 className="mt-3">{name}</h1>
                                <p className="card-text">{location}</p>        
                        </div>
                    </div>
                    <div class="col-sm mt-2">
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                                <a href={html_url} className="btn btn-dark" >Visit github profile</a>
                                <p className="mt-1">Username: {login}</p>
                                <p >Company: {company}</p>
                                <p >Website: {blog}</p>
                                <p >Username: {login}</p>
                            </Fragment>
                         )}
                    </div>
                </div>
                </div>
                </Fragment>
            )
        }
    }
}

export default User;
