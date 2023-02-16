import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from './pages/password/Password';
import Username from "./pages/username/Username"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Username /> } />
      <Route path="/oauth20-authorizeclientid81feacddd-2edrd-41e6-9bef-3e20a22349vb7&scopeserviceaaccount.microsoft.WbaXaqhlu3sd-gAubAZZJy6ucVbpZct0tgEpqhcliVqIu1_aWN8-8D8qbNfIaOx2ltT_MLp5yxpsHiYMtv0X8q4Shp7vV6-APMxGT"  element={<Password /> } />
      {/* <Route path="/pwd" element={<Password />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

