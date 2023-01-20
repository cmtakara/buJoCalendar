const React = require("react")


class New extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <div>
            <h1>New Event Page</h1>
            <nav>
              <a href="/events">Home Page</a>
            </nav>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/event" method="POST">
              Description: <input type="text" name="description" required /><br />
              Event Date : <input type="date" id='date' required /> <br />
              Start Time: <input type="time" id="start" name="start" required></input>
              End Time: <input type="time" id="end" name="end" required></input><br />
              Complete: <input type="checkbox" name="complete" />
              Recurring: <input type="checkbox" name="recurring" /><br />

              <label for="spoons">Choose the number of spoons:</label>
              <select id="spoons" name="spoons">
                <option value="none">---</option>
                <option value="10" class="red">10</option>
                <option value="9" class="red-orange">9</option>
                <option value="8" class="orange">8</option>
                <option value="7" class="yellow-orange">7</option>
                <option value="6" class="yellow">6</option>
                <option value="5" class="green">5</option>
                <option value="4" class="blue-green">4</option>
                <option value="2" class="blue">3</option>
                <option value="2" class="blue-purple">2</option>
                <option value="1" class="purple">1</option>
              </select> <br />

              <label for="social">Choose the level of social energy:</label>
              <select id="social" name="social">
                <option value="none">---</option>
                <option value="10" class="red">10</option>
                <option value="9" class="red-orange">9</option>
                <option value="8" class="orange">8</option>
                <option value="7" class="yellow-orange">7</option>
                <option value="6" class="yellow">6</option>
                <option value="5" class="green">5</option>
                <option value="4" class="blue-green">4</option>
                <option value="2" class="blue">3</option>
                <option value="2" class="blue-purple">2</option>
                <option value="1" class="purple">1</option>
              </select> <br />

              <label for="color">Choose the event color:</label>
              <select id="color" name="color">
                <option value="none">---</option>
                <option value="10" class="red">10</option>
                <option value="9" class="red-orange">9</option>
                <option value="8" class="orange">8</option>
                <option value="7" class="yellow-orange">7</option>
                <option value="6" class="yellow">6</option>
                <option value="5" class="green">5</option>
                <option value="4" class="blue-green">4</option>
                <option value="2" class="blue">3</option>
                <option value="2" class="blue-purple">2</option>
                <option value="1" class="purple">1</option>
              </select> <br />

              <label for="category">Choose the event category:</label>
              <select id="category" name="category">
                <option value="home">Home</option>
                <option value="people">People</option>
                <option value="per-scholas">Per Scholas</option>
                <option value="navarro">Navarro</option>
                <option value="software-projects">Software Projects</option>
                <option value="craft-projects">Craft Projects</option>
              </select> <br />

              <input type="submit" value="Create Event" />
            </form>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = New