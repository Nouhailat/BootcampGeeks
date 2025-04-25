import { Component } from 'react';
import './Exercise3.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a heading</h1>
        
        <p className="para">
          This is a paragraph styled with CSS from Exercise3.css
        </p>

        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          Visit React Official Site
        </a>

        <form>
          <input type="text" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </form>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYd_ww1XUSi4bgCrg8wS87qaFbhFw7bTkCK_Auv-FjqA&s&ec=72940543"
          alt="Placeholder"
        />

        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
