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
import { FC } from "react";
import { INote } from "../../domain/Note";

interface NoteProps {
  note: INote;
  onUpdateContent: (noteId?: number) => void;
}
const Note: FC<NoteProps> = ({ note, onUpdateContent }) => {
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
        <IconButton>
          <MoveToInboxIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Note;
