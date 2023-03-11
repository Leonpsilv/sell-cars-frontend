import { useEffect } from "react";
import { GET_CARS } from "../../api"
import useFetch from "../../hooks/useFetch";
import Header from "../Header";
import Cars from "./Cars";

function Feed() {
  const {data, loading, error, request} = useFetch();
    useEffect(() => {
        async function getCars() {
            const {url, options} = GET_CARS()
            const {response, json} = await request(url, options)
        }  
        getCars()
    }, [request])

  return (
    <>
      <Header />
      <Cars
        data={data}
        loading={loading}
        error={error}
      />
    </>
  )
}

export default Feed