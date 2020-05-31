import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = (props)=>{
    console.log('about',props);
    return(
        <h1>THis is About Page</h1>
    )
}

export default Rainbow(About);