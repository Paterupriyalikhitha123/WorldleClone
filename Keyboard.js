import React, {useEffect}from 'react';
import { keys } from '../constants/constants';
import '../style/keyboard.css';

const Keyboard = ({boardData,handleKeyPress}) => {

  
    function handleKeyboard(key) { 
        if (key.key === "Enter")
            handleKeyPress("ENTER")
        if (key.key === "Backspace")
            handleKeyPress("⌫")
        if (key.key.length === 1 && key.key.toLowerCase() !== key.key.toUpperCase())
            handleKeyPress(key.key.toUpperCase())
    }
    useEffect(() => {          
        window.addEventListener("keydown", handleKeyboard)

        return () => { window.removeEventListener("keydown", handleKeyboard) }
    }, [handleKeyPress])
  return (<div className='keyboard-rows' >
      {keys.map((item,index)=>(
            <div className='row' key={index}>
                {
                    item.map((key,keyIndex)=>(
                        <button key={keyIndex} 
                            className={`${boardData && boardData.correctCharArray.includes(key)?"key-correct":
                            (boardData && boardData.presentCharArray.includes(key) ?"key-present":
                            boardData && boardData.absentCharArray.includes(key)?"key-absent":"")} `} 
                            onClick={()=>{handleKeyPress(key)}}>
                            {key}
                        </button>
                    ))
                }
            </div>
            ))}
           
        </div>);
};

export default Keyboard;
