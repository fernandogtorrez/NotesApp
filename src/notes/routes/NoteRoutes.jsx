import { NotesPage } from '../pages/NotesPage'
import {Route,Routes,Navigate} from 'react-router-dom'
export const NoteRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<NotesPage/>} />
        <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
  )
}
