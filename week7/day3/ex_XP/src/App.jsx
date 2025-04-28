import BuggyCounter from './Components/BuggyCounter'
import Color from './Components/Color'
import ColorWithChild from './Components/ColorWithChild'
import ErrorBoundary from './Components/ErrorBoundary'

function App() {
  return (
    <div>
      <h1>Simulation 1</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 2</h1>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>

      <h1>Simulation 3</h1>
      <BuggyCounter />
      <h1>Lifecycle Methods</h1>
      <Color />
      
      <h1>Unmounting Example</h1>
      <ColorWithChild />
    </div>
  )
}

export default App