import { Component } from 'react'

class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteColor: 'red',
      show: true
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' })
    }, 1000)
  }
  
  shouldComponentUpdate() {
    return true // Change to false to see the difference
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate')
    return null
  }
  
  componentDidUpdate() {
    console.log('after update')
  }
  
  changeColor = () => {
    this.setState({ favoriteColor: 'blue' })
  }
  
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.favoriteColor }}>
          My favorite color is {this.state.favoriteColor}
        </h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}

export default Color