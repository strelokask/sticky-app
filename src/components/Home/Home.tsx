import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { DropResult } from "react-beautiful-dnd";
import { DashboardContext } from "../app/Dashboard/DashboardProvider";
import AddNote from "../Note/AddNote";
import DnDNotesList from "../Note/DnDNotesList";
import Note from "../Note/Note";

const Home: FC = () => {

    const { notes } = useContext(DashboardContext);

    const handleDragEnd = ({ destination, source }: DropResult) => {
        if (!destination) return;

        notes.reorder(source.index, destination.index);
    }
    return (
        <Box component="main" sx={{ display: "flex", flexDirection: 'column', p: 2 }}>
            <AddNote />
            <DnDNotesList notes={notes.items} onDragEnd={handleDragEnd} NoteComponent={Note} />

        </Box>
    );
}

export default Home;