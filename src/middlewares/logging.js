export default (store) => (next) => (action) => {
    console.group(action.type)
        console.log('ACTION: ', action)
        const returnVal = next(action)
        console.log('STATE: ', store.getState())
    console.groupEnd()

    return returnVal
}