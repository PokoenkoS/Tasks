import { useDispatch } from "react-redux"
import css from "./Task.module.css"
import { deleteTask, toggleCompleted } from "redux/actions";

export const Task =({task})=>{
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));
    const handleToggle =()=> dispatch(toggleCompleted(task.id))

    

return(
    <div className={css.wrapper}>
        <input
        className={css.checkbox}
        type="checkbox"
        checked={task.completed}
        onClick={handleToggle}
        />
        <p className={css.text}>{task.text}</p>
        <button className={css.btn} onClick={handleDelete}> close</button>
    </div>
)
}