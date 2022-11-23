import { useState } from "react";

function Condition() {
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log('Testando Email')
        console.log(userEmail)
        
    }
    return(
    <div>
        <h2> Insert Email: </h2>
        <form>
            <input 
                type="email" 
                placeholder= "Insert your e-mail..."
                onChange = {(e)=> setEmail(e.target.value)}
                />
            <button 
                type="submit" 
                onClick={sendEmail}>
                Send Email
            </button>
            {userEmail && (
                <div>
                    <p> The email is: {userEmail} </p>
                </div>
            )}
        </form>
    </div>
    
    )
}

export default Condition