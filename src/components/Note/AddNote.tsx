import { Box, ClickAwayListener, TextField } from "@mui/material";
import { FC, useContext, useRef, useState } from "react";
import { INote } from "../../domain/Note";
import { DashboardContext } from "../app/Dashboard/DashboardProvider";

const defaultNote = {
    content: '', id: 0
}

const AddNote: FC = () => {
    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState<INote>(defaultNote);

    const { notes } = useContext(DashboardContext);

    const containerRef = useRef<HTMLElement>();

    const handleClickAway = () => {
        setShowTextField(false);
        if (containerRef.current) containerRef.current.style.minHeight = "30px";
        setAddNote(defaultNote);

        if (addNote.content) {
            notes.addItem(addNote);
        }
    };

    const onTextAreaClick = () => {
        setShowTextField(true);
        if (containerRef.current) containerRef.current.style.minHeight = "70px";
    };

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let changedNote = { ...addNote, [e.target.name]: e.target.value };
        setAddNote(changedNote);
    };
    return <ClickAwayListener onClickAway={handleClickAway}>
        <Box display="flex" flexDirection={'column'} ref={containerRef}>
            {showTextField && (
                <TextField
                    placeholder="Введите заголовок"
                    variant="outlined"
                    // InputProps={{ disableUnderline: true }}
                    style={{ marginBottom: 10 }}
                    onChange={onTextChange}
                    name="heading"
                />
            )}
            <TextField
                placeholder="Заметка..."
                multiline
                variant="outlined"
                onClick={onTextAreaClick}
                onChange={onTextChange}
                name="text"
                value={addNote.content}
            />
        </Box>
    </ClickAwayListener>
}


export default AddNote;