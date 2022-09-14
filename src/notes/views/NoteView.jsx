import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { setActiveNote } from '../../store/notes/notesSlice'
import { ImageGalery } from '../components'
import { startSaveNote } from '../../store/notes/thunks'

const formValid = {
    title: [
        [(value) => value.length > 4, 'El titulo debe contener al menos 4 caracteres']
    ],
    body: [
        [(value) => value.length > 6, 'El titulo debe contener al menos 6 caracteres']
    ]
}

export const NoteView = () => {

    const dispatch = useDispatch()

    const { activeNote } = useSelector(state => state.note)

    const { body,title, onInputChange, formState, date, titleValid, bodyValid, isFormValid } = useForm( activeNote, formValid )

    useEffect(()=>{
        dispatch(setActiveNote(formState))
    },[formState])

    const dateString = useMemo(()=> {
        const newDate = new Date( date )
        return newDate.toUTCString()
    },[date])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

  return (
    <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb:1 }}
        className='animate__animate animate__animate__fadeIn'
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>
                {dateString}
            </Typography>
        </Grid>
        <Grid item>
            <Button sx={{padding: 2}}
                onClick={onSaveNote}
            >
                <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                sx={{border: 'none', mb:1}}
                name='title'
                value={title}
                onChange={onInputChange}
                error={ !!titleValid }
                helperText={titleValid}
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Descripción'
                multiline
                minRows={5}
                name='body'
                value={body}
                onChange={onInputChange}
                error={!!bodyValid}
                helperText={bodyValid}
            />
        </Grid>
        {/* Galeria de imagenes */}
        <ImageGalery/>
    </Grid>
  )
}
