function Event() {
    function myEvent(){
        console.log("uii, clicou!")
    }
    return( 
        <div>
            <p>Click to Post </p>
            <button onClick={myEvent}>Publish</button>
        </div>
    )
}

export default Event