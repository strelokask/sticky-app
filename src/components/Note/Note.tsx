import AddAlertIcon from "@mui/icons-material/AddAlert";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from "@mui/material";
import { FC, useContext } from "react";
import { INote } from "../../domain/Note";
import { DashboardContext } from "../Dashboard/DashboardProvider";

interface NoteProps {
  note: INote;
}
const Note: FC<NoteProps> = ({ note }) => {
  const { archiveNote, dialog } = useContext(DashboardContext);

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
        <IconButton onClick={() => archiveNote(note)}>
          <MoveToInboxIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Note;
