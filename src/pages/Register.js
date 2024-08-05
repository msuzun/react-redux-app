import {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register,reset} from '../features/auth/authSlice'
import {toast} from 'react-toastify'
import Spinner from '../components/spinner'
export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user,isLoading,isSuccess,isError,message} = useSelector((state)=>state.auth)

  const [formData,setFormData] = useState({
    email:'',
    parola:'',
    kullaniciAd:'',
    parolaKontrol:''
  })

  const {email,parola,kullaniciAd,parolaKontrol} = formData;
  const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault();

    console.log(formData);

    if (parola!==parolaKontrol) {
      toast.warning('Parolalar eşleşmedi')
    }
    else{
      const userData = {
        email,
        parola,
        kullaniciAd
      }
      dispatch(register(userData))
    }
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

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
       <section className='heading'>
        <h1>
          Üyelik Oluştur
        </h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
            <input type='text' className='form-control' id='kullaniciAd' name='kullaniciAd' value={kullaniciAd} placeholder='Kullanıcı Adınızı giriniz' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Emalinizi giriniz' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='parola' name='parola' value={parola} placeholder='Parolanızı giriniz' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='parolaKontrol' name='parolaKontrol' value={parolaKontrol} placeholder='Parolanızı tekrar giriniz' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
             Üye ol
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
