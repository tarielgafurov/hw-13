import { useEffect, useState } from "react"
import './Render.css'


function Render () {
    const [date , setDate] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
        .then((res) => {
            return res.json().then((date) => setDate(date))
        })
    } ,[])
return (
    <div>
        {date.map((el) => {
            return (
                    <div className="block"> 
                        <div className="block_2">
                            <p>{el.id}</p>
                                <img src={el.thumbnailUrl} alt=""/>
                            </div>
                        <div className="block_3">
                            <h3>{el.title}</h3>
                                <p>TEXT</p> 
                        </div>
                            </div>
            )
        })}
    </div>
)
} 

export default Render