import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carte from './Carte'
import '../App.css';



function Home({ search}) {
    const [list, setList] = useState([])
    const fetchData = async () => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => setList(res.data.results))
        .catch(err => err)
    }
    



    useEffect(() => {
      
        fetchData()
    }, [])



    console.log(list)
    




    return (
        <div className='container'>

            {list.filter(el => el.name.toUpperCase().includes(search.toUpperCase())).map((el, i) => <Carte el={el} key={i} index={i+1} />)}


        </div>
    )
}

export default Home