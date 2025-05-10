import { useState } from "react";
/**
 * 
 * NOTAS:
 * - El componente recibe la matriz (tareas) y la funcion (setTareas) para actualizarla.
 * 
 */

let nextID = 0;

function TaskForm ({tasks, setTasks}){
    const [titulo,setTitulo] = useState("");//crea una variable de estao titulo para valor e entraa y settitulo la actualiza
    const handleSubmit = (e) => {
        e.preventDefault(); //evita que la pagina se recargue al enviar el formulario
        if (titulo.trim() === " ") {
            alert("El campo no puede estar vacio");
            return;
        }/**el input 
                esta controlado por su valor titulo y el onchange actualiza el titulo cada vez que el usuario
                escribe */
        if (titulo.length > 0) {
            setTasks([...tasks,  {id: nextID++, titulo:titulo}]); //actualiza el estado de tareas con la nueva tarea
            setTitulo(""); //limpia el campo de entrada
        } /**
                El estado controla la interfaz del usuario y esta lo refleja
                el onchange escucha los cambios de entrada y actualiza el titulo con nuevo valor
                 */

    }
    return(
        <div>
            <h3>Agregar Tarea</h3>
            <form>
                <label>Titulo:</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} /> 
                <button type="submit">Agregar</button>
                
            </form>
        </div>
    )
}
export default TaskForm;