import TodoList from './components/TodoList';
import Album from './components/Album';
import Post from './components/Post';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="TodoList" element={<TodoList />} />
        <Route path="Post" element={<Post />} />
        <Route path="Album" element={<Album />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
