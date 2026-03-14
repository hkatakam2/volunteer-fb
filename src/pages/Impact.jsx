import { useNavigate } from 'react-router-dom'

const stats = [
  { label: 'Hours', value: '12', icon: '⏱️' },
  { label: 'Bags Filled', value: '47', icon: '🗑️' },
  { label: 'Volunteers', value: '34', icon: '👥' },
]

export default function Impact() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full bg-fb-bg">
      {/* Celebratory header */}
      <div className="bg-gradient-to-b from-green-50 to-fb-bg pt-10 pb-6 text-center px-6">
        <div className="text-5xl mb-3">🎉</div>
        <h1 className="text-lg font-semibold text-fb-dark">Great job, Jane!</h1>
        <p className="text-sm text-gray-500 mt-1.5">You completed the Beach Cleanup at Ocean Beach</p>
        <p className="text-xs text-gray-400 mt-1">Saturday, March 21, 2026</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-4">
        {/* Stats row */}
        <div className="flex gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 bg-fb-white rounded-xl p-3 shadow-sm text-center"
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <p className="text-2xl font-bold text-fb-blue">{stat.value}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Photo placeholder */}
        <div className="bg-gray-100 rounded-xl h-40 flex flex-col items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={1.5} className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2-2H10L8 7H5a2 2 0 00-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
          <span className="text-sm text-gray-400 font-medium">Add photos</span>
        </div>

        {/* Social sharing section */}
        <div className="bg-fb-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-fb-dark mb-3">Share your impact</h3>
          <div className="flex gap-3">
            {[
              { label: 'Feed', icon: '📰', bg: 'bg-blue-50 text-fb-blue' },
              { label: 'Stories', icon: '📸', bg: 'bg-purple-50 text-purple-600' },
              { label: 'Message', icon: '💬', bg: 'bg-green-50 text-green-600' },
            ].map((platform) => (
              <button
                key={platform.label}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl ${platform.bg} transition-transform active:scale-95`}
              >
                <span className="text-xl">{platform.icon}</span>
                <span className="text-xs font-semibold">{platform.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Do it again CTA */}
        <button
          onClick={() => navigate('/feed')}
          className="w-full border-2 border-fb-blue text-fb-blue font-semibold py-3 rounded-xl text-sm active:scale-95 transition-transform"
        >
          Find your next opportunity
        </button>
      </div>
    </div>
  )
}
