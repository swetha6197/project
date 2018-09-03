import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Welcome extends Component {
  render() {
    return(
     <div class="welcome">
        <h1>Welcome!!</h1>
        <br/>
        <br/>

        <button type="button" class="btn btn-danger"><Link to="/Login">Login</Link></button>
    </div>
 

    );
  }
}

export default Welcome;