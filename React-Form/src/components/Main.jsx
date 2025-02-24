import { useState } from "react";
import arrayCose from "../data/coseDaFare";

const Main = () => {
  const [titleForm, setTitleForm] = useState("Mettere a mollo i legumi");
  const handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    setTitleForm(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const task = newTask.trim();
    setTasks([...tasks, task]);
    setNewTask('');
  };

  // array iniziale reattivo
  const [tasks, setTasks] = useState(arrayCose);

  //Nuovo task da aggiungere
  const [newTask, setNewTask] = useState("");

  // Rimuovere cose fatte

  const removeTask = (indiceElementoArray) => {
    const arrayClone = tasks.filter(
      (element, index) => index !== indiceElementoArray
    );
    return setTasks(arrayClone);
  };

  return (
    <main>
      <div className="container mt-5 w-50">
        <ul className="list-group">
          {tasks.map((element , index) => {
            return (
            <li key={index} className="list-group-item">
              <span>{element}</span>
              <button onClick={() => removeTask(index)} className="btn btn-sm btn-danger float-end">X</button>
              </li>);
          })}
        </ul>

        {/* Form!!! */}

        <form onSubmit={addTask}>
          <input
            type="text"
            className="form-control"
            placeholder="Vuoi aggiungere roba?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button  className="btn btn-primary mt-3">Aggiungi</button>
        </form>
      </div>
    </main>
  );
};
export default Main;
