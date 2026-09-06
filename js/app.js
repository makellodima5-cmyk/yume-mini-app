// YUME App Logic
document.addEventListener('DOMContentLoaded', function() {
    console.log('YUME Mini App loaded');
    
    // Random anime button
    const randomBtn = document.querySelector('.random-btn');
    if (randomBtn) {
        randomBtn.addEventListener('click', function() {
            // В будущем: запрос к БД за случайным аниме
            alert('Открываем случайное аниме...');
        });
    }
    
    // Notification button
    const notifBtn = document.querySelector('.notification-btn');
    if (notifBtn) {
        notifBtn.addEventListener('click', function() {
            alert('Уведомления (в разработке)');
        });
    }
});
