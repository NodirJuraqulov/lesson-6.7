import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from './utils'
import { ContextProvider } from './context'
import { reducer, initialState } from './context/reducer.js'
// import App from './App.jsx'
const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Suspense>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </ContextProvider>
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>,
)
