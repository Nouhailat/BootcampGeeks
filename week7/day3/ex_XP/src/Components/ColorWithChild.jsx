import { Component } from 'react'

class Child extends Component {
  componentWillUnmount() {
    alert('Child component is about to be unmounted!')
  }
  
  render() {
    return <h2>Hello World!</h2>
  }
}

class ColorWithChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteColor: 'red',
      show: true
    }
  }
  
  deleteChild = () => {
    this.setState({ show: false })
  }
  
  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    )
  }
}

export default ColorWithChild