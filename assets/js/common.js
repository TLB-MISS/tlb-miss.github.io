$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');

    $('[data-publication-filter]').each(function() {
        const container = $(this);
        const buttons = container.find('[data-publication-filter-button]');
        const items = container.find('ol.bibliography > li');

        function setPublicationFilter(filter) {
            buttons.each(function() {
                const button = $(this);
                const isActive = button.data('publication-filter-button') === filter;
                button.toggleClass('active', isActive);
                button.attr('aria-selected', isActive ? 'true' : 'false');
            });

            items.each(function() {
                const item = $(this);
                const isFirstAuthor = item.find('.publication-entry').data('first-author') === true;
                item.prop('hidden', filter === 'first' && !isFirstAuthor);
            });
        }

        buttons.click(function() {
            setPublicationFilter($(this).data('publication-filter-button'));
        });

        setPublicationFilter('all');
    });
});
