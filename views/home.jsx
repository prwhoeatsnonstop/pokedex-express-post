var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <title>Pokemon</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        <body>
          <div className="container">
            <h1>Welcome to Home Of Pokemons!</h1>
            <h3>Choose an action below.</h3>
            <form method="GET" action="/pokemon/get"><button type="button" class="btn btn-primary btn-lg btn-block">View</button></form>
            <form method="POST" action="/pokemon"><button type="button" class="btn btn-secondary btn-lg btn-block">Create</button></form>
            <form method="POST" action="/pokemon"><button type="button" class="btn btn-success btn-lg btn-block">Edit</button></form>
            <form method="POST" action="/pokemon"><button type="button" class="btn btn-danger btn-lg btn-block">Delete</button></form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;