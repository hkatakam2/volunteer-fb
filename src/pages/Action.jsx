import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const friends = [
  { name: 'Sarah Chen', avatar: 'SC', color: 'bg-purple-500', going: true },
  { name: 'Mike Rivera', avatar: 'MR', color: 'bg-fb-blue', going: true },
  { name: 'Priya Sharma', avatar: 'PS', color: 'bg-pink-500', going: false },
  { name: 'Anika Patel', avatar: 'AP', color: 'bg-teal-500', going: false },
]

export default function Action() {
  const navigate = useNavigate()
  const [guests, setGuests] = useState('1')
  const [note, setNote] = useState('')
  const [invitedFriends, setInvitedFriends] = useState([])
  const [confirmed, setConfirmed] = useState(false)

  const toggleFriend = (name) => {
    setInvitedFriends((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  if (confirmed) {
    return (
      <div className="flex flex-col h-full">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 z-40"
          onClick={() => navigate('/detail')}
        />
        {/* Bottom sheet */}
        <div className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl p-6 text-center animate-slide-up">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={2} className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-fb-dark">You're signed up!</h2>
          <p className="text-sm text-gray-500 mt-2">
            Beach Cleanup at Ocean Beach — Sat, Mar 21 at 9:00 AM
          </p>
          <p className="text-sm text-gray-500 mt-1">
            We've sent a confirmation to your email.
          </p>
          <button
            onClick={() => navigate('/feed')}
            className="w-full bg-fb-blue text-white font-semibold py-3 rounded-xl mt-6 active:scale-95 transition-transform"
          >
            Back to Feed
          </button>
          <button
            onClick={() => navigate('/detail')}
            className="w-full text-gray-500 text-sm font-medium py-2 mt-2"
          >
            View Event Details
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 z-40"
        onClick={() => navigate('/detail')}
      />

      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl max-h-[85%] flex flex-col">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-6">
          <h2 className="text-lg font-semibold text-fb-dark mt-2">Sign Up to Volunteer</h2>
          <p className="text-sm text-gray-500 mt-1">Beach Cleanup at Ocean Beach · Sat, Mar 21</p>

          {/* Number of guests */}
          <div className="mt-5">
            <label className="text-sm font-semibold text-fb-dark block mb-2">Number of Guests</label>
            <div className="flex gap-2">
              {['1', '2', '3', '4+'].map((val) => (
                <button
                  key={val}
                  onClick={() => setGuests(val)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-transform active:scale-95 ${
                    guests === val
                      ? 'bg-blue-50 border-fb-blue text-fb-blue'
                      : 'bg-white border-gray-200 text-gray-600'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Invite friends */}
          <div className="mt-5">
            <label className="text-sm font-semibold text-fb-dark block mb-2">Invite Friends</label>
            <div className="space-y-2">
              {friends.map((friend) => (
                <button
                  key={friend.name}
                  onClick={() => toggleFriend(friend.name)}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-xl border transition-transform active:scale-95 ${
                    invitedFriends.includes(friend.name)
                      ? 'bg-blue-50 border-fb-blue'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full ${friend.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {friend.avatar}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-fb-dark">{friend.name}</p>
                    {friend.going && (
                      <p className="text-xs text-green-600">Already going</p>
                    )}
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    invitedFriends.includes(friend.name)
                      ? 'border-fb-blue bg-fb-blue'
                      : 'border-gray-300'
                  }`}>
                    {invitedFriends.includes(friend.name) && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-5">
            <label className="text-sm font-semibold text-fb-dark block mb-2">Note to Organizer (optional)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Any dietary restrictions, accessibility needs, etc."
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:border-fb-blue"
            />
          </div>

          {/* Buttons */}
          <button
            onClick={() => setConfirmed(true)}
            className="w-full bg-fb-blue text-white font-semibold py-3 rounded-xl mt-5 text-sm active:scale-95 transition-transform"
          >
            Confirm Sign Up
          </button>
          <button
            onClick={() => navigate('/detail')}
            className="w-full text-gray-500 text-sm font-medium py-3 mt-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
