const labels = ['1 año', '2 años'];
const datos = [24000, 27000];
const colores = [
    'rgba(255, 99, 132)',
    'rgba(255, 159, 64)',
    'rgba(255, 205, 86)',
    'rgba(75, 192, 192)',
    'rgba(54, 162, 235)',
    'rgba(153, 102, 255)',
    'rgba(201, 203, 207)'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Mis Inversiones',
        data: datos,
        backgroundColor: colores,
        borderColor: colores,
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    plugins: [ChartDataLabels],
    options: {
        plugins: {
            legend: {
                display: false
            },
            dataLabels: {
                anchor: 'end',
                clamp: true,
                align: 'top',
                offset: 0,
                formatter: function(value, context) {
                    return '$' + new Intl.NumberFormat('es-MX').format(context.dataset.data[context.dataIndex]);
                }
            }
        }
    },
};

const ctx = document.querySelector('.grafica');
const graficaInvest = new Chart(ctx, config);
