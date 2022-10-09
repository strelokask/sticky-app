import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { INote, NoteType } from "../../domain/Note";

interface IDashboardContext {
  notes: INote[];
  archivedNotes: INote[];
  onNoteChange: (note: INote | undefined) => void;
  getNoteById: (id: number | undefined) => INote | undefined;
  archiveNote: (note: INote | undefined) => void;
}

const defaultNotes = {
  1: {
    id: 1,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  2: {
    id: 2,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  3: {
    id: 3,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
};

const defaultValue = {
  notes: [],
  archivedNotes: [],
  onNoteChange: () => {},
  getNoteById: (id: number | undefined) => undefined,
  archiveNote: (note?: INote) => {},
};

export const DashboardContext =
  React.createContext<IDashboardContext>(defaultValue);

export const DashboardContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [notes, setNotes] = useState<Record<number, INote>>(defaultNotes);

  const onNoteChange = useCallback((note: INote | undefined) => {
    if (note?.id) setNotes((prev) => ({ ...prev, [note.id as number]: note }));
  }, []);

  const archiveNote = useCallback(
    (note: INote | undefined) => {
      if (note)
        onNoteChange({
          ...note,
          content: note.content,
          type: NoteType.Archive,
        });
    },
    [onNoteChange]
  );

  const getNoteById = useCallback(
    (id: number | undefined) => (id ? notes[id] : undefined),
    [notes]
  );
  const value = useMemo(() => {
    return {
      notes: Object.values(notes).filter((x) => x.type !== NoteType.Archive),
      archivedNotes: Object.values(notes).filter(
        (x) => x.type === NoteType.Archive
      ),
      getNoteById,
      onNoteChange,
      archiveNote,
    };
  }, [notes, onNoteChange, getNoteById, archiveNote]);

  return (
    <>
      <DashboardContext.Provider value={value}>
        {children}
      </DashboardContext.Provider>
    </>
  );
};
