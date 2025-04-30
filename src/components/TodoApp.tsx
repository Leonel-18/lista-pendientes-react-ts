import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleAddTask = () => {
        if(newTask.trim() === '') return
        setListaTareas(tareaAnteriores => [...tareaAnteriores, newTask])
        setNewTask('')
    }

    const handleBorrarTarea = (index:number) => {
        setListaTareas(tareas => tareas.filter((_,i) => i !== index))
    }

  return (
    <div>
        <h1>Lista de tareas</h1>
        <div className="flex">
            <input 
            type="text" 
            onChange={(e) => setNewTask(e.target.value)} 
            name="newTask" 
            id="newTask" 
            value={newTask} 
            placeholder="Nueva Tarea"/>

            <button
            onClick={handleAddTask}
            >Agregar Tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}  />
    </div>
  )
}