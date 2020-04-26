import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft:10,
        marginRight:10
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    });
    

class Home extends Component{
    constructor(){
        super();
        this.state = {
            name: "Ashif",
            status: true
        }
    }
    render(){
        let user = this.state.status ? this.state.name : "No Name"
        return(
            <View>
                <Text style={styles.bigBlue}>Hey, this hello from Home component, {user}</Text>
            </View>
        );
    }
}
export default Home