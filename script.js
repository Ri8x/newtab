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

    function updateClock() {
        const now = new Date();
        timeElement.textContent = timeFormatter.format(now);
        dateElement.textContent = dateFormatter.format(now);
        clockElement.dateTime = now.toISOString();
    }

    updateClock();

    window.setTimeout(() => {
        updateClock();
        window.setInterval(updateClock, 60000);
    }, 60000 - (Date.now() % 60000));
});
