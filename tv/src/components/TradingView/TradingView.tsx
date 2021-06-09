import React, { useEffect, useState } from 'react';
import {WidgitConfig} from './chartConfig'
export const TradingView: React.FC = () => {
  const [widgets, setWidgets] = useState<any>(null);
  const [interval] = useState<string>(
    localStorage.getItem('tradingview.resolution') ?? '5'
  );

  useEffect(() => {
    const resolution = interval;
    const chartType = +(localStorage.getItem('tradingview.chartType') ?? '1')
    const skin = localStorage.getItem('tradingViewTheme') || 'white';
    const locale = 'zh';
    const Chart = new window.TradingView.widget(WidgitConfig())


    setWidgets(Chart)    
    return () => {
      console.log(1);
    };
  });
  return <div id="tv_chart_container"></div>;
};
