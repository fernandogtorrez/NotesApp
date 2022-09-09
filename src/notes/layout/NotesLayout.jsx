import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components'

const drawerWidth = 240

export const NotesLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}} className='animate__animate animate__animate__fadeIn'>
        <NavBar drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>
        <Box
            component='main'
            sx={{ flexGrow: 1, padding: 3 }}
        >
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}
