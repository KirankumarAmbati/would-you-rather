function noOfQuestionsAsked(userId, questions) {
    let questionsAsked = 0
    Object.keys(questions).map((qid) => questions[qid].author === userId && questionsAsked++ )
    return questionsAsked
}

function noOfQuestionsAnswered(userId, questions) {
    let questionsAnswered = 0
    Object.keys(questions).map((qid) => (questions[qid].optionOne.votes.includes(userId) || questions[qid].optionTwo.votes.includes(userId)) && questionsAnswered++ )
    return questionsAnswered
}

function totalQuestionsByUser(userId, questions) {
    return noOfQuestionsAsked(userId, questions) + noOfQuestionsAnswered(userId, questions)
}

function getUnansweredQuestions(loggedUser, questions) {
    return Object.keys(questions).filter((key) => !questions[key].optionOne.votes.includes(loggedUser) && !questions[key].optionTwo.votes.includes(loggedUser))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
}

function getAnsweredQuestions(loggedUser, questions) {
    return Object.keys(questions).filter((key) => questions[key].optionOne.votes.includes(loggedUser) || questions[key].optionTwo.votes.includes(loggedUser))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
}

export {
    noOfQuestionsAsked,
    noOfQuestionsAnswered,
    totalQuestionsByUser,
    getAnsweredQuestions,
    getUnansweredQuestions
}