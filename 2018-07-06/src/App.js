import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Navbar from './Navbar.js';
import anime from 'animejs';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = {
      nav: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header instance={this}/>
        <div className="body">
          <div className="left">
            <h1>Content 1</h1>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique. Ac tincidunt vitae semper quis lectus. Senectus et netus et malesuada fames ac. Scelerisque purus semper eget duis at tellus at urna. Nunc non blandit massa enim nec dui nunc mattis enim. At imperdiet dui accumsan sit. Orci dapibus ultrices in iaculis. Neque convallis a cras semper auctor. Hac habitasse platea dictumst quisque sagittis purus sit. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Vulputate sapien nec sagittis aliquam malesuada bibendum. Laoreet non curabitur gravida arcu ac tortor dignissim. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Habitant morbi tristique senectus et. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Varius morbi enim nunc faucibus a pellentesque sit.<br/>
            Enim sit amet venenatis urna cursus. Semper eget duis at tellus at. Quis vel eros donec ac odio tempor orci dapibus ultrices. Lectus urna duis convallis convallis tellus. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Luctus accumsan tortor posuere ac ut consequat semper viverra. Faucibus purus in massa tempor. Convallis convallis tellus id interdum velit laoreet. Quam quisque id diam vel quam. Tellus mauris a diam maecenas sed enim.
            </p>
          </div>
          <div className="mid">
            <h1>Content 2</h1>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget. Maecenas ultricies mi eget mauris pharetra et. Ornare massa eget egestas purus viverra accumsan in. Morbi non arcu risus quis varius quam quisque id diam. Sit amet aliquam id diam maecenas. Potenti nullam ac tortor vitae purus faucibus ornare. Est ultricies integer quis auctor elit sed vulputate mi sit. Rhoncus urna neque viverra justo nec ultrices. Tempus quam pellentesque nec nam. At quis risus sed vulputate odio ut. Ut morbi tincidunt augue interdum velit euismod. In ante metus dictum at tempor. Aliquam faucibus purus in massa tempor nec feugiat nisl. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Nulla aliquet enim tortor at auctor urna nunc id cursus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Est ante in nibh mauris cursus mattis. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit.<br/>
            Pellentesque dignissim enim sit amet venenatis urna. Turpis massa sed elementum tempus egestas sed. Tincidunt dui ut ornare lectus sit amet est. Turpis cursus in hac habitasse platea dictumst quisque. Cursus risus at ultrices mi. Dignissim suspendisse in est ante in. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Sed turpis tincidunt id aliquet risus feugiat in ante metus. At varius vel pharetra vel turpis nunc eget. Convallis tellus id interdum velit. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Massa massa ultricies mi quis hendrerit dolor magna. Erat pellentesque adipiscing commodo elit at imperdiet. Scelerisque viverra mauris in aliquam sem.<br/>
            Sit amet mauris commodo quis imperdiet massa. Lectus arcu bibendum at varius. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Sit amet porttitor eget dolor morbi non arcu risus quis. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Pellentesque id nibh tortor id. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Non curabitur gravida arcu ac tortor dignissim. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Est ultricies integer quis auctor elit sed vulputate.<br/>
            Id diam vel quam elementum pulvinar etiam non. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus. Arcu bibendum at varius vel pharetra. Mauris ultrices eros in cursus. At ultrices mi tempus imperdiet nulla. Quisque egestas diam in arcu. Sit amet nisl suscipit adipiscing bibendum est. In eu mi bibendum neque egestas. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Egestas integer eget aliquet nibh. Pulvinar mattis nunc sed blandit. Placerat orci nulla pellentesque dignissim enim sit amet.<br/>
            Phasellus egestas tellus rutrum tellus pellentesque. Egestas quis ipsum suspendisse ultrices gravida dictum. Tortor condimentum lacinia quis vel. Nulla facilisi etiam dignissim diam quis. Odio tempor orci dapibus ultrices. Accumsan sit amet nulla facilisi morbi tempus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. In hac habitasse platea dictumst quisque. In eu mi bibendum neque egestas congue quisque egestas diam. Purus sit amet volutpat consequat mauris nunc congue.
            </p>
          </div>
          <div className="right">
            <h1>Content 3</h1>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Neque laoreet suspendisse interdum consectetur libero id faucibus. Consectetur a erat nam at lectus urna duis convallis convallis. Commodo elit at imperdiet dui accumsan sit. Egestas dui id ornare arcu odio. Facilisis gravida neque convallis a cras semper auctor neque. Ac turpis egestas sed tempus urna et pharetra pharetra. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Quis risus sed vulputate odio ut enim blandit volutpat. Quam elementum pulvinar etiam non. Nibh venenatis cras sed felis. Convallis aenean et tortor at risus viverra adipiscing at in. Eget nunc lobortis mattis aliquam faucibus purus in.<br/>
            Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Sed tempus urna et pharetra pharetra massa massa. Feugiat nibh sed pulvinar proin gravida hendrerit. Id aliquet lectus proin nibh nisl condimentum id. Vehicula ipsum a arcu cursus vitae congue mauris. Eget nunc lobortis mattis aliquam faucibus. Felis imperdiet proin fermentum leo vel orci. Lobortis mattis aliquam faucibus purus in massa tempor. Viverra nibh cras pulvinar mattis. Volutpat sed cras ornare arcu. Urna cursus eget nunc scelerisque viverra. Habitant morbi tristique senectus et netus et malesuada. Gravida in fermentum et sollicitudin ac orci. Odio pellentesque diam volutpat commodo sed egestas. Habitant morbi tristique senectus et netus et malesuada fames. Arcu cursus euismod quis viverra nibh. Scelerisque eleifend donec pretium vulputate sapien nec. Sed elementum tempus egestas sed sed. Ultrices dui sapien eget mi proin sed libero enim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.
            </p>
          </div>
        </div>
        <Navbar instance={this}/>
      </div>
    );
  }

  toggleNavbar() {
    let val = this.getNavbarVal();
    anime({
      targets: '.bar',
      translateX: {
        value: val,
        duration: 500,
        easing: 'easeInOutQuart'
      }
    });
  }

  getNavbarVal() {
      if (this.props.nav === true) {
        this.props = {nav: false};
        return -300;
      } else {
        this.props = {nav: true};
        return 300;
      }
  }
}

export default App;
