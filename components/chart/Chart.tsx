
import Chart from 'react-apexcharts';
import './Chart.css'

const IncomeBarChart = ({graphData}:any) => {

  console.log('graphData',graphData)
  const chartOptions:any = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '35%',
        distributed: true, // 👈 This makes each bar use a different color
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `$${val.toLocaleString()}`,
      offsetY: -20,
      style: {
        fontSize: '11px',
        colors: ['#000'],
      },
    },
    xaxis: {
      categories: [
        'Minimum State Median Income',
        'Your Median Income',
        'Average State Median Income',
        'Maximum State Median Income',
      ],
      labels: {
        show: false,
        // style: {
        //   fontSize: '12px',
        //   display:'none'
        // },
      },
    },
    yaxis: {
      title: {
        text: 'Income ($)',
      },
      labels: {
        formatter: (val: number) => `$${val / 1000}k`,
      },
    },
    colors: ['#F4B400', '#0F9D58', '#4285F4', '#DB4437'],
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
  };

  const chartSeries = [
    {
      name: 'Median Income',
      data: [
        graphData?.minimum_median_income ?? 0,
        graphData?.your_median_income ?? 0,
        graphData?.average_state_median_income ?? 0,
        graphData?.maximum_median_income ?? 0,
      ],
    },
  ];

  return (
    <Chart options={chartOptions} series={chartSeries} type="bar" height={300} />
  );
};

export default IncomeBarChart;
