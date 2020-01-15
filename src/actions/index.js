export const score = state => {
    return {
        type: "SCORE",
        payload: state.score
    }
}