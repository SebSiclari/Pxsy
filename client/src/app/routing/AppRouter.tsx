import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HOME, LISTS} from './routes'
import { HomeScreen } from '../../components/HomePage/HomeScreen';
import { PhotoListPage } from '../../components/photolistpage/PhotoListPage';

export const AppRouter = () => {

  const [selectedTopic, setSelectedTopic] = React.useState("")
  return (
   <BrowserRouter>
   <Routes>
     <Route path={HOME} element={<HomeScreen setSelectedTopic={setSelectedTopic}/>} />
     <Route path={LISTS} element={<PhotoListPage selectedTopic={selectedTopic}/>} />
   </Routes>
   </BrowserRouter>
  )
}
