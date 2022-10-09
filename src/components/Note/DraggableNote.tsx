import { Grid } from "@mui/material";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { INote } from "../../domain/Note";
import Note from "./Note";

interface DraggableNoteProps {
    note: INote,
    index: number
}
const DraggableNote: FC<DraggableNoteProps> = ({ note, index }) => {

    return <Draggable draggableId={(note.id?.toString() ?? "default")} index={index}>
        {(providedDraggable) => {
            return <Grid key={note.id}
                {...providedDraggable.draggableProps}
                {...providedDraggable.dragHandleProps}
                ref={providedDraggable.innerRef}
                item xs={4} md={3}>
                <Note note={note} />
            </Grid>
        }}
    </Draggable>
}

export default DraggableNote;