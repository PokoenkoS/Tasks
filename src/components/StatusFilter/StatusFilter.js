import { Button } from "components/Button/Button"
import css from "./StatusFilter.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";
import { statusFilters } from "../../redux/constants";

export const StatusFilter =()=> {
    const dispatch = useDispatch();
    const filter = useSelector(getStatusFilter);

    const handleFilterChange = (filter)=>{
               dispatch(setStatusFilter(filter))
            }
    return(
        <div className={css.wrapper}>
            <Button
            selected={filter ===statusFilters.all} 
            
             onClick={()=>handleFilterChange(statusFilters.all)}
             
             >All</Button>
            <Button
            onClick={()=>handleFilterChange(statusFilters.active)}
            selected={filter ===statusFilters.active}>Active</Button>
            <Button
            onClick={()=>handleFilterChange(statusFilters.completed)}
         
            selected={filter ===statusFilters.completed}>Completed</Button>
        </div>
    )
}