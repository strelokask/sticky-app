import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import NoteDialog from '../../components/Note/NoteDialog';
import { INote } from '../../domain/Note';
import { useArray, useArrayReturnType } from '../../utils/hooks/useArray';

interface DialogProps {
    onSelectNote: (noteId?: number) => void;
    selectedNoteId?: number;
}

interface IDashboardContext {
    notes: useArrayReturnType<INote>;
    archivedNotes: useArrayReturnType<INote>;
    dialog: DialogProps;
    archiveNote: (note: INote | undefined) => void;
    unArchiveNote: (note: INote | undefined) => void;
}

const defaultNotes = [
    { id: 1, content: 'TEST1' },
    { id: 2, content: 'TEST2' },
    { id: 3, content: 'TEST3' },
];

const defaultValue: IDashboardContext = {
    notes: {
        items: [],
        reset: () => {},
        editItem: () => {},
        removeItem: () => {},
        addItem: () => {},
        reorder: () => {},
    },
    archivedNotes: {
        items: [],
        reset: () => {},
        editItem: () => {},
        removeItem: () => {},
        addItem: () => {},
        reorder: () => {},
    },
    dialog: { onSelectNote: () => {} },
    archiveNote: () => {},
    unArchiveNote: () => {},
};

export const DashboardContext = React.createContext<IDashboardContext>(defaultValue);

export const DashboardContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const notes = useArray<INote>();
    const archivedNotes = useArray<INote>();
    const [selectedNoteId, setSelectedNoteId] = useState<number>();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        console.log('setting default data');
        notes.reset(defaultNotes);
        archivedNotes.reset(defaultNotes);
        // eslint-disable-next-line
    }, []);

    const archiveNote = useCallback(
        (note: INote | undefined) => {
            if (note) {
                notes.removeItem(note);
                archivedNotes.addItem(note);

                enqueueSnackbar('Moved to archive.', {
                    action: (key) => (
                        <Button
                            onClick={() => {
                                notes.addItem({ ...note });
                                archivedNotes.removeItem(note);

                                closeSnackbar(key);
                            }}
                        >
                            UNDO
                        </Button>
                    ),
                });
            }
        },
        [enqueueSnackbar, closeSnackbar, notes, archivedNotes]
    );

    const unArchiveNote = useCallback(
        (note: INote | undefined) => {
            if (note) {
                archivedNotes.removeItem(note);
                notes.addItem(note);

                enqueueSnackbar('Moved to notes.', {
                    action: (key) => (
                        <Button
                            onClick={() => {
                                archivedNotes.addItem({ ...note });
                                notes.removeItem(note);

                                closeSnackbar(key);
                            }}
                        >
                            UNDO
                        </Button>
                    ),
                });
            }
        },
        [enqueueSnackbar, closeSnackbar, notes, archivedNotes]
    );

    const value = useMemo(() => {
        return {
            notes,
            archivedNotes,
            dialog: {
                onSelectNote: (noteId?: number) => setSelectedNoteId(noteId),
                selectedNoteId,
            },
            archiveNote,
            unArchiveNote,
        };
    }, [notes, archivedNotes, selectedNoteId, archiveNote, unArchiveNote]);

    return (
        <>
            <DashboardContext.Provider value={value}>
                {children}
                <NoteDialog />
            </DashboardContext.Provider>
        </>
    );
};
