import React, {Component} from 'React';
import {render} from 'react-dom';

class App extends Component {
  constructor(props, context){
    super(props, context);
    throw new Error("TESTING TRAVIS")
  }

  render(){
    return (
      <div>
        HERE YOUR HTML GOES
      </div>
      )
  }

};

render(
    <App/>,
  document.getElementById('root')
)
