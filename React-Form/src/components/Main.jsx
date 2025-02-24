import { useState } from 'react'
import arrayCose from "../data/coseDaFare"

const Main = () => {

   const [ titleForm , setTitleForm] = useState("Mettere a mollo i legumi")
   const handleChange = (e) =>{
     console.log ( e )
     console.log ( e.target)
     setTitleForm ( e.target.value)
  }

// array iniziale reattivo
  const [ task , setTasks] = useState ( arrayCose )

  //Nuovo task da aggiungere
  const [ newTask , setNewTask ] = useState ('')

    return (
      
      <main>
          <div>
            <ul>
            {
              arrayCose.map((element) => {
                return(
                <li>
                  {element.titolo}
                </li>)
              })
            }
            </ul>
          </div>
          <input 
      type="text"
      value={titleForm}
      onChange={ handleChange }
      /> 

      </main>
  
    );
  };
  export default Main;