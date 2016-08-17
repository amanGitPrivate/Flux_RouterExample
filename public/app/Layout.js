import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {Link} from 'react-router';

export default class Layout extends Component{

navigate(){
	var allLinks = document.querySelectorAll('.link');
	for(let i = 0;i< allLinks.length-1 ;i++){
		if(allLinks[i].childNodes[0])
		allLinks[i].childNodes[0].classList.remove('selected');
		else
		allLinks[i].classList.remove('selected')	
	}
	document.querySelector('.home').classList.add('selected')
	this.props.history.pushState(null,'/')
}

setSelected(event){
	var allLinks = document.querySelectorAll('.link');
	for(let i = 0;i< allLinks.length-1 ;i++){
		debugger;
		if(allLinks[i].childNodes[0])
		allLinks[i].childNodes[0].classList.remove('selected');
		else
		allLinks[i].classList.remove('selected')	
	}
	document.querySelector('.home').classList.remove('selected')
	event.target.classList.add('selected')
}
render() {

return(
<div className = "layoutPage">
	<h1>Main Header</h1>
	<div className = "link" onClick = {this.setSelected.bind(this)}><Link to = "archives">Archives</Link></div>
	<div className = "link" onClick = {this.setSelected.bind(this)}><Link to = "settings">Settings</Link></div>
	<div className = "link home selected" onClick = {this.navigate.bind(this)}>Home Page</div>
	{this.props.children}
</div>
 );

 }
}
    




