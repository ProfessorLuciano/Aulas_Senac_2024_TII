import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio(){
    return(
        <div>
            <h1>Inicio</h1>
            <Link to='/LoginUsuarios'>Login com Link</Link><br/>
            <a href='/LoginUsuarios'>Login com ancora</a>
        </div>
    )
}