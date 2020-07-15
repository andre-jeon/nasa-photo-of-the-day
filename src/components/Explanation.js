import React from 'react'

function Explanation(props) {
    const data = props.data
    
    return(
        <div className="explanation">
            <p>{data.explanation}</p>
        </div>
    ) 
}


export default Explanation 