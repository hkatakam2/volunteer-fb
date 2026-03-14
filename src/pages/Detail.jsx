import { useNavigate } from 'react-router-dom'

const opportunity = {
  title: 'Beach Cleanup at Ocean Beach',
  org: 'Surfrider Foundation SF',
  orgAvatar: 'SF',
  date: 'Saturday, March 21, 2026 · 9:00 AM – 12:00 PM',
  location: 'Ocean Beach, Parking Lot at Balboa St, San Francisco',
  spotsLeft: 12,
  duration: '3 hours',
  description:
    'Join us for a morning beach cleanup along the beautiful Ocean Beach shoreline. We\'ll provide gloves, bags, and grabbers — just bring yourself and a reusable water bottle. This is a great opportunity for families, students, and anyone who wants to make a tangible difference in keeping our coastline clean.',
  trustSignals: [
    { icon: 'shield', text: 'Background check required' },
    { icon: 'star', text: '4.8 stars (23 reviews)' },
    { icon: 'badge', text: 'Verified nonprofit' },
  ],
}

export default function Detail() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {/* Hero image */}
        <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-end">
          {/* Back arrow */}
          <button
            onClick={() => navigate('/feed')}
            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center active:scale-95 transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="p-5">
            <p className="text-white/80 text-sm font-medium">Environment</p>
            <h1 className="text-white text-lg font-semibold leading-tight">{opportunity.title}</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-5">
          {/* Organizer */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-fb-blue flex items-center justify-center text-white text-sm font-bold">
              {opportunity.orgAvatar}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-fb-dark text-sm">{opportunity.org}</span>
                <svg viewBox="0 0 20 20" fill="#1877F2" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500">Verified organizer</p>
            </div>
          </div>

          {/* Key Details */}
          <div className="bg-fb-white rounded-xl p-4 shadow-sm space-y-3">
            <h2 className="text-sm font-bold text-fb-dark uppercase tracking-wide">Key Details</h2>

            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={1.5} className="w-5 h-5 mt-0.5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
              </svg>
              <span className="text-sm text-gray-700">{opportunity.date}</span>
            </div>

            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={1.5} className="w-5 h-5 mt-0.5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-700">{opportunity.location}</span>
            </div>

            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={1.5} className="w-5 h-5 mt-0.5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-700">{opportunity.spotsLeft} spots left</span>
            </div>

            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={1.5} className="w-5 h-5 mt-0.5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-700">{opportunity.duration}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-sm font-bold text-fb-dark uppercase tracking-wide mb-2">About This Event</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{opportunity.description}</p>
          </div>

          {/* Trust & Safety */}
          <div className="bg-green-50 rounded-xl p-4 space-y-2.5">
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-wide">Trust & Safety</h2>
            {opportunity.trustSignals.map((signal) => (
              <div key={signal.text} className="flex items-center gap-2.5">
                {signal.icon === 'shield' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth={1.5} className="w-4.5 h-4.5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {signal.icon === 'star' && (
                  <svg viewBox="0 0 24 24" fill="#15803d" className="w-4.5 h-4.5 shrink-0">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
                {signal.icon === 'badge' && (
                  <svg viewBox="0 0 20 20" fill="#15803d" className="w-4.5 h-4.5 shrink-0">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="text-sm text-green-800">{signal.text}</span>
              </div>
            ))}
          </div>

          {/* Spacer for sticky bar */}
          <div className="h-20" />
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 pb-6">
        <button
          onClick={() => navigate('/action')}
          className="w-full bg-fb-blue text-white font-semibold py-3 rounded-xl text-sm active:scale-95 transition-transform cursor-pointer"
        >
          Sign Up to Volunteer
        </button>
      </div>
    </div>
  )
}
