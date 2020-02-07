import shuffleAndSelect from "../utils/shuffleAndSelect"

export function gameReducer(state, action) {
  switch (action.type) {
    case "writeQuestionsToPage": {
      return {
        ...state,
        allQuestions: action.questionCount,
      }
    }
    case "startGame": {
      return {
        ...state,
        gameOn: true,
        setupVisible: false,
        gameVisible: true,
        questions: shuffleAndSelect(state.noOfQuestions, state.questionCount),
      }
    }
    case "setNoQuestions": {
      return {
        ...state,
        noOfQuestions: action.noOfQuestions,
      }
    }
  }
}
