import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Adduser extends Component {
  render() {
    return(
     <div className="record">
     <center><h2>No Record Found!!!</h2>
     
<button class="add"><Link to="/Registration">Add User</Link></button></center>	
    </div>
 


    );
  }
}

export default Adduser;