import React,{Component} from 'react';


 
 class Login extends Component {
   
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
     
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    if(this.state.username=="swetha"&&this.state.password=="111"){
     alert("USER LOGIN SUCCESSFULL!!!");
     return this.props.history.push('/eg');
   
    }
    //return this.setState({ error: 'USER LOGIN SUCCESSFULL!!' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>Please provide the correct details</button>
              {this.state.error}
            </h3>
          }
          <center><h4>Login</h4></center>
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />


          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          
         
          <button type="submit"  value="Log In" data-test="submit" >Login</button>
        </form>
      </div>
    );
  }
}

export default Login;