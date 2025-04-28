import React from 'react';
import ColumnRight from './columns/ColumnRight';  // Add this import
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
       
        <ErrorBoundary>
          <ColumnRight
            text={this.state.text}
            handleReplaceStringWithObject={this.handleReplaceStringWithObject}
            handleInvokeEventHandler={this.handleInvokeEventHandler}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;