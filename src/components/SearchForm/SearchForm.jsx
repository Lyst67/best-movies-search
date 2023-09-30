import { useState } from "react";

 const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("")
    
  const handleChange = ({ target: { value } }) => {
    setQuery(value)
  }

  const handleSubmitSearch = (event) => {
    event.preventDefault()
    if (query === "") {
      alert("Fill in the field, please!")
      return
    }
    onSubmit(query.toLowerCase().trim())
  }

  return (
    <form onSubmit={handleSubmitSearch}>
      <input type="text" onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  )
};
export default SearchForm;