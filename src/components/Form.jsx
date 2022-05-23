import  React, {useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo, }) => {
// check todo
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);
 
    const onInputChange = (event) => {
        setInput(event.target.value);
    }
//Submit
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo){
            setTodos([...todos,{id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
// Remove all 
    // const select = selectTodo();
    // const removeTodo = () => {
    //     const selectIndex = [];
    //     if (select === 0) {
    //         cleanTodo();
    //         window.localStorage.clear();
    //     } else {
    //         for (let i = 0; i < todos.length; i++) {
    //             if (todos[i].completed) {
    //                 selectIndex.push(i);
    //             }
    //         }
    //         handleMultipleRemove(selectIndex);
    //     }
    // };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder= "Nhập vào...." 
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className='button-add' type='submit'>
                {editTodo ? "OK" : "Thêm"}
            </button>

            {/* <span>Select ({select} todo)</span>
            <button className="btn-remove" onClick={removeTodo}>
                <span>Remove {select === 0 ? 'All' : select}</span>
            </button> */}
        </form>
    )
};

export default Form;