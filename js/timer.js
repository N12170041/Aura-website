document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('dashboard-countdown');
    if (!countdownElement) return;

    function getSecondsUntilNextFiveAM() {
        const now = new Date();
        const target = new Date();

        target.setHours(5, 0, 0, 0);

        if (now >= target) {
        target.setDate(target.getDate() + 1);
        }

        return Math.floor((target - now) / 1000);
    }

    function updateCountdown() {
        const totalSeconds = getSecondsUntilNextFiveAM();

        if (totalSeconds <= 0) {
        countdownElement.innerHTML = "數據核心已於 <span>05:00:00</span> 自動銷毀，新週期已啟動。";
        return;
        }

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const formatTime = (num) => String(num).padStart(2, '0');

        countdownElement.innerHTML = `資料將於 <span>${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}</span> 後自動刪除`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});