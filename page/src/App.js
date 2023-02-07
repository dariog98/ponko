import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import NewPostPage from './pages/NewPostPage'
import PostPage from './pages/PostPage'
import PostsPage from './pages/PostsPage'
import UserPage from './pages/UserPage'
import { UserProvider } from './providers/UserProvider'

function App() {
    return (
        <>
            <UserProvider>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/login" element={ <LoginPage/> }/>
                        <Route path="/" element={ <PostsPage/> }/>
                        <Route path="/:username/*" element={ <UserPage/> }/>
                        <Route path="/:username/posts/:id" element={ <PostPage/> }/>
                        <Route path="/blog/:id" element={ <div></div> }/>
                        <Route path="/post/new" element={ <NewPostPage/> }/>
                    </Routes>
                </Router>
            </UserProvider>
        </>
    )
}

export default App
