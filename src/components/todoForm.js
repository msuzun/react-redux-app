import {useState} from 'react'
import {useDispatch} from 'react-redux'

function TodoForm() {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch();

    const onSubmit = e =>{
        e.preventDefault();

        console.log(todo)
    }

    return(
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text'>Yapılacak</label>
                    <input type='text' name='text' value={todo} onChange={(e)=>setTodo(e.target.value)} />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block btn-reverse' type='submit'>Yapılacak Ekle</button>
                </div>
            </form>
        </section>
    )
}
export default TodoForm