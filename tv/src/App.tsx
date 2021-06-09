import React, { Suspense } from 'react';
import './App.less';
import { TradingView } from './components/TradingView/TradingView';
const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <TradingView />
    </Suspense>
  );
};

export default App;
