import React, {Fragment} from 'react'
import spinar from './spiner.gif'

const Spiner = () => {
    return (
        <Fragment>
                <img src={spinar} alt="Loading..." style={{width: "200px", margin: "auto", display: 'block'}} />
        </Fragment>
    )
}


export default Spiner;