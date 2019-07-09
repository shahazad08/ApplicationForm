import React,{Component} from 'react';
import logo from './logo.svg';
import store from './store';
import './App.css';
import AppRouter from './Approuter';
import {Provider} from 'react-redux';
class App extends Component{
  render(){
    return(
      <Provider store={store} >
        <AppRouter/>
     </Provider>
    )
  }
}
export default App;
