var React = require('react');
class Edit extends React.Component {
  render() {
    // any string concatenation or make new variables do it outside which is before the return, then can use it in the body or can make another class at outside as children to the parent, parent here is of class Edit
    const pokemonID = this.props.indexPokemon.id;
    const postURL = `pokemon/${pokemonID}?_method=put`;
    return (
        <html>
        <title>{ this.props.indexPokemon.name }</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        <body>
            <div className="container">
            <h1>Hello, { this.props.indexPokemon.name }!</h1>
            <img src={this.props.indexPokemon.img} alt="Logo"/>
            <h3>Height: {this.props.indexPokemon.height}</h3>
            <h3>Weight: {this.props.indexPokemon.weight}</h3>
            <h3>Candy: {this.props.indexPokemon.candy}</h3>
            <form method="POST" action={postURL}>
            <div className="form-group">
              ID:<input type="text" className="id" placeholder={this.props.indexPokemon.id}/>Number:<input type="text" className="num" placeholder={this.props.indexPokemon.num}/>Name:<input type="text" className="name" placeholder={this.props.indexPokemon.name}/>Height:<input type="text" className="height" placeholder={this.props.indexPokemon.height}/>Weight:<input type="text" className="weight" placeholder={this.props.indexPokemon.weight}/>
                <small id="emailHelp" className="form-text text-muted">This allows you to edit the pokemon you want.</small>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
        </body>
        </html>
    );
  }
}

module.exports = Edit;