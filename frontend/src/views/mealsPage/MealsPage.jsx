import "./mealsPage.scss";

const MealsPage = () => {
    let data = require("./data.json")
    return (
        <div>
            <h3 className="mealPageText">Select 3 meals and proceed to cart for checkout</h3>
            <div className="mealsContainer">
                {data.map((meal) => {
                    return (
                        <div key={meal._id} className="mealCard">
                            <div className="cardTitleBox">
                                <h2>{meal.mealName}</h2>
                            </div>
                            <div className="cardImgBox">
                                <img src={meal.img} alt="" />
                            </div>
                            <div className="cardDescriptionBox">
                                <p>{meal.description}</p>
                            </div>
                            <p>{meal.price}€</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MealsPage