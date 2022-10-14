import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";
import { FC } from "react";

const SearchBox: FC = () => {
    return <TextField
        InputProps={{
            startAdornment: <SearchIcon />
        }}
        inputProps={{ color: 'white' }}
        variant="outlined"
        placeholder="Search"
    />
}

export default SearchBox;