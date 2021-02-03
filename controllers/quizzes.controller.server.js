
const quizService
    = require('../services/quiz.service.server')


module.exports = (app) => {

    const findAllQuizzes = (req, res) =>
        res.send(quizService.findAllQuizzes())

    const findQuizById   = (req, res) =>
        res.send(quizService.findQuizById(req.params['qid']))

    const deleteQuiz = (req, res) =>
        res.send(quizService.deleteQuiz(req.params['qid']))

    const createQuiz = (req, res) =>
        res.send(quizService.createQuiz())

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
    app.delete("/api/quizzes/:qid", deleteQuiz)
    app.post("/api/quizzes", createQuiz)
}
