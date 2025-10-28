$(function () {
    $('body').on('click', '.paper img', function (e) {
        e.preventDefault();

        const imgSrc = $(this).attr('data-full') || $(this).attr('src');

        // Create lightbox
        const $overlay = $(`
            <div class="lightbox-overlay" tabindex="-1">
                <div class="lightbox-wrap">
                    <img class="lightbox-img" src="${imgSrc}" alt="Full size photo">
                    <button class="lightbox-close" aria-label="Close">✕</button>
                </div>
            </div>
        `);

        $('body').append($overlay);
        $overlay.focus();

        $overlay.on('click', function (event) {
            if (event.target === this) closeLightbox();
        });

        $overlay.find('.lightbox-close').on('click', closeLightbox);

        $(document).on('keydown.lightbox', function (event) {
            if (event.key === 'Escape') closeLightbox();
        });

        function closeLightbox() {
            $overlay.fadeOut(200, function () {
                $(this).remove();
            });
            $(document).off('keydown.lightbox');
        }
    });
});


