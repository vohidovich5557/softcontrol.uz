import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { queryclient } from './hooks/store'
import './index.css'

import './i18n'
import { QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Toaster position='top-right' richColors />
      <QueryClientProvider client={queryclient}>
        <App />
      </QueryClientProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
