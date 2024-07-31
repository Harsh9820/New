import React, { useState } from 'react'

const SearchFilter = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Sweet corn",
    "Grapes",
    "Pineapples",
    "Clementine",
    "Date",
    "Damson",
    "Gooseberry",
    "Jackfruit",
    "Lychee",
    "Cantaloupe",
    "Watermelon",
    "Orange",
    "Peach",
    "Pear",
    "Raspberry",
    "Rambutan",
    "Strawberry",
    "Ziziphus mauritiana"
  ]
  const [res, setResult] = useState(fruits)
  const [search, setSearch] = useState("")
  const handleClick = (e) => {
    const search = e.target.value
    if (search === "") { setResult(fruits); return "Not Found";}
    const fByS = fruits.filter((fr) => {
      if(fr.toLowerCase().includes(search.toLowerCase())){
        return fr;
      }
    })
    setResult(fByS)
    console.log(res);
  }
  return (
    <>
      <div className="form-group container">
        <label htmlFor="">Search</label>{" "}
        <input type="text" 
        className="form-control" 
        name="fruit-name" id="" 
        aria-describedby="helpId" 
        placeholder="Fruit Name"
        onChange = {handleClick} /><br/>
        <button type="button" className="btn btn-primary" >Search</button>
      </div>
      {res.map((r) => {
        return(
        <p key={r}>{r}</p>
        )
      })}
    </>
  )
}

export default SearchFilter