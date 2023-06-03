import './Card.css'
function Card(props){
    return (
        <div className="cardContainer">
            {props.children}
        </div>
    )
}
export default Card;