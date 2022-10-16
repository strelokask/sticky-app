import AddAlertIcon from "@mui/icons-material/AddAlert";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { DashboardContext } from "../../app/contexts/DashboardProvider";
import { INote } from "../../domain/Note";
interface NoteProps {
    note: INote;
}
const ArchiveNote: FC<NoteProps> = ({ note }) => {
    const { unArchiveNote, dialog } = useContext(DashboardContext);

    return (
        <Card raised>
            <CardContent sx={{ maxWidth: 400 }}>
                <CardActionArea onClick={() => dialog.onSelectNote(note.id)}>
                    <Typography>{note.content}</Typography>
                </CardActionArea>
            </CardContent>
            <CardActions>
                <IconButton>
                    <AddAlertIcon />
                </IconButton>
                <IconButton onClick={() => unArchiveNote(note)}>
                    <EmojiObjectsIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ArchiveNote;
