import { collection, doc, Firestore, setDoc, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, setNote, startSaving, updateNote } from "./notesSlice";

export const startNewNote = () => {
    return async (dispatch, getState)=>{

        dispatch(startSaving());

        const { uid } = getState().auth
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imagesUrls: [],
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/notes/note` ) )

        await setDoc( newDoc, newNote )
        newNote.id = newDoc.id

        dispatch(addNewEmptyNote( newNote ));
        dispatch(setActiveNote( newNote ));
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState) => {
        const {uid} = getState().auth

        const collectionRef = collection(FirebaseDB, `${uid}/notes/note`)
        const {docs} = await getDocs( collectionRef )

       const notes = docs.map(doc => ({ id: doc.id, ...doc.data() }))

       console.log(notes)
       dispatch(setNote(notes))
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(startSaving())

        const { uid } = getState().auth
        const { activeNote } = getState().note

        const noteToFireStore = {...activeNote}
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB, `${uid}/notes/note/${activeNote.id}`)

        await setDoc(docRef, noteToFireStore, {merge: true})

        dispatch( updateNote(activeNote) )
    }
}