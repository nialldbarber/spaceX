import React from 'react'
import { createRoot } from 'react-dom'
// Components
import { App } from 'app'
// Services
import * as serviceWorker from 'serviceWorker'

createRoot(document.getElementById('root')).render(<App />)

serviceWorker.unregister()
