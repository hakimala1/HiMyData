import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carte from './Carte'
import '../App.css';
import ReactPaginate from 'react-paginate';




function Home({ search }) {
    const [list, setList] = useState([])
    const fetchData = async () => {
        axios.get(`https://swapi.dev/api/people/`)
            .then(res => setList(res.data.results))
            .catch(err => err)
    }




    useEffect(() => {

        fetchData()
    }, [])

    const [pageNumber, setPageNumber] = useState(0)
    const userPerPage = 2
    const pageVisited = pageNumber * userPerPage
    const pageCount = Math.ceil(list.length / userPerPage)




    const displayUsers = list
        .slice(pageVisited, pageVisited + userPerPage)
        .map((el, i) => <Carte el={el} key={i} />)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }





    return (
        <div>
        <div className='container'>

            {/* {list.filter(el => el.name.toUpperCase().includes(search.toUpperCase())).map((el, i) => <Carte el={el} key={i} index={i + 1} />)} */}

            {displayUsers}
     
        </div>
        <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttns"}
                nextLinkClassName={"nextBttns"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}

            />
        </div>
    )
}

export default Home