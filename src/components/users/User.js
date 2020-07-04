import React, { useEffect, Fragment, useContext } from 'react'
import Spinar from '../layout/Spiner'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'

const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    useEffect(() => {
        githubContext.getUser(match.params.login);
        //eslint-disable-next-line
    }, []);

        const {name, avatar_url, location, bio, blog, company, login, html_url, hireable} = githubContext.user;

        const {loading} = githubContext;
        if(loading){
            return <Spinar />
        }else{
            return (
                <Fragment>
                    <Link to="/" className="form-control mt-3 btn btn-secondary">Back to search</Link>
                    Hireable: {' '}
                    {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

                <div className="card">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-body">
                            <img src={avatar_url} alt="Avatar" className="rounded-circle ml-5 d-block mt-2" style={{height:100}} />
                                <h1 className="mt-3">{name}</h1>
                                <p className="card-text">{location}</p>        
                        </div>
                    </div>
                    <div className="col-sm mt-2">
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

export default User;
