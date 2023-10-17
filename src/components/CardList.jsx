import articles from "../data/data.json";
import Card from "./Card.jsx"

function CardList() {
    return (
        <div className="card-list">
            {articles.map((article) =>
            <Card article={article} key={article.id}/>)}

        </div>
    )
}

export default CardList