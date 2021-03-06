// const getAllBooks = state => state.training.beforeStart.hardcodeBooks
const getBooksList = state => state.training.beforeStart.booksList
const getStartDate = state => state.training.beforeStart.startDate
const getFinishDate = state => state.training.beforeStart.finishDate
const getActiveTrainingID = state => state.training.active._id
const getActiveStartDate = state => state.training.active.startDate
const getActiveFinishDate = state => state.training.active.finishDate
const getActiveTraining = state => state.training.active
const getStatistics = state => state.training.active.progress
const getActiveBooks = state => state.training.active.books

export {
  getBooksList,
  getStartDate,
  getFinishDate,
  getActiveTrainingID,
  getActiveStartDate,
  getActiveFinishDate,
  getActiveTraining,
  getStatistics,
  getActiveBooks,
}
