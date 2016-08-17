import dispatcher from '../Dispatcher/Dispatcher';

export function createTodo(text){
	dispatcher.dispatch({
		type:"CREATE_TODO",
		text,
	});
}

export function deleteTodo(text){
	dispatcher.dispatch({
		type:"DELETE_TODO"
	});
}

