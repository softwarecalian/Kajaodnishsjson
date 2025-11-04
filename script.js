document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentPage = 0;
    const totalPages = pages.length;

    function updateBook() {
        pages.forEach((page, i) => {
            if (i < currentPage) {
                page.classList.add('flipped');
            } else {
                page.classList.remove('flipped');
            }
        });
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
    }

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
            updateBook();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].classList.remove('flipped');
            updateBook();
        }
    });

    updateBook();
});