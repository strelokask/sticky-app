import { Box } from "@mui/system";
import { FC, useContext } from "react";
import { DropResult } from 'react-beautiful-dnd';
import DnDNotesList from "../Note/DnDNotesList";
import { DashboardContext } from "./DashboardProvider";

const Dashboard: FC = () => {
  const { notes } = useContext(DashboardContext);

  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    notes.reorder(source.index, destination.index);
  }
  return (
    <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 2 }}>
      <DnDNotesList notes={notes.items} onDragEnd={handleDragEnd} />
      {/* <Grid container spacing={2}>
        {pathname === "/"
          ? notes.map((note) => (
            <Grid key={note.id} item xs={4} md={3}>
              <Note note={note} onUpdateContent={handleOpenDialog} />
            </Grid>
          ))
          : archivedNotes.map((note) => (
            <Grid key={note.id} item xs={4} md={3}>
              <Note note={note} onUpdateContent={handleOpenDialog} />
            </Grid>
          ))}
      </Grid> */}

    </Box>
  );
};

export default Dashboard;
