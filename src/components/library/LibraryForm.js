import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import FormBook from './LibraryFormStyle.js'
import addBookToDb from '../../redux/operations/bookOperation'

const initialState = {
    title: "",
    author: "",
    year: "",
    pages: "",
}

const LibraryForm = () => {
    const [book, setBook] = useState({...initialState})
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setBook(prev => ({...prev, [name]: value}))

    }
    const onBookSubmit =(e) => {
        e.preventDefault();
        dispatch(addBookToDb(book));
        // console.log(book)
        setBook({ ...initialState });
    }


  return <>
  <FormBook onSubmit={onBookSubmit}>
      <label className="bookLabel">
          Назва книги
          <input name = "title" placeholder="..." value={book.title} onChange= {onInputChange} className = "bookInput"/>
      </label>
      <label className="bookLabel">
          Автор книги
          <input name = "author" placeholder="..." value={book.author} onChange= {onInputChange} className = "bookInput"/>
      </label>
      <label className="bookLabel">
          Рік випуску
          <input name = "year" placeholder="..." value={book.year} onChange= {onInputChange} className = "bookInput"/>
      </label>
      <label className="bookLabel">
          Кількість сторінок
          <input name = "pages" placeholder="..." value={book.pages} onChange= {onInputChange} className = "bookInput"/>
      </label>
      <button type="submit">Додати</button>


  </FormBook>
  </>;
};

export default LibraryForm;