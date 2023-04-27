import React, { Suspense, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import urlContext from '../context/api_url/urlContext';
import Card from '../components/Card'
// import LazyCard from './lazy/Card'
import style from "../styles/Grid.module.css";
import dataFromDB from "../database/data.json"
import { actionCreaters } from '../state';
import NotFound from './NotFound';
// import LoadingGrid from './lazy/LoadingGrid';
// const Card = React.lazy(() => import("./Card.js"));

export default function Grid() {

    // const host = useContext(urlContext);
    const [data, setData] = useState([]);
    // const theme = useSelector(state => state.theme);
    const [loading, setLoading] = useState(true);
    // const login = useSelector(state => state.login);
    const dispatch = useDispatch()

    //infinite scroll
    const fetchingData = useRef(false);
    const hasMore = useRef(true);

    const lastCard = document.querySelector('.loading');
    // console.log(lastCard);
    const observer = new IntersectionObserver((entries) => {
        // console.log('is intersecting ',entries[0].isIntersecting)
        if (entries[0].isIntersecting && !fetchingData.current && hasMore.current) {

            // fetchMoreData();
        }

    });

    if (lastCard != null) {
        observer.observe(lastCard);
    }

    useEffect(() => {
        setData(dataFromDB);
        setLoading(false);
        console.log("localstorage ",localStorage.getItem('theme'))
        // dispatch(actionCreaters.setThemeDark(localStorage.getItem('theme')))
        console.log('useEffect ', data);
    }, [data])

    return (
        <>
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

                {loading ? <footer className='loading'>loading more...</footer> : <footer>End</footer>}


                {/* {loading ? <LoadingGrid /> : null} */}
            </div>
        </>
    )
}
