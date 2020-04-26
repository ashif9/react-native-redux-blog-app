export default function (state={}, action) {

    switch(action.type){
        case "BLOGS_FETCH":
            // console.log('hello this is from blogReducaers ', action.payload)
            return {
                ...state,
                blogsList : action.payload

            }
        default:
            return state

    }
}