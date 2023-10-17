import articles from "../data/data.json";
import setType from "../App"

function Filter(){

    const getCategory = articles.map(element => element.category)
    /* const filter = [... new Set(getCategory)] */
    const filters = getCategory.filter((item, i, arr) => arr.indexOf(item) === i)
    console.log(filters)
    return (
        <div className="filter">
            {filters.map((filtre, index) => (
                <button key={index} onClick={() => setType(filters)}> {filtre}</button>
            ))}

                
        </div>
    )
}
export default Filter