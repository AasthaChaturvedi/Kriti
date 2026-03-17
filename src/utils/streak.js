export const updateStreak = () => {
  const today = new Date().toDateString();

  const streakData = JSON.parse(localStorage.getItem("streak")) || {
    count: 0,
    lastDate: null
  };

  const lastDate = streakData.lastDate;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  if (lastDate === today) {
    return streakData;
  }

  if (lastDate === yesterdayStr) {
    streakData.count += 1;
  } else {
    streakData.count = 1;
  }

  streakData.lastDate = today;

  localStorage.setItem("streak", JSON.stringify(streakData));

  return streakData;
};