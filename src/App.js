import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import { Layout ,Content,Navigation,Header} from 'react-mdl';
import {Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
      <Header className="header">
            <Navigation>
                <Link to="/Login">Login</Link>
                <Link to="/Aboutus">About us</Link>
                <Link to="/Profile">Profile</Link>

              
            </Navigation>
           
        </Header>
         
        <div className="body">
     
          
        
         <Content>
           <Main/>
           </Content>
           </div>
        
            </Layout>
           
            </div>
    )

}
}

export default App;
