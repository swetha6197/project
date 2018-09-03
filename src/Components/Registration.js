import React, { Component } from 'react';
import {Link}from'react-router-dom';


class Registration extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'Registration',
      act:0,
      index:"",
      datas:[]
    }
  }
  componentDidMount(){
    this.refs.name.focus();
  }
  fSubmit = (e)=>{
    e.preventDefault();
    console.log('try');
    let datas=this.state.datas;
    let name=this.refs.name.value;
    let password=this.refs.password.value;
    let emailid=this.refs.emailid.value;
    if(this.state.act ===0){
      let data={
        name,password,emailid
      }
      
      datas.push(data);
    }else{
      let index =this.state.index;
      datas[index].name=name;
      datas[index].emailid=emailid;
      datas[index].password=password;
    }
    
    this.setState({
      datas:datas,
      act:0
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  fRemove = (i) =>{
    let datas =this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
}
fEdit = (i) => {
  let data =this.state.datas[i];
  this.refs.name.value=data.name;
  this.refs.password.value=data.password;
  this.refs.emailid.value=data.emailid;

  this.setState({
    act:i,
    index:i
  });
  this.refs.name.focus();
}
  render() {
    let datas=this.state.datas;
    return(
      <center><div className="Register">
      <h2>{this.state.title}</h2>
      <form ref="myForm" className="myForm">
        <input type="text" ref="name"placeholder="Enter ur name" /> <br/><br/>	   
	      <input type="text" ref="emailid" placeholder="Enter ur mail id"/> <br/><br/>
       <input type="text" ref="password"placeholder="password....."/> <br/><br/>
       <button onClick={(e)=>this.fSubmit(e)} className="myButton">Submit</button>
       
       </form>
       <pre>
         {datas.map((data,i)=>
         <li key={i} className="myList">
         {i+1}.{data.name},{data.password},{data.emailid}
         <button onClick={()=>this.fRemove(i)}className="myButton">remove</button>
         <button onclick={()=>this.fEdit(i)}className="myButton">Edit</button>
        </li>
    )}
      </pre>
      </div></center>

    )
  }
}

export default Registration;