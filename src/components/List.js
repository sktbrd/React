function List({itens}) {
    return (
    <>
        <h3>Good List: </h3>
        
        {itens.map((iten, index) => (
        
        <p key={index}> {iten}</p>
    
       ))}
    
    </>
    )
}

export default List 