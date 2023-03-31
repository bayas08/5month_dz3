

const initialState = {
    count: 0
}

export const types = {
    PLUS: 'PLUS',
    MINUS: 'MINUS'
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case types.PLUS:
            return {...state, count: state.count + 1}
        case types.MINUS:
            if (state.count > 0){
                return {...state, count: state.count - 1}
            } else if (state.count === 0){
                return {...state, count: 0}
            }
        default: return state
    }
}