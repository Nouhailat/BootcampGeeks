import React from 'react';
// import ErrorBoundary from '.ErrorBoundary';
import ErrorBoundary from '../ErrorBoundary'

class ColumnRight extends React.Component {
  render() {
    return (
      <div className="column-right">
        {/* Other content */}
        
        <ErrorBoundary>
          <p className="text">
            {typeof this.props.text === 'string'
              ? this.props.text
              : JSON.stringify(this.props.text)}
          </p>
        </ErrorBoundary>

        {/* Other content */}
        <button onClick={this.props.handleReplaceStringWithObject}>
          Replace string with object
        </button>
        <button onClick={this.props.handleInvokeEventHandler}>
          Invoke event handler
        </button>
      </div>
    );
  }
}

export default ColumnRight;