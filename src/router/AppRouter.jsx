import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { NoteRoutes } from '../notes/routes/NoteRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        {/* NotesApp */}
        <Route path='/*' element={<NoteRoutes/>}/>
    </Routes>
  )
}
