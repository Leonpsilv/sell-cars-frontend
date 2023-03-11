import Messages from "../Messages/Messages";
import styles from "./Cars.module.css";

function Cars({data, loading, error}: any) {
    if(loading) return (<h1>Loading</h1>)
    if(!data) return <Messages text="Não há carros registrados no servidor" />
  return (
    <div className={styles.allCarsContainer}>
        {data.map((car: {
            Car_id: number,
            Car_Name: string,
            Car_Description: string,
            Car_Alt: string,
            Car_Brand: string,
            Car_Price: number,
            Car_Photo_Url: string,
            Car_Photo_Name: string,
            Car_Photo_key: string,
        }) => {
            const price = car.Car_Price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            if (!car.Car_Photo_Url){
                return (
                    <div key={`car${car.Car_id}`} className={styles.carContainer}>
                        <img key={`car-photo${car.Car_id}`} src="#" alt={car.Car_Alt}/>
                        <h2 key={`car-name${car.Car_id}`}>{car.Car_Name}</h2>
                        <h3 key={`car-brand${car.Car_id}`}>{car.Car_Brand}</h3>
                        <p key={`car-description${car.Car_id}`}>{car.Car_Description}</p>
                        <p className={styles.carPrice} key={`car-price${car.Car_id}`}>{price}</p>
                    </div>
                )
            }
            return (
                <div key={`car${car.Car_id}`} className={styles.carContainer}>
                    <img key={`car-photo${car.Car_id}`} src={car.Car_Photo_Url} alt={car.Car_Alt}/>
                    <h2 key={`car-name${car.Car_id}`}>{car.Car_Name}</h2>
                    <h3 key={`car-brand${car.Car_id}`}>{car.Car_Brand}</h3>
                    <p key={`car-description${car.Car_id}`}>{car.Car_Description}</p>
                    <p className={styles.carPrice} key={`car-price${car.Car_id}`}>{price}</p>
                </div>
            )
        }
    )}
    </div>
  )
}
  
export default Cars