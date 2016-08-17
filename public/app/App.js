import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

export default class App extends Component{


constructor(){
	super();
	this.state= {
	
	  aman:"Aman"
	
	};
  }

changeName(title){
	this.setState({aman:title});
}

render() {

return(
<div className = "loginPage">
	Welcome {this.state.aman}
	<Header changeName = {this.changeName.bind(this)}/>
</div>
 );

 }
}
    




