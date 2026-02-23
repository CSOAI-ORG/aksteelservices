const OpenClosedBadge = () => {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon...6=Sat
  const hours = now.getHours();
  const mins = now.getMinutes();
  const time = hours + mins / 60;

  let isOpen = false;
  if (day >= 1 && day <= 5) {
    // Mon-Fri: 7:30-17:00
    isOpen = time >= 7.5 && time < 17;
  } else if (day === 6) {
    // Sat: 7:00-13:00
    isOpen = time >= 7 && time < 13;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
      isOpen 
        ? "bg-green-500/20 text-green-400" 
        : "bg-red-500/20 text-red-400"
    }`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
      {isOpen ? "Open Now" : "Currently Closed"}
    </span>
  );
};

export default OpenClosedBadge;
