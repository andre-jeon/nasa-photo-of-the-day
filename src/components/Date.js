import React from 'react'

function Date(props) {
    const data = props.data
    // console.log(data)
    
    return(
        <div className="date">
            <h3>{data.date}</h3>
        </div>
    ) 
}


export default Date 