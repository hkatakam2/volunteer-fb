export default function PhoneFrame({ children }) {
  return (
    <div className="relative w-[375px] h-[812px] bg-fb-bg rounded-[40px] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] border-[3px] border-gray-700">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-[30px] z-40 flex items-center justify-between px-8 pt-1">
        <span className="text-[12px] font-semibold text-fb-dark">9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal */}
          <svg viewBox="0 0 18 12" className="w-[18px] h-[12px]" fill="#1C1E21">
            <rect x="0" y="8" width="3" height="4" rx="0.5" />
            <rect x="5" y="5" width="3" height="7" rx="0.5" />
            <rect x="10" y="2" width="3" height="10" rx="0.5" />
            <rect x="15" y="0" width="3" height="12" rx="0.5" />
          </svg>
          {/* WiFi */}
          <svg viewBox="0 0 16 12" className="w-[16px] h-[12px]" fill="#1C1E21">
            <path d="M8 9.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM4.4 7.2a5.09 5.09 0 017.2 0l-.96.96a3.72 3.72 0 00-5.28 0L4.4 7.2zM1.6 4.4a8.47 8.47 0 0112.8 0l-.96.96a7.1 7.1 0 00-10.88 0L1.6 4.4z" />
          </svg>
          {/* Battery */}
          <svg viewBox="0 0 28 13" className="w-[28px] h-[13px]">
            <rect x="0" y="0.5" width="23" height="12" rx="2.5" stroke="#1C1E21" strokeWidth="1" fill="none" />
            <rect x="24.5" y="4" width="2.5" height="5" rx="1" fill="#1C1E21" opacity="0.4" />
            <rect x="1.5" y="2" width="20" height="9" rx="1.5" fill="#1C1E21" />
          </svg>
        </div>
      </div>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-2xl z-50" />
      {/* Screen content */}
      <div className="h-full pt-[30px]">
        {children}
      </div>
    </div>
  )
}
