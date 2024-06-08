import './Grid.css';
import { useState } from 'react';

function Grid()
{
    let [data, setData] = useState("O");
    const displayXO = () => {
        if(data==="O")
            {
                setData("X");
            }
        else
        {
            setData("O");
        }            
      }
    return (
        <div>    
        <div className='grid-container'>
         <button className='grid-item'onClick={() => displayXO()}> </button>
         <button class='grid-item' > </button>
         <button class='grid-item'> </button>  
         <button class='grid-item' > </button>
         <button class='grid-item' > </button>
         <button class='grid-item' > </button>  
         <button class='grid-item' > </button>
         <button class='grid-item'> </button>
         <button class='grid-item' > </button>
        </div> 
        </div>
    );
  }
  
  export default Grid;