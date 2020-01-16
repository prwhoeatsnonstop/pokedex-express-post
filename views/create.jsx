var React = require('react');
class Create extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Hello!</h1>
            <form method="POST" action="/pokemon">ID:<input type="text" name="id"/><br/>Number:<input type="text" name="num"/><br/>Name:<input type="text" name="name"/><br/>Height:<input type="text" name="height"/><br/>Weight:<input type="text" name="weight"/><br/><input type="submit" value="Submit"/></form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Create;