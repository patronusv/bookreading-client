import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { useWindowWidth } from '@react-hook/window-size';
import { DateTime } from 'luxon'
import ChartStyled from './ChartStyled';

const training = {
    totalPages: 400,
    startDate: '2021-04-22',
    finishDate: '2021-04-28',
    progress: [
      {
        name: '2021-04-22',        
        pagesRead: 40,
      },
      {
        name: '2021-04-23',
        pagesRead: 60,
      },
      {
        name: '2021-04-24',
        pagesRead: 90,
      },
      {
        name: '2021-04-25',
        pagesRead: 20,
      },
      {
        name: '2021-04-26',
        pagesRead: 40,
      },
      {
        name: '2021-04-27',
        pagesRead: 70,
      },
      {
        name: '2021-04-28',
        pagesRead: 80,
      },
    ]
}


const Chart = () => {
  const onlyWidth = useWindowWidth();
  const start = DateTime.fromISO(training.startDate);
  const finish = DateTime.fromISO(training.finishDate);
  const duration = finish.diff(start, 'days').toObject()?.days + 1;
  const average = Math.ceil(training.totalPages/duration);
  const data = training.progress.map((el, idx) => {
    return {
    name: el.name,
    pagesTotal: Math.min(((idx + 1) * average), training.totalPages),
    pagesRead: training.progress.reduce((acc, value, index) => acc + (index < idx + 1 ? value.pagesRead : 0), 0),
    }
  })
  

  const config = {};
  switch (true) {
    case onlyWidth >= 1280:
      config.width = 800;
      config.height = 250;
      break;
    case onlyWidth >= 768:
      config.width = 610;
      config.height = 250;      
      break;
    default:
      config.width = 227;
      config.height = 210;     
      break;
  }
  return (
    <ChartStyled>
      <p className="pagesAverage">
        Кількість сторінок / день <span className="pagesAverage-amount">{average}</span>
      </p>
      <LineChart
        width={config.width}
        height={config.height}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -53,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0" horizontal={false} stroke="#B1B5C2" />
        <XAxis dataKey="name" tickLine={false} tick={<></>}>
          <Label value="ЧАС" offset={0} position="insideBottomRight" />
        </XAxis>
        <YAxis tickLine={false} tick={false} />
        <Tooltip />
        <Legend align="right" verticalAlign="middle" iconSize={0} />
        <Line type="monotone" dataKey="pagesRead" name="Факт" stroke="#FF6B08" strokeWidth={2} activeDot={{ r: 8 }} dot={{ strokeWidth: 6 }} />
        <Line type="monotone" dataKey="pagesTotal" name="План" stroke="#091E3F" strokeWidth={2} activeDot={{ r: 8 }} dot={{ strokeWidth: 6 }} />
      </LineChart>
    </ChartStyled>
  );
};

export default Chart;
