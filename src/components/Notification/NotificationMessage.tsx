import { Box, Button, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { INote } from "../../domain/Note";
import { DashboardContext } from "../Dashboard/DashboardProvider";

type Props = {
    message: string,
    note: INote
}
const NotificationMessage: FC<Props> = ({ message, note }) => {
    const { onNoteChange } = useContext(DashboardContext);
    const handleUndo = () => {
        console.log(note, 'onChange')
        onNoteChange(note);
    }
    return <Box display='flex' alignItems='center'>
        <Typography marginRight={'auto'}>{message}</Typography>
        <Button onClick={handleUndo} sx={{ marginLeft: 'auto' }}>UNDO</Button>
    </Box>
}

export default NotificationMessage;