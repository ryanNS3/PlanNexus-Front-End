
function InputToAddNumber({name, number, setNumber}){
    const [numberAdd, setNumberAdd] = React.useState(0)

    return(
        <article>
            <p>{name}</p>
            <div>
                <p>{number}</p>
                
            </div>
        </article>
    )

}