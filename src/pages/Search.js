import React, { useEffect, useState } from 'react'
import dataFromDB from "../database/data.json"
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState([...dataFromDB])
    console.log(Object.fromEntries(searchParams).q)

    useEffect(()=>{
        const newData = [...dataFromDB].filter((element)=>{
            console.log("data in filter", element?.name)
            return element?.name?.includes(Object.fromEntries(searchParams).q)
        })
        setData(newData)
        console.log('new data ',newData)
    },[searchParams])

    return (
        <div>
            Search {Object.fromEntries(searchParams).q}
            <br/>
            {/* {data?.map()} */}
        </div>
    )
}

export default Search