import ReactFlow, { Controls, Background, MiniMap } from 'reactflow'
import 'reactflow/dist/style.css'
import { useFamilyStore } from '../store/familyStore'

const TreeView = () => {
  const members = useFamilyStore(s => s.members)

  const nodes = members.map((m, i) => ({
    id: m.id,
    position: { x: i * 300, y: 100 },
    data: { label: (
      <div className="text-center p-4">
        <div className={`font-bold text-lg ${m.gender === 'Nam' ? 'text-blue-700' : 'text-pink-600'}`}>
          {m.name}
        </div>
        <div className="text-sm text-gray-600">{m.relation || ''}</div>
        {m.birth && <div className="text-xs text-gray-500">{new Date(m.birth).getFullYear()}</div>}
      </div>
    )},
    style: {
      background: m.gender === 'Nam' ? '#dbeafe' : '#fce7f3',
      border: '3px solid',
      borderColor: m.gender === 'Nam' ? '#3b82f6' : '#ec4899',
      borderRadius: 16,
      padding: 10,
      width: 200,
    },
  }))

  const edges = members.flatMap(m => [
    m.fatherId ? { id: `f-${m.id}`, source: m.fatherId, target: m.id, style: { stroke: '#3b82f6', strokeWidth: 3 } } : [],
    m.motherId ? { id: `m-${m.id}`, source: m.motherId, target: m.id, style: { stroke: '#ec4899', strokeWidth: 3, strokeDasharray: '8,5' } } : []
  ]).filter(Boolean)

  return (
    <div className="h-screen bg-white rounded-3xl shadow-2xl overflow-hidden">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background color="#e0e7ff" gap={20} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export { TreeView }