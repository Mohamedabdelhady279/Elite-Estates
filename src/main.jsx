import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './lib/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <App />
</Provider>
  </StrictMode>
)
