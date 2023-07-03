import { Task } from "components/Task/Task"

export const TaskList =()=> {
return(
    <ul>
        {[].map(task=>(
            <li key={task.id}>
                <Task task={task}/>
            </li>
        ))

        }
    </ul>
)
}