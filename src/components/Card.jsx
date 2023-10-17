

function Card({article}) {
    return (
        <div className="cards">
            <img src={article.image} alt={article.title} className="card-img"/>
            <h2>{article.title}</h2>
            <p className="description">{article.description}</p>
            <p className="price">{article.price}</p>
            <button className="card-button">Ajouter au panier</button>
        </div>
    )
}


export default Card