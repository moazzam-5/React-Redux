import styles from "./FoodItems.module.css"
function FoodItems({fruites}){

    return <>
    <ul className={styles["bg-list"]}>
        {fruites.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
    </>
}

export default FoodItems