import React, { Component } from 'react';

import {Link} from'react-router-dom';


class Profile extends Component {
  render() {
    return(
      <div className="profile1">
      <center><h2>Profile</h2></center>
       <section>
      <div className="profile2">
      <img
              src="./images/team.png"
            
              style={{height: '110px'}}
               />
     
      </div>
        
        <div className="profile">
            Name:XYZ
            <br/>
            Email id:xyz@gmail.com<br/>
            No:55,HSBC layout,
            Nagawara,
            Banglore<br/>
            <br/>
            
          <button><Link to="Registration">Edit</Link></button>


        </div>
        </section>
        </div>
    )
  }
}

export default Profile;