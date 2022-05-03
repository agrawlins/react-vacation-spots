const Card = (props) => {
    console.log(props)
    return(
        <div className="Card">
            <h1 className="Card-title">{props.place}</h1>
            <h3 className="Card-subtitle">${props.price}</h3>
            <p className="Card-author">Time to go: {props.timeToGo}</p>
        </div>
    )
}

export default Card;