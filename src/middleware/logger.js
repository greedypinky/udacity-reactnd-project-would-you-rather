const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('this action is:', action)
    // next is the reducer
    const dispatchedResult = next(action)
    console.log('after dispatch, the new state is:', store.getState())
    console.groupEnd()
    return dispatchedResult
} 

export default logger
