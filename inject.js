// Prevent accidental navigation to a file in your file system when
// dragging and dropping onto a web page.
//
// Note: this will break pages that use ondrag/ondrop handlers instead of
// addEventListener calls
//

;(function() {
    const body = document.body;

    // unique, this should have a low probability of interfering with the pages
    // own stuff
    const id = '__dontdropme__';

    const overlay = document.createElement('div');
    overlay.id = id;
    overlay.style.border = '5px solid red';
    overlay.style.zIndex = '10000';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.bottom = 0;
    overlay.style.right = 0;
    overlay.style.pointerEvents = 'none';
    overlay.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255, 0, 0, .1), rgba(255, 0, 0, .1) 10px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0) 20px)';

    body.addEventListener('dragover', function(e) {
        // Don't activate on dragging and dropping of the sites own draggable
        // items and highlighted text
        if (e.dataTransfer.types.includes('Files') ||
            e.dataTransfer.types.includes('application/x-moz-file')) {
            // Don't do this! We want the site's own drag and drop to work still
            // e.stopPropagation();

            // Disable dropping
            e.dataTransfer.dropEffect = 'none';
            e.dataTransfer.effectAllowed = 'none';

            body.appendChild(overlay);

            // disable the browser from navigating to the file you drop
            // ↯ the whole point of this extension
            e.preventDefault();
        }
    });

    body.addEventListener('dragexit', removeOverlay);
    body.addEventListener('dragleave', removeOverlay);
    body.addEventListener('dragend', removeOverlay);

    function removeOverlay(e) {
        console.log(e.type);
        // remove overlay if set
        const el = document.getElementById(id);
        if (el) {
            body.removeChild(el);
        }
    }
})();
