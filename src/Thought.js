import React,{useEffect} from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  console.log(`inside thought function component..`);
  useEffect(() => {
    console.log(`inside effect function... for ${thought.id}`)
    const timeRemaining = thought.expiresAt - Date.now(); 
    const timeout = setTimeout(() =>{
    removeThought(thought.id);
    //alert(`Time has passed!`)
    console.log(`timeout function executed..for ${thought.id}`)
    },timeRemaining);
    return () => {clearTimeout(timeout);    //clean effect function
    console.log(`inside clean effect function for ${thought.id}`);
      }  
    }
    ,[thought]); //dependency array

  console.log(`just before rendering Thought component's JSX`);  
  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}>

        &times;

      </button>
      <div className="text">{thought.text}</div>
    </li>
    
  );
}
