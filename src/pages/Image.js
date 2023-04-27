import React from 'react'
import data from '../database/data.json'
import { useParams } from 'react-router-dom';

const Image = () => {
    const param = useParams();
    return (
        <>
            <div>Image {param.id}</div>
            {console.log(data[param.id]?.imgurl)}
            <img src={data[param.id]?.imgurl}/>
        </>
    )
}

export default Image