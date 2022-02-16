

import React, {createContext} from 'react'
import { CommonContext } from './CommonContext';
class  Main extends  React.Component {
 
  render(){
   
    return (
      
      <CommonContext.Consumer >
          {
              ({color})=>
              (<h1 style={{backgroundColor:color}}>Main Api</h1>)
          }
     
      </CommonContext.Consumer>
     
    );
  }
  
}

export default Main