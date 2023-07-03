import css from "./StatusFilter.module.css"

export const StatusFilter =()=> {
    return(
        <div className={css.wrapper}>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}