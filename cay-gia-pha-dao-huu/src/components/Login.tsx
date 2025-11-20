import { useState } from 'react'
import { useFamilyStore } from '../store/familyStore'
import { TreePine } from 'lucide-react'

export function Login() {
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const login = useFamilyStore(s => s.login)

  const handle = () => {
    if (login(pass)) setError('')
    else setError('Sai mật khẩu rồi ạ! Gợi ý: dao2025')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center p-6">
      <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
        <TreePine size={100} className="mx-auto text-cyan-600 mb-8" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Gia Phả Họ Đào Hữu</h1>
        <p className="text-xl text-gray-600 mb-10">Đào Hữu Tý ♡ Trần Thị Hường</p>
        
        <input
          type="password"
          placeholder="Nhập mật khẩu gia đình..."
          value={pass}
          onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handle()}
          className="w-full px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-cyan-500 outline-none text-lg mb-4"
        />
        {error && <p className="text-red-600 font-medium mb-4">{error}</p>}
        
        <button
          onClick={handle}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-5 rounded-2xl font-bold text-xl hover:from-cyan-700 hover:to-blue-700 transition"
        >
          Vào Xem Gia Phả
        </button>

        <p className="text-gray-500 mt-8">Mật khẩu: <span className="font-bold text-cyan-600">dao2025</span></p>
      </div>
    </div>
  )
}