import EventEmitter from 'events';
import Dispatcher from '../Dispatcher/Dispatcher';

class TodoStore extends EventEmitter{
constructor(){
	super()
	this.todos = [
		{
			id:1313131312,
			text:"Go Shog",
			complete:false
		},
		{
			id:42424243,
			text:"Pay Bills",
			complete:false
		}
	]
  }

 generateData(n,o){

  function bump(a) {
    let x = 1 / (.1 + Math.random()),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
    for (let i = 0; i < n; i++) {
      let w = (i / n - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }

  let a = [], i;
  for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
  for (i = 0; i < 5; ++i) bump(a);
  return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
	
  }

  createTodo(text){
  	const id = Date.now();
  	this.todos.push({
  		id,
  		text,
  		complete:false
  	});
  	this.emit('change');
  }

  deleteTodo(){
  	this.todos.pop();
  	this.emit('change');
  }

  getAll(){
  	return this.todos;
  }

  handleActions(action){
	
	switch(action.type){
		case "CREATE_TODO":{
			this.createTodo(action.text);
			break;
		}
		case "DELETE_TODO":{
			this.deleteTodo();
			break;
		}
	}
  }
}



const todoStore = new TodoStore;
Dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;