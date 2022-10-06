export interface INote{
    id?: number;
    content: string;
    type?: NoteType;
}

export enum NoteType {
    Idea, Archive
}