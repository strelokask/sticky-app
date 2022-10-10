import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { DropResult } from "react-beautiful-dnd";
import { DashboardContext } from "../app/Dashboard/DashboardProvider";
import DnDNotesList from "../Note/DnDNotesList";

const Home: FC = () => {

    const { notes } = useContext(DashboardContext);

    const handleDragEnd = ({ destination, source }: DropResult) => {
        if (!destination) return;

        notes.reorder(source.index, destination.index);
    }
    return (
        <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 2 }}>
            <DnDNotesList notes={notes.items} onDragEnd={handleDragEnd} />
        </Box>
    );
}

export default Home;