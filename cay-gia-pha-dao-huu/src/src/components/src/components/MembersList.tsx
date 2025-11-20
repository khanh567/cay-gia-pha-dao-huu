import { useFamilyStore } from '../store/familyStore'
import { Trash2 } from 'lucide-react'

export function MembersList() {
  const { members, deleteMember } = useFamilyStore()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {members.map(m => (
        <div key={m.id} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-2xl font-bold ${m.gender === 'Nam' ? 'text-blue-700' : 'text-pink-600'}`}>
                {m.name}
              </h3>
              <p className="text-gray-600 mt-2">{m.relation || 'Thành viên'}</p>
              {m.birth && <p className="text-sm text-gray-500 mt-3">Sinh: {new Date(m.birth).toLocaleDateString('vi-VN')}</p>}
            </div>
            <button onClick={() => deleteMember(m.id)} className="text-red-600 hover:text-red-800">
              <Trash2 size={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}