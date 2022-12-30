import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HOME, LISTS, ALL, REGISTER} from './routes'
import { HomeScreen } from '../../components/homepage/HomeScreen';
import { PhotoListPage } from '../../components/photolistpages/PhotoListPage';
import {AllPhotosPage } from '../../components/photolistpages/AllPhotosPage';
import { RegistrationPage } from '../../components/registrationpage/RegistrationPage';

export const AppRouter = () => {

  const [selectedTopic, setSelectedTopic] = React.useState("")
  return (
   <BrowserRouter>
   <Routes>
     <Route path={HOME} element={<HomeScreen setSelectedTopic={setSelectedTopic}/>} />
     <Route path={LISTS} element={<PhotoListPage selectedTopic={selectedTopic}/>} />
     <Route path={ALL} element={<AllPhotosPage/>} />
     <Route path={REGISTER} element={<RegistrationPage/>} />
   </Routes>
   </BrowserRouter>
  )
}
