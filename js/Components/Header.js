

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hamburger_open: true
    } 
  }
  
  toggleHamburger = () => {
    this.setState({
      hamburger_open: !this.state.hamburger_open
    })
  }
  
  render() {
    let hamburger_class = "hamburger right";
    let menu_class = "hamburger_menu";
    if(!this.state.hamburger_open) {
      hamburger_class += " open"; 
      menu_class += " open"; 
    }
    return (
      <div>
        <div className="header">
          <h1>{this.props.title}</h1>
          <div className={hamburger_class} onClick={this.toggleHamburger}>
            <div className="hamburger2"/>        
          </div>    	 
        </div>
        <div className={menu_class}>
          <a href="#">Сайт разработан в качестве проектного продукта</a>
	  <a href="#">Автор проекта: Санников Михаил</a>
        </div>
      </div>
    )
  }
};

export default Header;