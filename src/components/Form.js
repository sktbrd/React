import {useState} from 'react'


function Form() {

    function signup(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`User Registered under ${name} and with password: ${password}`)
    }

    const [name , setName] = useState()
    const [password, setPassword] = useState()
    return(
        <div>
            <h1>SignUp</h1>
            <form onSubmit={signup}>
                <div>
                    <label  htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="insert account name"
                        onChange={ (e) => setName(e.target.value)}/>
                </div>                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="text" 
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={ (e) => setPassword(e.target.value)}
                        />
                </div>
                <div>
                    <input type="submit" value="Confirm"/>
                </div>
            
            </form>
        </div>
    )
}

export default Form