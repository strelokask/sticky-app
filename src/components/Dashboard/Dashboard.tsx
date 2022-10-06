import AddAlertIcon from "@mui/icons-material/AddAlert";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC, useContext, useState } from "react";
import { INote } from "../../domain/Note";
import Note from "../Note/Note";
import { DashboardContext } from "./DashboardProvider";

interface DialogProps {
  selectedNote?: INote;
  open: boolean;
}

const Dashboard: FC = () => {
  const { notes, onNoteChange, getNoteById } = useContext(DashboardContext);

  const [dialog, updateDialog] = useState<DialogProps>({ open: false });
  const handleCloseDialog = () => updateDialog((d) => ({ ...d, open: false }));
  const handleOpenDialog = (noteId?: number) => {
    if (noteId)
      updateDialog((d) => ({
        ...d,
        open: true,
        selectedNote: getNoteById(noteId),
      }));
  };

  const handleNoteUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNoteChange({ ...dialog.selectedNote, content: event.target.value });
    updateDialog((d) => ({
      ...d,
      selectedNote: { ...d.selectedNote, content: event.target.value },
    }));
  };

  return (
    <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {Object.values(notes).map((note) => (
          <Grid key={note.id} item xs={4} md={3}>
            <Note note={note} onUpdateContent={handleOpenDialog} />
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={dialog.open}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent dividers>
          <TextField
            InputProps={{ disableUnderline: true }}
            value={dialog.selectedNote?.content}
            onChange={handleNoteUpdate}
            multiline
            autoFocus
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <IconButton>
            <AddAlertIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
