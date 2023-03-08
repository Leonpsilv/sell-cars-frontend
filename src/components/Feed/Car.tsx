import { useEffect } from "react";
import { GET_CARS } from "../../api"
import useFetch from "../../hooks/useFetch";

function Cars() {
    const {data, loading, error, request} = useFetch();
    useEffect(() => {
        async function getCars() {
            const {url, options} = GET_CARS()
            const {response, json} = await request(url, options)
            console.log(json)
        }  
        getCars()
    }, [request])
    if(loading) return (<h1>Loading</h1>)
    if(!data) return <></>
  return (
    <>
        {data.map((car: {id: number, Name: string}) => (
            <h3 key={car.id}>nome: {car.Name}</h3>
        ))}
    </>
  )
}
  
export default Cars