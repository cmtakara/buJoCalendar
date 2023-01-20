const React = require("react");

class Show extends React.Component {
  render() {
    const { event } = this.props
    return (
      <div>

        <h1>Show Page</h1>
        <nav>
          <a href="/events">Home Page</a>
        </nav>

        <div>
          <p>The {event.description} is {event.color}.</p>
          <p> {event.completed !== undefined ? "check if it's completed" : "it's not completed"} </p>
        </div> 
      </div>
    )
  }
}
// We can write javascript code within the curly brackets

module.exports = Show