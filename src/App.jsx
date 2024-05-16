import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [input, setinput] = useState("")
  const [todo, settodo] = useState(['Set-goal', 'Hardwork', 'Succeed'])
  const [editIndex, setEditIndex] = useState(null)
  const [editInput, setEditInput] = useState("")

  const handleadd = () => {
    if (input.trim() !== "") {
      settodo([...todo, input]);
      setinput("")
    }
  }

  const handledel = (index) => {
    const del = todo.filter((_, i) => i !== index)
    settodo(del)
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditInput(todo[index])
  }

  const handleSave = (index) => {
    const updatedTodos = todo.map((task, i) => (i === index ? editInput : task))
    settodo(updatedTodos)
    setEditIndex(null)
    setEditInput("")
  }
  
  return (
    <>

<div className='todo-design'>
      <div className='todoform'>
        <h1 className='heading'>To-Do-List</h1>
        <div className="inputbtn">
          <input 
            type="text" 
            placeholder='What is the task today' 
            value={input} 
            onChange={(e) => setinput(e.target.value)} 
          />
          <button onClick={handleadd}>Add</button>
        </div>

        {todo.map((task, index) =>
          <div key={index}>
            <div className='mapclass'>
              {editIndex === index ? (
                <input 
                  type="text" 
                  value={editInput} 
                  onChange={(e) => setEditInput(e.target.value)} 
                  className='editinput'/>
              ) : (
                <span>{task}</span>
              )}
              <div className='editdel'>
                {editIndex === index ? (
                  <button className='save' onClick={() => handleSave(index)}>Save</button>
                ) : (
                  <>
                    <button className='edit' onClick={() => handleEdit(index)}>Edit</button>
                    <button className='delete' onClick={() => handledel(index)}>Delete</button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    
    </>
  )
}

export default App
