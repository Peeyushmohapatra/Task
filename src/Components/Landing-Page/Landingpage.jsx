import React, { useMemo } from 'react'
import "./Landingpage.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Landingpage = () => {

    const data = useSelector((state) => {
        return state.items
    })
  return (
    <div className='landing-page'>
        {data && data.map((item) => {
            return <Link to={`/criteria/${item.id}`}>
            <div className='boxes'>
                <p>
                <u>{item.name}</u>
                </p>
                <u style={{color:item.color}}>{item.tag}</u>
                </div>
            </Link>
        })}
    </div>
  )
}

export default Landingpage