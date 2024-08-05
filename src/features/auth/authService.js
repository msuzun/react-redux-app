import { json } from 'react-router-dom';
import {auth} from '../../firebase/config'
import {createUserWithEmailAndPassword,signOut,updateProfile} from 'firebase/auth'


const register = async (email,parola,kullaniciAd) =>{
    const userResponse = await createUserWithEmailAndPassword(auth,email,parola);

    await updateProfile(userResponse.user,{
        displayName:kullaniciAd
    })

    if (userResponse.user) {
        localStorage.setItem('user',JSON.stringify(userResponse.user))
    }
    return userResponse.user
}

const logout =  async () =>{
    await signOut(auth);
    localStorage.removeItem('user');
}

const authService ={
    register,
    logout
}

export default authService