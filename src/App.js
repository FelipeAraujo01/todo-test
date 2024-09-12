import { useState } from "react";

function App() {

  const [list, setList] = useState([])

  const style = {
    list: {
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    }
  }

  const addList = (text) => {
    let newList = [
      ...list,
      ...text.split(';')
    ];

    setList(newList)
    document.getElementById('text').value = "";
  }

  return (
    <div className="App">
      <div 
        className="list"
        style={style.list}
      >
        {list.map((l, i) => (
          <div className="row">
            <input type="checkbox" name={`todo-${i}`} id={`todo-${i}`}/>
            <label for={`todo-${i}`}>{l}</label>
          </div>
        ))}
      </div>

      <input type="text" id="text"></input>
      <button onClick={() => addList(document.getElementById('text').value)}>Adicionar</button>  
    </div>
  );
}

export default App;
