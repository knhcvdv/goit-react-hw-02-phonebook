import { TextField } from "@mui/material";

export const FindUser = ({setState}) => {
    const handleChangeFilter = (e) => {
        setState(prev => ({...prev, filter: e.target.value}));
      }

    return (
        <div>
         <TextField id="standard-basic" label="Телефон" variant="standard" onChange={handleChangeFilter}/> 
        </div>
    )
}