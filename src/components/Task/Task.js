import css from "./Task.module.css"

export const Task =({task})=>{
return(
    <div className={css.wrapper}>
        <input
        className={css.checkbox}
        type="checkbox"
        checked={task.completed}
        />
        <p className={css.text}>{task.text}</p>
        <button className={css.btn}> close</button>
    </div>
)
}