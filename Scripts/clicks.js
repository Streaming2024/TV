document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.yono-tv.com';
});

document.addEventListener('keydown', function(event) {
    // List of key combinations to prevent
    const blockedKeys = [
        { key: 'a', ctrl: true },  // Select all (Ctrl+A / Command+A)
        { key: 'c', ctrl: true },  // Copy (Ctrl+C / Command+C)
        { key: 'x', ctrl: true },  // Cut (Ctrl+X / Command+X)
        { key: 'u', ctrl: true },  // View source (Ctrl+U / Command+U)
        { key: 's', ctrl: true },  // Save (Ctrl+S / Command+S)
        { key: 'p', ctrl: true },  // Print (Ctrl+P / Command+P)
        { key: 'i', ctrl: true, shift: true },  // DevTools (Ctrl+Shift+I / Command+Option+I)
        { key: 'j', ctrl: true, shift: true },  // DevTools (Ctrl+Shift+J / Command+Option+J)
        { key: 'k', ctrl: true, shift: true },  // DevTools (Ctrl+Shift+K for Firefox)
        { key: 'c', ctrl: true, shift: true }   // DevTools console (Ctrl+Shift+C)
    ];

    for (const combo of blockedKeys) {
        if (event.key.toLowerCase() === combo.key.toLowerCase() && 
            (combo.ctrl && (event.ctrlKey || event.metaKey)) && 
            (!combo.shift || event.shiftKey)) {
            event.preventDefault();
            window.location.href = 'https://www.yono-tv.com';
            return;
        }
    }

    // Block F12 (DevTools)
    if (event.key === 'F12') {
        event.preventDefault();
        window.location.href = 'https://www.yono-tv.com';
    }
});
