import {db} from '../../firebase/config'

import {collection,addDoc,getDoc} from 'firebase/firestore'

const createTodo = async (todoData,user)=>{
    const colRef = await collection(db,'yapilacaklar')
    const docRef = await addDoc(colRef,{...todoData,uid:user.uid})
    const docSnap = await getDoc(docRef)

    return {...docSnap.data(), id:docSnap.id}
}

const todoService ={
    createTodo
}

export default todoService;