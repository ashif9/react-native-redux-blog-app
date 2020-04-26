import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput} from 'react-native'
import {postBlogs} from '../../actions'
import {connect} from 'react-redux'

class Post extends Component {
    constructor(){
        super();
        this.state= {
            title: "",
            content: ""
        }
    }
    submit = () =>{
        this.props.postBlogs(this.state.title, this.state.content);
        console.log('......', this.state);
        this.setState({
            title: "",
            content: "",
        })
        // console.log('......', this.state);
        this.props.navigation.navigate('NavStack');
    }

    render() {
        let user = this.state.status ? this.state.message : 'Hello Wellcome the Post section'
        return (
            <View style= {styles.container}>
                <Text style={{alignContent:"center", marginBottom: 10}}> {user} </Text>
                <TextInput style={styles.textbox} placeholder="title" onChangeText={title => this.setState({title})} value={this.state.title} />
                <TextInput style={styles.textbox, {height: 120, marginBottom:10, borderBottomWidth: 1}} placeholder="content" onChangeText={(content) => this.setState({content})} value={this.state.content} />
                <Button title="Submit" onPress={this.submit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex: 1, 
        // alignItems: 'center',
        padding: 30,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textbox :{
        marginTop: 20,
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    }
});

export default connect(null, {postBlogs})(Post);

