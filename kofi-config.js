/**
 * ==============================================================================
 * Ko-fi Floating Chat Widget Configuration & Loader
 * ==============================================================================
 * Configure your Ko-fi username below without editing core application logic!
 */
const KOFI_CONFIG = {
    // Your Ko-fi username / handle:
    username: 'dansalcedo',
    text: 'Support me',
    backgroundColor: '#00b9fe',
    textColor: '#ffffff'
};

/**
 * Initializes the Ko-fi Floating Chat widget strictly for desktop devices.
 */
(function initKofiOverlay() {
    // Strictly desktop only - ignore mobile/tablet screens (<= 860px)
    if (window.innerWidth <= 860) return;

    let isMounted = false;

    function renderWidget() {
        if (isMounted) return;
        if (typeof kofiWidgetOverlay !== 'undefined') {
            try {
                kofiWidgetOverlay.draw(KOFI_CONFIG.username, {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': KOFI_CONFIG.text,
                    'floating-chat.donateButton.background-color': KOFI_CONFIG.backgroundColor,
                    'floating-chat.donateButton.text-color': KOFI_CONFIG.textColor
                });
                isMounted = true;
            } catch (err) {
                console.warn('Ko-fi widget initialization warning:', err);
            }
        }
    }

    if (typeof kofiWidgetOverlay !== 'undefined') {
        renderWidget();
    } else {
        window.addEventListener('load', () => {
            if (window.innerWidth > 860) {
                renderWidget();
            }
        });
        setTimeout(() => {
            if (window.innerWidth > 860) {
                renderWidget();
            }
        }, 1200);
    }

    // Mount dynamically if browser window expands from mobile to desktop
    window.addEventListener('resize', () => {
        if (!isMounted && window.innerWidth > 860) {
            renderWidget();
        }
    });
})();
