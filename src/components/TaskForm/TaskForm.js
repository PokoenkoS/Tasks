export const TaskForm =()=>{
    const handlesSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
       form.reset();
    }
    return(
<form>
    <input
    type="text"
    name="text"
    placeholder="Enter task text..."
    onSubmit={handlesSubmit}
   />
   <button type="submit">Add task</button>
</form>
    )
}