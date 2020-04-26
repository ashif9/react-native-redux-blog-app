import Blogs from './Blogs';
import Edit from './Edit'
import Post from './Post'

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const NavStack = createStackNavigator({
    Blogs: {
        screen: Blogs
    },
    Edit: {
        screen: Edit
    },
},{
    headerTitleAlign: 'center'
});

const BottomTab = createBottomTabNavigator({
    NavStack:{
        screen: NavStack
    },
    Post: {
        screen: Post
    }
})

export default Router = createAppContainer(BottomTab)