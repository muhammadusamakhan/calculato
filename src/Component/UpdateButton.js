

import React, {createContext} from 'react'
import { CommonContext } from './CommonContext';
function  UpdateButton () {
 
  
   
    return (
      
      <CommonContext.Consumer >
             {
              ({updateColor})=>
              <div> 
              (<button  onClick={()=>updateColor('yellow')}>Update color</button>
              <button  onClick={()=>updateColor('blue')}>Update color</button>)
              </div>
          }
     
      </CommonContext.Consumer>
      
    );
  }
  

export default UpdateButton;