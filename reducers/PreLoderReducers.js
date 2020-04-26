export default function (state={}, action) {

    switch(action.type){
        case "BLOGS_PRE_LOADER":
            // console.log('hello this is from blogReducaers ', action.payload)
            return {
                ...state,
                blogsPreLoader : action.payload

            }
        default:
            return state

    }
}