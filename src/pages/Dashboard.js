import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Spinner from '../components/spinner';
import TodoForm from '../components/todoForm';
import { getTodos,reset } from '../features/todo/todoSlice';

export default function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth)
  const {todos,isLoading,isError,message} = useSelector((state)=>state.todos)
  useEffect(()=>{
    if (!user) {
      navigate('/login')
    }
    if (isError) {
      console.log(message)
    }
    dispatch(getTodos())
    return ()=>{
      if (user) {
        dispatch(reset())
      }
    }
  },[user,navigate,isError,message,dispatch])
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div>
      <TodoForm/>
    </div>
  )
}
