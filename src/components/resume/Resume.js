import React from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import StarIcon from '../../components/icons/StarIcon'
import ResumeWrapper from './Resume.styled'

const Resume = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(modalActions.offModal())
    document.body.style.overflow = 'visible'
  }
  return (
    <>
      <ResumeWrapper>
        <p className="resumeText">Обрати рейтинг книги</p>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <p className="resumeContent">Резюме</p>
        <textarea className="resumeTextArea" placeholder="..."></textarea>
        <div className="buttonWrapper">
          <button className="buttonBack" type="button" onClick={closeModal}>
            Назад
          </button>
          <button className="buttonSave" type="button">
            Зберегти
          </button>
        </div>
      </ResumeWrapper>
    </>
  )
}

export default Resume
