import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { DropResult } from "react-beautiful-dnd";
import { DashboardContext } from "../../app/contexts/DashboardProvider";
import ArchiveNote from "../Note/ArchiveNote";
import DnDNotesList from "../Note/DnDNotesList";

const Archive: FC = () => {
    const { archivedNotes } = useContext(DashboardContext);

    const handleDragEnd = ({ destination, source }: DropResult) => {
        if (!destination) return;

        archivedNotes.reorder(source.index, destination.index);
    }
    return (
        <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 2 }}>
            <DnDNotesList notes={archivedNotes.items} onDragEnd={handleDragEnd} NoteComponent={ArchiveNote} />
        </Box>
    );
}

export default Archive;