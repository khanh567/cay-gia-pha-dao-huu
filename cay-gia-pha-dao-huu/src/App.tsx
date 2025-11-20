import { useState } from 'react'
import { Login } from './components/Login'
import { TreeView } from './components/TreeView'
import { MembersList } from './components/MembersList'
import { useFamilyStore } from './store/familyStore'
import { TreePine, Users, LogOut } from 'lucide-react'

export default function App() {
  const { isAuthenticated, logout } = useFamilyStore()
  const [tab, setTab] = useState<'tree' | 'members'>('tree')

  if (!isAuthenticated) return <Login />

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <TreePine size={56} />
            <div>
              <h1 className="text-5xl font-black">GIA PHẢ HỌ ĐÀO HỮU</h1>
              <p className="text-2xl mt-1">Đào Hữu Tý ♡ Trần Thị Hường</p>
            </div>
          </div>
          <button onClick={logout} className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-7 py-4 rounded-2xl font-bold">
            <LogOut size={26} /> Đăng xuất
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-12 px-6">
        <div className="flex gap-4 bg-white/80 backdrop-blur rounded-3xl p-3 shadow-xl">
          <button onClick={() => setTab('tree')} className={`flex-1 py-5 rounded-2xl font-bold text-xl transition ${tab === 'tree' ? 'bg-cyan-600 text-white' : 'text-gray-700'}`}>
            Cây Gia Phả
          </button>
          <button onClick={() => setTab('members')} className={`flex-1 py-5 rounded-2xl font-bold text-xl transition ${tab === 'members' ? 'bg-cyan-600 text-white' : 'text-gray-700'}`}>
            Thành Viên
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 px-6">
        {tab === 'tree' && <TreeView />}
        {tab === 'members' && <MembersList />}
      </div>
    </div>
  )
}