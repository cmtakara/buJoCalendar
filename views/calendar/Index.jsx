const React = require("react")

class Index extends React.Component {
  render() {
    const { events } = this.props
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
            <h1>Calendar Index Page</h1>
            <nav>
              <a href="/events/new">Create Entry</a>
            </nav>
            <ul>
              {
                events.map((entry, i) => {
                  return (
                    <li>
                      The{' '}
                      <a style={{ color: "black"}} href={`/events/${i}`} class={entry.color}>{entry.description}</a>
                      {" "}
                      is {entry.color} <br />
                      {
                        entry.complete
                          ? "It is done"
                          : "It is not done"
                      }
                      <br />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Index