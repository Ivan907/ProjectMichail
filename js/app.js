import Header from "./Components/Header";
import ShowCase from "./Components/ShowCase"

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      savedLocations: []
    }
  }
  
  saveLocation = (location) => {
    let locations = this.state.savedLocations;
    locations.push(location);
    
    this.setState(...this.state, {
      savedLocations: locations
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="main_container">
        <Header title="Храмы Челябинской области"/>
    	</div>
    )
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);