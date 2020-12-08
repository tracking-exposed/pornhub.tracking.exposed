function renderHomepageDonut() {
    var chart = c3.generate({
        bindto: '#homepage--stats',
        data: {
            columns: [
                ['Production Company', 19],
                ['Verified Amateurs', 19],
                ['Non verified producers', 13]
            ],
            type : 'donut',
        },
        donut: {
            title: "PornHub homepage"
        }
    });
}