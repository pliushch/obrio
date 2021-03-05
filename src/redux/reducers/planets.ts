const initialState = {
    planets: []
}

const planetsReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case "TEST":
            return {
                ...state
            }
        default:
            return state
    }
}

export default planetsReducer;
