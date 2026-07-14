document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const timeElement = document.getElementById('clock-time');
    const dateElement = document.getElementById('clock-date');

    if (!clockElement || !timeElement || !dateElement) return;

    const locale = navigator.language || undefined;
    const timeFormatter = new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: '2-digit',
    });
    const dateFormatter = new Intl.DateTimeFormat(locale, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    });

    let lastTime = '';
    let lastDate = '';

    function updateClock() {
        const now = new Date();
        const time = timeFormatter.format(now);
        const date = dateFormatter.format(now);
        let changed = false;

        if (time !== lastTime) {
            timeElement.textContent = time;
            lastTime = time;
            changed = true;
        }

        if (date !== lastDate) {
            dateElement.textContent = date;
            lastDate = date;
            changed = true;
        }

        if (changed) {
            clockElement.dateTime = now.toISOString();
        }
    }

    updateClock();
    window.setInterval(updateClock, 1000);
    document.addEventListener('visibilitychange', updateClock);
    window.addEventListener('focus', updateClock);
});
