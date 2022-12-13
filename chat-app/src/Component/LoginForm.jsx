import axios from 'axios'
import { useState } from 'react'
const projectID='33017ce2-6c16-4a44-8782-99d073275689'
const LoginForm=()=>{
    //username aur password ko jb hum type kre to wo set ho jaye
    const [username,setUsername]= useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    
    const handleSubmit = async (e)=>{
        //restrict the by default browser property
        e.preventDefault();

        //onsubmit it authorised from database . if it is correct then set into localstorage by which next time we will not needed to login again and reload the window
        const authObject = {'Project-ID':projectID,'User-Name':username,'User-Secret':password};
        try{
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
            setError("");
        }
        catch(err){
            setError("Oops,try Again!")
        }
    }
    //login form create
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                {/* we create a form, in which username,password,login and if it is failed then error  */}
                <form onSubmit={handleSubmit}>
                    {/* for required area we mention required */}
                    <input type="text" className="input" value={username} placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}} required />
                    <input type="password" className="input" value={password} placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <div align="center">
                        <button type="submit" className='button'>
                                <span>Login</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}
export default LoginForm;