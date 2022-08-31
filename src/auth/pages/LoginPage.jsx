import {Link as RouterLink} from 'react-router-dom'

import { AuthLayout } from '../layout/AuthLayout'

import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useMemo } from 'react'


export const LoginPage = () => {

  const dispatch = useDispatch()

  const { status } = useSelector((state)=> state.auth)

  const isChecking = useMemo(()=> status === 'checking',[status])

  const {email, password, onInputChange} = useForm({
    email: 'fernandogtorrez@gmail.com',
    password: '123456'
  })

  const onSubmit = (event) =>{
    event.preventDefault()
    console.log({email, password})
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit}>
          <Grid
            item
            xs={12}
            sx={{mt: 2}}
          >
            <TextField
              label='Correo'
              type='email'
              placeholder="correo@gmail.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{mt: 2}}
          >
            <TextField
              label='Contraseña'
              type='password'
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{mb: 2, mt: 1}}
          >
            <Grid
              item
              xs={12}
              sx={{mt:2}}
            >
              <Button
                variant="contained"
                fullWidth
                type='submit'
                disabled={isChecking}
              >
                <Typography sx={{ml: 1}}>Login</Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{mt:2}}
            >
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isChecking}
              >
                <Google/>
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link
              component={RouterLink}
              color= 'inherit'
              to='/auth/register'
            >
              Crear una Cuenta
            </Link>
          </Grid>
        </form>
      </AuthLayout>
  )
}
