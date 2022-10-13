import { Grid } from "@mui/material";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { INote } from "../../domain/Note";

interface DraggableNoteProps {
    note: INote,
    index: number,
    NoteComponent: FC<{ note: INote }>
}
const DraggableNote: FC<DraggableNoteProps> = ({ note, index, NoteComponent }) => {

    return <Draggable draggableId={(note.id?.toString() ?? "default")} index={index}>
        {(providedDraggable) => {
            return <Grid key={note.id}
                {...providedDraggable.draggableProps}
                {...providedDraggable.dragHandleProps}
                ref={providedDraggable.innerRef}
                item xs={4} md={3}>
                <NoteComponent note={note} />
            </Grid>
        }}
    </Draggable>
}

export default DraggableNote;