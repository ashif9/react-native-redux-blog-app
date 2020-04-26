import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput, FlatList, YellowBox, TouchableHighlight, Alert} from 'react-native'
import {getBlogs, deleteBlog} from '../../actions'
import {connect} from 'react-redux'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import Toast from 'react-native-tiny-toast'
import LinearGradient from 'react-native-linear-gradient'

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
}
};

class Blogs extends Component {
    constructor(){
        super();
        this.state= {
            message: "Thanx for visiting",
            status: false,
            title: "",
            content: ""
        }
    }
    componentDidMount(){
        this.props.getBlogs()
        
    }

    goEdit = () => this.props.navigation.navigate('Edit')
    changeStatus = () =>{
        let st = this.state.status;
        this.setState({status : !st});
        console.log(this.state);
    }
    
    confirmDelete = (key) =>{
     console.log(key)
    //  Toast.show('This is a default toast');
    // Toast.showSuccess('Successfully Deleted')
     Alert.alert(
        'Are you sure to delete the post',
        'Once you click Yes, your blog will be deleted permanently.',
        [
            {text: 'NO', style: 'cancel'},
            {text: 'YES', onPress: () =>{this.props.deleteBlog(key), Toast.showSuccess('Successfully Deleted')} },
            // onPress={() => this.props.deleteBlog(item.key)}
        ]
        );   
    }
    preLoader = (preLoad) => {
        // const toast = Toast.showLoading('Loading...')
        return(
            preLoad ? <Text>Loading</Text> : '' 
        )
    }

    render() {
        // console.log('This is blog page ', this.props.listOfBlogs)
        let user = this.state.status ? this.state.message : 'Hello Wellcome the blog section'
        // console.log(this.props.blogsPreLoader)
        
        // this.preLoader( this.props.blogsPreLoader)
        return (
            <View style={styles.container}>
                    {/* <LinearGradient colors={['#cc669f', '#ff5998', '#53222c']} > */}
                {/* <Text style={{alignContent:"center", marginBottom: 10}}> {user} </Text> */}
                {/* <Button title="click once visited" onPress={this.changeStatus} />
                <Button title="Go to Edit" onPress={this.goEdit} /> */}
                <FlatList style={{width:'100%'}}
                        data={this.props.listOfBlogs}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor = {(item) => item.key}
                        renderItem = {({item}) => {
                            return (
                                <View>
                                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{elevation: 1, padding: 10, marginBottom:15, borderRadius:10}}>
                                    <Text style={{fontSize: 28, marginBottom:10, color:'#fff'}}>{item.title}</Text>
                                    <Text style={{fontSize:18, lineHeight:25, color:'#fff'}}>{item.content}</Text>
                                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:25}}>
                                        <TouchableHighlight underlayColor="#ADDDDD" onPress={() => this.props.navigation.navigate('Edit', {...item})}>
                                            <View style={{margin:5}}>
                                                <Icon name="edit" size={25} color="#fff" />
                                            </View>
                                        </TouchableHighlight>
                                        <TouchableHighlight underlayColor="#ADDDDD" onPress={() => this.confirmDelete(item.key)}>
                                            
                                            <View style={{margin:5}}>
                                                <Icon name="close" size={25} color="#fff" />
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </LinearGradient>
                                </View>
                            )
                        }}
                    />
            </View>
                // </LinearGradient>
                
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex: 1, 
        alignItems: 'center',
        padding: 30,
        justifyContent: 'center',
        // backgroundColor: '#FFFFFF'
    },
    textbox :{
        marginTop: 20,
        height: 40,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    }   
});

function mapStateToProps(state){
    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) =>{
        return {
            ...val,
            key: key
        }
    })
    return{
        listOfBlogs,
        blogsPreLoader: state.blogsPreLoader.blogsPreLoader
    }
}

export default connect(mapStateToProps, {getBlogs, deleteBlog}) (Blogs)
