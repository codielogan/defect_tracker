import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state={'login':[{'username':'LOGESH', 'passw':123},
							{'username':'ARUN', 'passw':456},
							{'username':'KOUSHIK', 'passw':789}]}
		this.login=this.login.bind(this);
	}
	login(e){
		e.preventDefault();
		var user=this.refs.uname.value.toUpperCase();
		var pass=this.refs.pwd.value
		var pa;
			this.state.login.forEach(function(element, index){
				if(element.username==user){
					pa=element.passw					
				}	
			});
			if(user=="" || pass==""){
				alert("Login Failed")
			}
			else if(pass==pa){
				alert("success");
				this.props.history.push("/Decide");
			}
			else{
				alert("Username and password doesn't match");
			}
	}
      render(){
                       return (
					   <div>
							<form className="form">
									<span align="center" style={{'font-size':'50px'}}>Login</span><br/><br/><br/>
									<lable for="uname">Username</lable>&nbsp;
                                    <input type="text" placeholder="Enter your UserName" ref="uname" id="uname"/><br/><br/>
                                    <lable for="pword">Password</lable>&nbsp;
									<input type="password" placeholder="Enter your Password" ref="pwd"id="pword" /><br/><br/>   
									 <button className="button" type="submit" onClick={this.login}>Sign in</button>
							</form>
					   </div>);
					   
                    
   	       }
}
export default LoginForm;
