import ReactFlow, { Controls, Background, MiniMap } from 'reactflow'
import 'reactflow/dist/style.css'
import { useFamilyStore } from '../store/familyStore'

const TreeView = () => {
  const members = useFamilyStore(s => s.members)

  const nodes = members.map(m => ({
    id: m.id,
    data: { label: (
      <div className="text-center">
        <div className={`font-bold ${m.gender === 'Nam' ? 'text-blue-700' : 'text-pink-600'}`}>
          {m.name}
        </div>
        <div className="text-sm text-gray-600">{m.relation}</div>
      </div>
    )},
    position: { x: 250, y: 100 },
    style: { background: m.gender === 'Nam' ? '#dbeafe' : '#fce7f3', borderRadius: 12, padding: 16, border: '2px solid #06b6d4' },
  }))

  const edges = members.flatMap(m => [
    m.fatherId ? { id: `f${m.id}`, source: m.fatherId, target: m.id, style: { stroke: '#3b82f6' } } : [],
    m.motherId ? { id: `m${m.id}`, source: m.motherId, target: m.id, style: { stroke: '#ec4899', strokeDasharray: '5,5' } } : [],
  ]).flat()

  return (
    <div className="h-screen bg-white rounded-3xl shadow-2xl overflow-hidden">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export { TreeView }