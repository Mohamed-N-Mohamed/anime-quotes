import React, {useState, useEffect} from 'react'

const Search = () => {
  //set anime quotes
  const [title, setTitle] = useState('')

  //set search value
  const [searchValue, setSearchValue] = useState('')



  //fetch anime quote by title
    const fetchAnime = async () => {
      setSearchValue('')
      if(searchValue){
      const data = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${searchValue}`);
      const response = await data.json();
      //log response
      console.log(response)

      //set title
      setTitle(response)

      //clear search
      clearSearchInput();

      }

      else {
      //thorw a error
      errorHandling()
      }
 
    }

    //get search value
    const getTitle = (e) => {
        setSearchValue(e.target.value)
    }
    //alert error
    const errorHandling = () => {
      alert('Type Something')
    }

    //clear search input
    const clearSearchInput = () => {
      //get button element
      document.querySelector('input').value = ''
    }

  

  //search 
  return (
    <div className="Search Anime p-4 text-black font-sarif">
      <p className="text-center text-2xl py-4">Search for any anime quotes you like</p>
      
      <div className="search-bar flex justify-center p-4  align-center ">
        <div className="search pr-4 ">
        <input type="text" className=" search-input border-2 border-gray-300 bg-white h-10  px-16 rounded-lg text-sm focus:outline-non" onChange={getTitle}/>
        </div>

        <div className="search-button border-solid border-gray-200 bg-gray-600">
          <button className="px-5 py-2 text-white text-lg" onClick={fetchAnime}>Search</button>

        </div>
      </div>
      
    </div>
  )
}

export default Search
