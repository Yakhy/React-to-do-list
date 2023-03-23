import { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./App.css";


function App() {
    const [data, setData] = useState([])
    
    
    

const updateData = (id) => {
  const newData = data.map((item) => {
    if(item.id === id) {
        return {...item, selected: !item.selected}
    }
    return item;
  })
  setData(newData)
}

const deleteItem = (id)=>{
    const newData = data.filter((item)=> {
        return item.id !== id;
    })
    setData(newData)
}
    const editItem = (id, editText) => {
        const newData = data.map((item) => {
            if(item.id === id) {
                return {...item, text: editText, selected: false}
            }
            return item
        })
        setData(newData)
    }
  
        
    return <div className="App">
        <div className="container">
            <h1 className="text">Daily to do list</h1>
           
            <Form setData={setData}/>
            <TodoList editItem={editItem}  data={data} updateData={updateData} deleteItem={deleteItem}/>
            <hr />
            <footer>
                <p>Items: {data.length}</p>
                <button onClick={()=> {
                    setData([])
                }}>Clear all</button>
            </footer>
        </div>
    </div>;
}

export default App;
