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
        summaryVisible: false,
        questions: shuffleAndSelect(state.noOfQuestions, state.allQuestions),
        questionNo: 1,
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
      const lastAnswer =
        state.questionNo > state.noOfQuestions - 1 && state.player === "player2"
      return {
        ...state,
        questions: answered,
        player: state.player === "player1" ? "player2" : "player1",
        questionNo: lastAnswer
          ? 1
          : state.player === "player2"
          ? state.questionNo + 1
          : state.questionNo,
        setupVisible: false,
        gameVisible: !lastAnswer,
        summaryVisible: lastAnswer,
        gameOn: !lastAnswer,
      }
    }
    case "lovelyBunch": {
      console.log("I've got a lovely bunch o coconuts")
      return {
        ...state,
      }
    }
    case "incPage": {
      return {
        ...state,
        questionNo: state.questionNo + 1,
      }
    }
    case "decPage": {
      return {
        ...state,
        questionNo: state.questionNo - 1,
      }
    }
  }
}
