import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export default function AnalyticsProgressChart() {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: 'Profit',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        color: '#556DF5',
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  return (
    <ApexCharts
      options={chartOptions}
      series={chartOptions.series}
      type="line"
    // height={350}
    />
  )
}

