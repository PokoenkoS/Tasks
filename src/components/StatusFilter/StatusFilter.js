import { Button } from "components/Button/Button"
import css from "./StatusFilter.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/actions";
import { statusFilters } from "redux/constants";

export const StatusFilter =()=> {
    const dispatch = useDispatch();
    const filter = useSelector(getStatusFilter);

    const handleFilterChange = ()=>{
        dispatch(setStatusFilter(filter))
    }
    return(
        <div className={css.wrapper}>
            <Button
             onClick={()=>handleFilterChange(statusFilters.all)}
             selected={filter ===statusFilters.all} 
             
             >All</Button>
            <Button
            onClick={()=>handleFilterChange(statusFilters.active)}
            selected={filter ===statusFilters.active}>Active</Button>
            <Button
            onClick={()=>handleFilterChange(statusFilters.completed)}
            selected={filter ===statusFilters.active}>Completed</Button>
        </div>
    )
}