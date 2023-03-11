import Messages from "../Messages/Messages";
import styles from "./Cars.module.css";

function Cars({data, loading, error}: any) {
    if(loading) return (<h1>Loading</h1>)
    if(!data) return <Messages text="Não há carros registrados no servidor" />
  return (
    <div className={styles.allCarsContainer}>
        {data.map((car: {
            id: number,
            Name: string,
            Description: string,
            carPhoto: any,
            Alt: string,
            Brand: string,
            Price: number
        }) => {
            const price = car.Price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            if (!car.carPhoto){
                return (
                    <div className={styles.carContainer}>
                        <img src={"#"} alt={car.Alt}></img>
                        <h3 key={`car-name${car.id}`}>{car.Name}</h3>
                        <p key={`car-description${car.id}`}>descrição: {car.Description}</p>
                    </div>
                )
            }
            return (
                <div className={styles.carContainer}>
                    <img src={car.carPhoto.Url} alt={car.Alt}/>
                    <h2 key={`car-name${car.id}`}>{car.Name}</h2>
                    <h3 key={`car-brand${car.Brand}`}>{car.Brand}</h3>
                    <p key={`car-description${car.id}`}>{car.Description}</p>
                    <p className={styles.carPrice} key={`car-price${car.id}`}>{price}</p>
                </div>
            )
        }
    )}
    </div>
  )
}
  
export default Cars