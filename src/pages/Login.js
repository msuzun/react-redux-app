import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login,reset} from '../features/auth/authSlice'

import {toast} from 'react-toastify'

import Spinner from '../components/spinner'

export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth)

  const [formData,setFormData] = useState({
    email:'',
    parola:''
  })

  const {email,parola} = formData;
  const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit=(e)=>{
    e.preventDefault();

    const userData = {
      email,parola
    }
    dispatch(login(userData))
  }

  useEffect(()=>{
    if (isError) {
      toast.error(message)
    }
    const storedUser = localStorage.getItem('user');
    if (isSuccess || storedUser) {
      navigate('/')
    }
    dispatch(reset())
  },[user,isError,isSuccess,message,navigate,dispatch])

  if(isLoading){
    return <Spinner />
  }
  return (
    <div>
      <section className='heading'>
        <h1>
          Giriş Yapalım
        </h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Emalinizi giriniz' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='parola' name='parola' value={parola} placeholder='Parolanızı giriniz' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Giriş Yap
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
