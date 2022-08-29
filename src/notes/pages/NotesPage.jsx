import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { NotesLayout } from "../layout/NotesLayout"
import { NoteView } from "../views"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const NotesPage = () => {
  return (
    <NotesLayout>
      <NothingSelectedView/>
      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: '#fff',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity:0.9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </NotesLayout>
  )
}
