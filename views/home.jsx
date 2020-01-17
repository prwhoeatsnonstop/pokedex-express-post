var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <title>Pokemon</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        <body>
<<<<<<< HEAD
          <div className="container">
            <h1>Welcome to Home Of Pokemons!</h1>
            <h3>Choose an action below.</h3>
            <form method="GET" action="/pokemon/get"><button type="button" class="btn btn-primary btn-lg btn-block">View</button></form>
            <form method="POST" action="/pokemon"><button type="button" class="btn btn-secondary btn-lg btn-block">Create</button></form>
            <form method="POST" action="/pokemon"><button type="button" class="btn btn-success btn-lg btn-block">Edit</button></form>
            <form method="POST" action="/pokemon"><button type="button" class="btn btn-danger btn-lg btn-block">Delete</button></form>
=======
          <div>
            <h1>Hello, { this.props.name }!</h1>
            <form method="POST" action="/pokemon">
            ID:<input type="text" name="id"><br>
            Number:<input type="text" name="num"><br>
            Name:<input type="text" name="name"><br>
            Image:<input type="text" name="img"><br>
            Height:<input type="text" name="height"><br>
            Weight:<input type="text" name="weight"><br>
            <input type="submit" value="Submit">
            </form>
>>>>>>> 786b3dcd0e80ba3cf2d72ed26a3cb0e2c1af750e
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;