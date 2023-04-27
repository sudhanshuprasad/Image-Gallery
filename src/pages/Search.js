import React, { Suspense, useEffect, useState } from 'react'
import dataFromDB from "../database/data.json"
import { useSearchParams } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Card from '../components/Card';
import style from "../styles/Grid.module.css";

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
            Search Results for {Object.fromEntries(searchParams).q}
            <br/>
            <div className={style.grid_container} style={{
                // backgroundColor: theme ? "rgb(100,100,100)" : "white",
                // color: theme ? "white" : "black",
            }}>
                {
                    data.map((element) => (
                        <div className='card' key={element._id}>
                            <Suspense fallback={<NotFound />}>
                                <Card
                                    _id={element._id}
                                    imgurl={element.imgurl || "https://cdn.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.webp"}
                                    itemName={element.name}
                                />
                            </Suspense>
                        </div>
                    ))
                }

                End of Results
            </div>
        </div>
    )
}

export default Search