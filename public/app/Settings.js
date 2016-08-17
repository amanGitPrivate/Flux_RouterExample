import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import TodoStore from '../todoStore/TodoStore';
import * as TodoActions from '../actions/TodoAction';

export default class Settings extends Component{

constructor(){
	super();
	this.state = {
		todos:TodoStore.getAll()
	};
}

componentWillMount(){
	TodoStore.on("change",() =>{
		this.setState({
			todos:TodoStore.getAll()
		});
	});
}

makeTodo(){
	TodoActions.createTodo(Date.now());
}
deleteTodo(){
	TodoActions.deleteTodo();
}
render() {

const {todos} = this.state;

const TodoComponents = todos.map((todo) =>{

	return <div className = "individualTodo">{todo.text}</div>;

});

return(
<div className = "SettingsPage">
	Settings Page
	<div className = "buttonWrapper">
		<button className = "link" onClick = {this.makeTodo.bind(this)}>Create!</button>
		<button className = "link" onClick = {this.deleteTodo.bind(this)}>Delete!</button>
		{TodoComponents}
	</div>
</div>
 );

 }
}
    




