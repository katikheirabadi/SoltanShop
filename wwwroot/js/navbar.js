document.querySelectorAll('.main-categories .cat-item').forEach(item => {
    item.addEventListener('mouseenter', function () {

        // remove active from all
        document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.sub-box').forEach(i => i.classList.remove('active'));

        // add active to current
        this.classList.add('active');
        document.getElementById(this.dataset.target).classList.add('active');
    });
});