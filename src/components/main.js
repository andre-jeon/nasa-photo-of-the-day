import React from 'react'

function Main(props) {
    const data = props.data
    
    return(
        <div className="main-body">
        <h1>NASA Photo of the Day</h1>
        <img src = {data.url}/>
        <h2>{data.title}</h2>
        </div>
    ) 
}


export default Main 