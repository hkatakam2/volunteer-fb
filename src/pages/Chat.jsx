import { useNavigate } from 'react-router-dom'

const members = [
  { name: 'Sarah C.', avatar: 'SC', color: 'bg-purple-500' },
  { name: 'Mike R.', avatar: 'MR', color: 'bg-fb-blue' },
  { name: 'Priya S.', avatar: 'PS', color: 'bg-pink-500' },
  { name: 'You', avatar: 'JD', color: 'bg-teal-500' },
]

const messages = [
  {
    id: 1,
    sender: 'Sarah C.',
    avatar: 'SC',
    color: 'bg-purple-500',
    text: 'Hey everyone! So excited for the beach cleanup Saturday 🏖️ Should we carpool?',
    time: '10:14 AM',
  },
  {
    id: 2,
    sender: 'Mike R.',
    avatar: 'MR',
    color: 'bg-fb-blue',
    text: "I can drive! I've got room for 3 more. Picking up from Mission District around 8:15.",
    time: '10:18 AM',
  },
  {
    id: 3,
    sender: 'Priya S.',
    avatar: 'PS',
    color: 'bg-pink-500',
    text: "Count me in for the carpool 🙋‍♀️ Does anyone know if we need to bring our own gloves?",
    time: '10:22 AM',
  },
  {
    id: 4,
    sender: 'AI Assistant',
    isAI: true,
    text: "Great question, Priya! According to the event details, Surfrider Foundation will provide gloves, trash bags, and grabbers. You just need to bring a reusable water bottle and wear sunscreen. They also recommend closed-toe shoes since you'll be walking on rocky areas near the tide pools.",
    time: '10:22 AM',
  },
  {
    id: 5,
    sender: 'Sarah C.',
    avatar: 'SC',
    color: 'bg-purple-500',
    text: 'Perfect — also found this parking guide for Ocean Beach:',
    time: '10:25 AM',
    link: {
      title: 'Ocean Beach Parking & Access Guide',
      description: 'Free lot at Balboa St entrance. Street parking available on Great Highway.',
      image: '🗺️',
    },
  },
]

export default function Chat() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full bg-fb-bg">
      {/* Header */}
      <div className="bg-fb-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/feed')}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-fb-dark text-sm">Beach Cleanup Crew</p>
            <p className="text-xs text-gray-500">4 members</p>
          </div>
          <div className="flex -space-x-2">
            {members.map((m) => (
              <div
                key={m.name}
                className={`w-7 h-7 rounded-full ${m.color} border-2 border-white flex items-center justify-center`}
              >
                <span className="text-[8px] text-white font-bold">{m.avatar}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-2.5">
            {/* Avatar */}
            {msg.isAI ? (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-blue-500 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M12 2l2.09 4.26L18.18 7l-3 2.94.71 4.15L12 12l-3.89 2.09.71-4.15L5.82 7l4.09-.74L12 2z" />
                </svg>
              </div>
            ) : (
              <div className={`w-8 h-8 rounded-full ${msg.color} flex items-center justify-center shrink-0`}>
                <span className="text-[9px] text-white font-bold">{msg.avatar}</span>
              </div>
            )}

            {/* Bubble */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className={`text-xs font-semibold ${msg.isAI ? 'text-violet-600' : 'text-fb-dark'}`}>
                  {msg.sender}
                </span>
                {msg.isAI && (
                  <span className="text-[10px] font-medium text-violet-500 bg-violet-50 px-1.5 py-0.5 rounded-full">AI</span>
                )}
                <span className="text-[10px] text-gray-400">{msg.time}</span>
              </div>
              <div
                className={`mt-1 px-3 py-2 rounded-2xl rounded-tl-sm text-sm leading-relaxed ${
                  msg.isAI
                    ? 'bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-100 text-gray-700'
                    : 'bg-fb-white text-gray-700'
                }`}
              >
                {msg.text}

                {/* Link preview card */}
                {msg.link && (
                  <div className="mt-2 border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                    <div className="h-20 bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center text-3xl">
                      {msg.link.image}
                    </div>
                    <div className="px-3 py-2">
                      <p className="text-xs font-semibold text-fb-dark">{msg.link.title}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{msg.link.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-fb-white border-t border-gray-200 px-4 py-3 pb-6">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 flex items-center">
            <span className="text-sm text-gray-400">Type a message…</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-fb-blue flex items-center justify-center shrink-0 active:scale-95 transition-transform">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
