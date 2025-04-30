
type Tarea = {
    tarea: string,
    borrarTareas: () => void
}

export const Tarea = ({tarea, borrarTareas}: Tarea) => {
  return (
    <div className="task">
        <span>{tarea}</span>
        <button onClick={borrarTareas}>Eliminar tarea</button>
    </div>
  )
}