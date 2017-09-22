const React = require('react');
const ReactDOM = require('react-dom');

class Application extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hello World!
        </p>
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));
