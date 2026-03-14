import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const opportunities = [
  {
    id: 1,
    title: 'Beach Cleanup at Ocean Beach',
    org: 'Surfrider Foundation SF',
    date: 'Sat, Mar 21 · 9:00 AM',
    distance: '2.4 mi away',
    category: 'Environment',
    badge: 'Trending',
    badgeColor: 'bg-orange-100 text-orange-700',
    friendsInterested: 5,
    friendNames: 'Sarah, Mike & 3 others',
    icon: '🏖️',
    iconBg: 'bg-cyan-100',
  },
  {
    id: 2,
    title: 'After-School Tutoring Program',
    org: 'Boys & Girls Club of SF',
    date: 'Every Tue & Thu · 3:30 PM',
    distance: '1.1 mi away',
    category: 'Education',
    badge: 'Kid-Friendly',
    badgeColor: 'bg-purple-100 text-purple-700',
    friendsInterested: 3,
    friendNames: 'Priya, James & 1 other',
    icon: '📚',
    iconBg: 'bg-amber-100',
  },
  {
    id: 3,
    title: 'Community Garden Build Day',
    org: 'SF Urban Agriculture Alliance',
    date: 'Sun, Mar 29 · 10:00 AM',
    distance: '0.8 mi away',
    category: 'Community',
    badge: 'New',
    badgeColor: 'bg-green-100 text-green-700',
    friendsInterested: 8,
    friendNames: 'Anika, Leo & 6 others',
    icon: '🌱',
    iconBg: 'bg-green-100',
  },
  {
    id: 4,
    title: 'Meal Prep at Glide Memorial',
    org: 'Glide Foundation',
    date: 'Sat, Mar 22 · 7:00 AM',
    distance: '3.2 mi away',
    category: 'Health',
    badge: 'Urgent Need',
    badgeColor: 'bg-red-100 text-red-700',
    friendsInterested: 2,
    friendNames: 'David & 1 other',
    icon: '🍲',
    iconBg: 'bg-rose-100',
  },
]

const avatarColors = ['bg-fb-blue', 'bg-purple-500', 'bg-pink-500', 'bg-teal-500']

function SkeletonCard() {
  return (
    <div className="bg-fb-white rounded-xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl skeleton shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 skeleton rounded w-3/4" />
          <div className="h-3 skeleton rounded w-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <div className="h-3 skeleton rounded w-32" />
        <div className="h-3 skeleton rounded w-20" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full skeleton" />
            <div className="w-6 h-6 rounded-full skeleton" />
            <div className="w-6 h-6 rounded-full skeleton" />
          </div>
          <div className="h-3 skeleton rounded w-24" />
        </div>
        <div className="h-5 skeleton rounded-full w-16" />
      </div>
    </div>
  )
}

export default function Feed() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-4 pb-2 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-fb-dark">Discover</h1>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-fb-white shadow-sm active:scale-95 transition-transform">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 8h12M3 12h18M3 16h12M3 20h18" />
          </svg>
        </button>
      </div>

      {/* Cards */}
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        opportunities.map((opp) => (
          <div
            key={opp.id}
            onClick={() => navigate('/detail')}
            className="bg-fb-white rounded-xl p-4 shadow-sm active:scale-95 transition-transform cursor-pointer"
          >
            {/* Top row: icon + title + badge */}
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 rounded-xl ${opp.iconBg} flex items-center justify-center text-2xl shrink-0`}>
                {opp.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-fb-dark text-sm leading-tight">{opp.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{opp.org}</p>
              </div>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
                </svg>
                {opp.date}
              </span>
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {opp.distance}
              </span>
            </div>

            {/* Bottom row: social proof + badge */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {avatarColors.slice(0, Math.min(opp.friendsInterested, 3)).map((color, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-full ${color} border-2 border-white flex items-center justify-center`}
                    >
                      <span className="text-[9px] text-white font-bold">
                        {opp.friendNames.charAt(0)}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-400">{opp.friendNames} interested</span>
              </div>
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${opp.badgeColor}`}>
                {opp.badge}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
