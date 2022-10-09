import AddAlertIcon from "@mui/icons-material/AddAlert";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import { Dialog, DialogActions, DialogContent, IconButton, TextField, Zoom } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { FC, useContext, useEffect, useState } from "react";
import { INote } from "../../domain/Note";
import { DashboardContext } from "../Dashboard/DashboardProvider";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return (
        <Zoom
            style={{ transitionDelay: "50ms" }}
            timeout={1000}
            in
            ref={ref}
            {...props}
        />
    );
});

interface DialogState {
    open: boolean,
    selectedNote?: INote
}

const NoteDialog: FC = () => {
    const { dialog, archiveNote, notes } = useContext(DashboardContext);
    const [{ selectedNote, open }, setState] = useState<DialogState>({ open: false });

    useEffect(() => {
        if (dialog.selectedNoteId) {
            setState({ open: true, selectedNote: notes.items.find(x => x.id === (dialog.selectedNoteId)) })
        }
        else {
            setState({ open: false, selectedNote: undefined })
        }
    }, [notes, dialog.selectedNoteId])

    const handleCloseDialog = () => dialog.onSelectNote(undefined)

    const handleNoteUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedNote) {
            notes.editItem({ ...selectedNote, content: event.target.value });
            setState(prev => ({ ...prev, selectedNote: { ...selectedNote, content: event.target.value } }));
        }
    };

    const handleArchive = () => {
        archiveNote(selectedNote);
        handleCloseDialog();
    }

    return <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
    >
        <DialogContent dividers>
            <TextField
                InputProps={{ disableUnderline: true }}
                value={selectedNote?.content}
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
            <IconButton
                onClick={handleArchive}
            >
                <MoveToInboxIcon />
            </IconButton>
        </DialogActions>
    </Dialog>
}

export default NoteDialog;