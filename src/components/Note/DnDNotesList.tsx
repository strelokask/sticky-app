import { Grid } from "@mui/material"
import { FC } from "react"
import { DragDropContext, Droppable, DropResult, ResponderProvided } from "react-beautiful-dnd"
import { INote } from "../../domain/Note"
import DraggableNote from "./DraggableNote"

interface DnDNotesListProps {
    notes: INote[],
    onDragEnd: (result: DropResult, provided: ResponderProvided) => void
}
const DnDNotesList: FC<DnDNotesListProps> = ({ notes, onDragEnd }) => {
    return <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="notes-droppable-list">
            {(provided) => <Grid container spacing={2} ref={provided.innerRef} {...provided.droppableProps}>
                {notes.map((note, idx) => <DraggableNote note={note} key={note.id} index={idx} />)}
                {provided.placeholder}
            </Grid>
            }
        </Droppable>
    </DragDropContext>
}

export default DnDNotesList;