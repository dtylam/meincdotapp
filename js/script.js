// Simple system theme detection for fullscreen coming soon page
document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    // Detect system theme preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
}); 