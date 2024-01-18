import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LogcontextProvider from './Context/LogContext.jsx'
// import {Provider} from 'react-redux'
// import { store } from './Store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LogcontextProvider>
        <App />
      </LogcontextProvider>
      {/* <Provider store={store}>
      </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
