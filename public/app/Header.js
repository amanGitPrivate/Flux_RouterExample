import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class App extends Component{

constructor(){
	super();
	this.state= {
	
	  aman:'',
	
	};
  }

changeName(){
	this.props.changeName(this.refs.nameBox.value);
}

render() {

return(
<div className = "header">
	<input ref = "nameBox" onChange = {this.changeName.bind(this)}/>
</div>
 );

 }
}
    




