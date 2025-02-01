class ShowCase extends React.Component {
  ShowCase
  
  constructor(props) {
    super(props);    
    
    this.state = {
      image: this.props.image
    };
    
  render() {
    return (
      <div className="showcase_container type1" style={{backgroundImage: "url(" + this.state.image + ")"}}>
        <div className="showcase_text_container">
          <h1 className="showcase_title type1">{this.props.title}</h1>
          <p className="showcase_description type1">{this.props.description}</p>
        </div>
    	</div>
    )
  }
};

export default ShowCase;