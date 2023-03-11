import { useEffect, useState } from "react";
import { GET_CARS, GET_CARS_BY_SEARCH } from "../../api"
import useFetch from "../../hooks/useFetch";
import Header from "../Header";
import Cars from "./Cars";

function Feed() {
  const {data, loading, error, request} = useFetch()
  const [search, setSearch] = useState("")

    useEffect(() => {
        async function getCars() {
          if(!search){
            const {url, options} = GET_CARS()
            const {response, json} : any = await request(url, options)
            return
          }
          if(search.length > 1) {
            const {url, options} = GET_CARS_BY_SEARCH(String(search))
            const {response, json} :any = await request(url, options)
            return
          }
        }  
        getCars()
    }, [request, search])

  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <Cars
        data={data}
        loading={loading}
        error={error}
      />
    </>
  )
}

export default Feed