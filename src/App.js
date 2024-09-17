import { useState } from "react";

function App() {
  const [atividade, setAtividade] = useState([])

  function handleAdd () {
    setAtividade()
  }
  console.log(atividade)
  return (
    <div className="App">
      <form onSubmit={() => {handleAdd()}}>
        <div>Insira a atividade:</div>
        <input></input>
        <br /><br />
        <button type="submit" >Enviar</button>
      </form>
      

      {/* <div>{atividade.splice(',')}</div> */}
    </div>
  );
}

export default App;
