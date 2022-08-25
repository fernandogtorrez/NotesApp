import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import { NotesApp } from './NotesApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <NotesApp/>
  </Router>
)
