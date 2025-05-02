import React from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Example1 />
        <Example2 />
        <Example3 />
      </ErrorBoundary>
    </div>
  );
}

export default App;
