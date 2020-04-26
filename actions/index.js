import firebase from '../firebase'
import Toast from 'react-native-tiny-toast'

export function getBlogs() {
    const toast = Toast.showLoading('Loading...') 
    return(dispatch) =>{
        
        dispatch({
          type: 'BLOGS_PRE_LOADER',
          payload: toast
        })

        firebase.database().ref('/blogs').on('value', snapshot => {
            dispatch({
                type : "BLOGS_FETCH",
                payload : snapshot.val()
            })

            dispatch({
                type: 'BLOGS_PRE_LOADER',
                payload: Toast.hide(toast)
            })
        })
    }
}

export function postBlogs(title, content){
    return (dispatch) =>{
        firebase.database().ref('/blogs').push({title, content})
    }
}

export function deleteBlog(key){
    return (dispatch) =>{
        firebase.database().ref(`/blogs/${key}`).remove()
    }
}

export function editBlog(title, content, key){
    return (dispatch) =>{
        firebase.database().ref('/blogs').child(key).update({title, content})
    }
}