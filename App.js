import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

import Router from "./src/component/Router";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from "./reducers";

const styles = StyleSheet.create({
  container: {
      marginTop: 15,
      marginLeft: 10,
      marginRight:10
  }
});

class App extends Component{
  render(){
    const state = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    )
    
    return(
        <Provider store={state}>
          <Router/>
        </Provider>
    );
  }
}
export default App