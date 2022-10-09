import AddAlertIcon from "@mui/icons-material/AddAlert";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { FC, useContext } from "react";
import { INote } from "../../domain/Note";
import { DashboardContext } from "../Dashboard/DashboardProvider";

interface NoteProps {
  note: INote;
  onUpdateContent: (noteId?: number) => void;
}
const Note: FC<NoteProps> = ({ note, onUpdateContent }) => {
  const { archiveNote } = useContext(DashboardContext);
  return (
    <Card raised>
      <CardContent sx={{ maxWidth: 400 }}>
        <CardActionArea onClick={() => onUpdateContent(note.id)}>
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
