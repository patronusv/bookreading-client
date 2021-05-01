import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import ResumeWrapper from './Resume.styled'
import StarRating from '../rating/StarRating'
import { patchBookAtDB } from '../../redux/operations/bookOperation'

const initialValue = {
  id: '608018a31175c9411812cbe8',
  rating: '',
  review: '',
}

const Resume = () => {
  const [rating, setRating] = useState()
  const [book, setBook] = useState({ ...initialValue })
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(modalActions.offModal())
    dispatch(modalActions.clearModalContent())
    document.body.style.overflow = 'visible'
  }
  const handleClick = e => {
    e.preventDefault()
    dispatch(patchBookAtDB(book.id, book))
  }
  const reviewChng = e => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <ResumeWrapper>
        <p className="resumeText">Обрати рейтинг книги</p>
        <StarRating rating={rating} setRating={setRating} />
        <p className="resumeContent">Резюме</p>
        <textarea
          className="resumeTextArea"
          placeholder="..."
          name="review"
          value={book.review}
          onChange={reviewChng}
        ></textarea>
        <div className="buttonWrapper">
          <button className="buttonBack" type="button" onClick={closeModal}>
            Назад
          </button>
          <button className="buttonSave" type="button" onClick={handleClick}>
            Зберегти
          </button>
        </div>
      </ResumeWrapper>
    </>
  )
}

export default Resume
