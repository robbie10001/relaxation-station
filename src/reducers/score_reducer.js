const defaultState = {
    score: null
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case "SCORE":
            return {...state, score: action.payload};
        default:
            return state;
    };
};