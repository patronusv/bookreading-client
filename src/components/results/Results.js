import React from 'react'
import DatePicker from 'react-datepicker'
import { useFormik } from 'formik'
import * as yup from 'yup'
import 'react-datepicker/dist/react-datepicker.css'
import ResultsWrapper from './ResultsStyled'
import { addResultsOperation } from '../../redux/operations/trainingOperations'
import convertDate from '../../utils/dateConverter'
import { useDispatch, useSelector } from 'react-redux'
import {
  getActiveFinishDate,
  getActiveStartDate,
  getActiveTraining,
  getStatistics,
} from '../../redux/selectors/trainingSelectors'
import Statistics from '../statistics/Statistics'
import modalActions from '../../redux/actions/modalActions'
import getAveragePages from '../../utils/getAveragePages'

const Results = () => {
  const dispatch = useDispatch()
  const startDate = useSelector(getActiveStartDate)
  const finishDate = useSelector(getActiveFinishDate)
  const training = useSelector(getActiveTraining)
  const statistic = useSelector(getStatistics)

  const validationSchema = yup.object({
    date: yup.string().required('Виберіть дату'),
    pages: yup.number().required(`Обов'язкове поле`)
  })

  const formik = useFormik({
    initialValues: {
      date: '',
      pages: '',
    },
    validationSchema,
    onSubmit: values => {
      const date = convertDate(values.date)

      const pagesPerDay =
      statistic?.find(day => day.date === date)?.pages + values.pages

      const averagePages = getAveragePages(
        startDate,
        finishDate,
        training.pagesTotal
        )

      dispatch(addResultsOperation(date, values.pages))

      if (!pagesPerDay && values.pages < averagePages) {
        dispatch(modalActions.setModalContent('wellDone'))
        dispatch(modalActions.toggleModal())
      }

      if (!statistic.length && values.pages < averagePages) {
        dispatch(modalActions.setModalContent('wellDone'))
        dispatch(modalActions.toggleModal())
      }

      if (pagesPerDay < averagePages && values.pages > 0) {
        dispatch(modalActions.setModalContent('wellDone'))
        dispatch(modalActions.toggleModal())
      }
    },
  })

  const handleDateChange = date => {
    formik.setFieldValue('date', date)
  }

  return (
    <ResultsWrapper>
      <p className="resultsTitle">Результати</p>
      <form
        className="resultsForm"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div className="formGroup">
          <div className="inputGroup">
            <label className="label" htmlFor="date">
              Дата
            </label>
            <DatePicker
              selected={formik.values.date}
              onChange={handleDateChange}
              dateFormat="d.MM.yyyy"
              name="data"
              placeholderText="д.мм.рррр"
              className="formInputDate"
              minDate={new Date(startDate)}
              maxDate={
                new Date(finishDate) <= new Date() ? null : new Date(finishDate)
              }
              popperProps={{
                positionFixed: true,
              }}
              id="date"
            />
            {formik.touched.date && formik.errors.date ? (
              <span className="error ">{formik.errors.date}</span>
            ) : null}
          </div>
          <div className="inputGroup">
            <label className="label" htmlFor="pages">
              Кількість сторінок
            </label>
            <input
              type="number"
              name="pages"
              placeholder="..."
              id="pages"
              className="pagesInput"
              onChange={formik.handleChange}
              value={formik.values.pages}
            />
            {formik.touched.pages && formik.errors.pages ? (
              <span className="error ">{formik.errors.pages}</span>
            ) : null}
          </div>
        </div>
        <button type="submit" className="formButton">
          Додати результат
        </button>
      </form>
      <Statistics />
    </ResultsWrapper>
  )
}

export default Results
