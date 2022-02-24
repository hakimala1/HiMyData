import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Filtre() {
  const [list, setList] = useState([])
  const fetchData = async () => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => setList(res.data.results))
      .catch(err => err)
  }




  useEffect(() => {

    fetchData()
  }, [])

  return (
    <div>
      <h1>Filtre</h1>
    </div>
  )
}

export default Filtre