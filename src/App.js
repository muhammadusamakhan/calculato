
//import './App.css';
import React, {createContext} from 'react'
import { CommonContext } from './Component/CommonContext';
//import Main from './Component/Main';
//import UpdateButton from './Component/UpdateButton';
//import Footer from './Component/Footer';
//import Header from './Component/Header';
class  App extends  React.Component {
  constructor(){
    super() 
    this.updateColor=(color)=>{
      this.setState({
        color:color
      
       } )
  }
    this.state={

      color:"green",
      updateColor:this.updateColor
    }
      this.updateColor=()=>{
        this.setState({
          color:"red"
        
         } )
    }
    
  }
  render(){
   
    return (
    
      <CommonContext.Provider value={this.state}>
        <Header/>
        <h1>Complete and easy  Api</h1>
       <Main/>
       <UpdateButton/>
       <Footer/>
      </CommonContext.Provider>
  
     
    );
  }
  
}

export default App;
