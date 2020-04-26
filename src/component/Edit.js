import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput} from 'react-native'
import {editBlog} from '../../actions'
import {connect} from 'react-redux'

class Edit extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: this.props.navigation.state.params.title,
            content: this.props.navigation.state.params.content,
            key: this.props.navigation.state.params.key
        }
    }
    // state = {
    //     title : this.props.navigation.state.params.title,
    //     content: this.props.navigation.state.params.content
    // }

    submit = () =>{
        // console.log('......', this.state); return false;
        this.props.editBlog(this.state.title, this.state.content, this.state.key)
        
        // console.log('......', this.state);
        this.setState({
            title: "",
            content: "",
            key : ""
        })
        this.props.navigation.navigate('Blogs');
    }

    render() {
        // console.log('all the parameter in edit page', this.props.navigation.state.params);
        return (
            <View style= {styles.container}>
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

export default connect(null, {editBlog})(Edit);

