import { useState, useRef } from 'react'
import './App.css'
import BigBox from './BigBox'

function App() {

const [list, setList] = useState([]);
const myInput = useRef(null);





    return (
        <>
            <BigBox list={list}/>
        </>
    )
}

export default App
