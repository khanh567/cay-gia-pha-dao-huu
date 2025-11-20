import { useFamilyStore } from '../store/familyStore'
import { Trash2 } from 'lucide-react'

export function MembersList() {
  const { members, deleteMember } = useFamilyStore()

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Danh Sách Thành Viên</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map(m => (
          <div key={m.id} className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-xl p-8 border-2 border-cyan-200 hover:shadow-2xl transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-3xl font-bold ${m.gender === 'Nam' ? 'text-blue-700' : 'text-pink-600'}`}>
                  {m.name}
                </h3>
                <p className="text-xl text-gray-700 mt-2">{m.relation || 'Thành viên'}</p>
              </div>
              <button onClick={() => deleteMember(m.id)} className="text-red-600 hover:text-red-800">
                <Trash2 size={28} />
              </button>
            </div>
            {m.birth && <p className="text-gray-600">Sinh: {new Date(m.birth).toLocaleDateString('vi-VN')}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}