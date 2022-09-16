import { Grid, Typography } from '@mui/material'
import { StarOutline } from '@mui/icons-material'

export const NothingSelectedView = () => {

  return (
    <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{minHeight:'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius:3}}
        className='animate__animate animate__animate__fadeIn'
    >
        <Grid
            item
            xs={12}
        >
            <StarOutline sx={{fontSize:100, color:'#fff'}}/>
        </Grid>
        <Grid
            item
            xs={12}
        >
            <Typography color='#fff' variant='h5'>
                Selecciona o crea una carta
            </Typography>

        </Grid>
    </Grid>
  )
}
