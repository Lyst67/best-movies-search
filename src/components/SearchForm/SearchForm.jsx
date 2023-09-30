import { useState } from "react";
import css from '../../pages/Movies/Movies.module.css'

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
    <form className={css.form} onSubmit={handleSubmitSearch}>
      <input className={css.input} type="text" onChange={handleChange}></input>
      <button className={css.form_btn} type="submit">Search</button>
    </form>
  )
};
export default SearchForm;