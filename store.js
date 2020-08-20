const INITIAL_STATE = { mood: "", color: "" };
const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HAPPY":
      return updateMood(state, action);
    case "SAD":
      return updateMood(state, action);
    case "ANGRY":
      return updateMood(state, action);
    case "CONFUSED":
      return updateMood(state, action);
    case "RANDOM":
      return updateMood(state, action);
    default:
      return state;
  }
};

const updateMood = (state, action) => ({
  ...state,
  mood: action.payload.mood,
  color: action.payload.color,
});

const store = Redux.createStore(moodReducer);
