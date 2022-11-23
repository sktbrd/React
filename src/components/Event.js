import Button from "./FormComponents/Button"

function Event() {
    function myEvent(){
        console.log("Event activated!")
    }
    return( 
        <div>
            <p>Click to Post </p>
            <Button event={myEvent} text="primeiro evento"/> 
            <button onClick={myEvent}>Publish</button>
        </div>
    )
}

export default Event