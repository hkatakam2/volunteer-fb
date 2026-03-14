import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame'
import BottomNav from './components/BottomNav'
import Feed from './pages/Feed'
import Detail from './pages/Detail'
import Action from './pages/Action'
import Chat from './pages/Chat'
import Impact from './pages/Impact'

export default function App() {
  const location = useLocation()
  const hideNav = ['/detail', '/action', '/chat', '/impact'].includes(location.pathname)

  return (
    <PhoneFrame>
      <div className="flex flex-col h-full relative">
        <div className="flex-1 overflow-y-auto">
          <div key={location.pathname} className="page-transition h-full">
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/feed" replace />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/action" element={<Action />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/impact" element={<Impact />} />
            </Routes>
          </div>
        </div>
        {!hideNav && <BottomNav />}
      </div>
    </PhoneFrame>
  )
}
