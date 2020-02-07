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
        questions: shuffleAndSelect(state.noOfQuestions, state.allQuestions),
      }
    }
    case "setNoQuestions": {
      return {
        ...state,
        noOfQuestions: action.noOfQuestions,
      }
    }
    case "setPlayerName": {
      return {
        ...state,
        players: {
          ...state.players,
          [action.player]: action.name,
        },
      }
    }
    case "setAnswer": {
      const answered = state.questions.map((q, i) =>
        i === state.questionNo - 1 ? { ...q, [state.player]: action.answer } : q
      )
      return {
        ...state,
        questions: answered,
        player: state.player === "player1" ? "player2" : "player1",
        questionNo:
          state.player === "player2" ? state.questionNo + 1 : state.questionNo,
      }
    }
  }
}
