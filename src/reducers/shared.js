import {GET_INITIAL_DATA} from '../actions/shared'

export default function shared(state = [], actions) {
    switch (action.type) {
        case GET_INITIAL_DATA:
            return getInitialData()
                .then(([users, questions]) => {
                this.setState({
                    users,
                    questions
                })
            })
        default:
            return state
    }
}