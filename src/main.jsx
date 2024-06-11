import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LikedPage from './Pages/LikedPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/likepage' element={<LikedPage />} />
  </Routes>
  </BrowserRouter>
  </Provider>
)
