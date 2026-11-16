let filterButtons = document.querySelectorAll('.filter-btn');
let items = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(function(button) {

    button.addEventListener('click', function() {

        let filter = button.getAttribute('data-filter');

        items.forEach(function(item) {

            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }

        });

    });

});