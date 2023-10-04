import React, { useEffect, useState } from 'react'
import "./Criteria.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Criteria = () => {
  const {id} = useParams();
  const [type,setType] = useState("");
  const navigate = useNavigate()
  const data = useSelector((state) => {
    return state.items[id - 1]
  })
  console.log(data);

  const [tag,setTag] = useState([0,1,2])
  useEffect(() => {
    setType(id)
  },[])
  return (
    <div className='criteria'>
      {data && <div className="heading">
        <p>{data.name}</p>
        <p style={{color:data.color}}>{data.tag}</p>
      </div>}
      {id < 5 && data && data.criteria.map((item,idx) => {
        return <><p className='common'>
          <span>{(id == 1 || id == 2) && item.text}</span>
          <Link to={`/moredetails/${id}`}><span>{(id == 3) && item.text.replace("$1","(-3)")}</span></Link>
          <Link to={`/moredetails/${id}`}><span>{(id == 4) && item.text.replace("$1","(20)").replace("$2","(100)")}</span></Link>
          {/* <Link to={`/moredetails/${id}`}><span>{(id == 5) && item.text.replace("$1","(2)").replace("$2","(10)").replace("$3","(1.5)").replace("$4","(14)")}</span></Link> */}
          </p>
          {idx < data.criteria.length -1 ? <span>and</span> : null}
          </>
      })}


      {id == 5 && data && data.criteria.map((item,idx) => {
        return <><p className='common'>
          <span className='span' onClick={() => {
            navigate(`/moredetails/${id}/${tag[idx]}`)
          }}>{(id == 5) && item.text.replace("$1","(2)").replace("$2","(10)").replace("$3","(1.5)").replace("$4","(14)")}</span>
          </p>
          {idx < data.criteria.length -1 ? <span>and</span> : null}
          </>
      })}
    </div>
  )
}

export default Criteria