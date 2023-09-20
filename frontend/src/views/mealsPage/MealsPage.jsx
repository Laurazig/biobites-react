
// import meals from "../../../../server/meals.json"
const MealsPage = () => {
    let data = require("./meals.json")
    //map
    return (
        <div>
            <div>
{data.title}
                {/* <button onClick={() => addToCart(meal)}>Add To Cart</button> */}
            </div>
        </div>
    )
}
export default MealsPage