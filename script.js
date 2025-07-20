document.addEventListener('keydown', function (event) {
    // Get the pressed key as a lowercase character
    const key = event.key.toLowerCase();

    // Define a mapping of keys to page URLs
    const pageMappings = {
        'a': 'index.html',
        'b': 'index2.html',
        'c': 'index3.html',
        'd': 'index4.html',
        'e': 'index5.html'
    };

    // Check if the pressed key has a corresponding page URL
    if (pageMappings[key]) {
        // Get the URL of the corresponding page
        const pageUrl = pageMappings[key];
        
        window.open(pageUrl,'_self');
    }
});
