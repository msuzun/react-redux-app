import {useState} from 'react'

export default function Register() {
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
