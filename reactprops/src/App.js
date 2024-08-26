import React from 'react';
import Classprops from './Classprops';
import FunctionProps from './Functionprops';

class App extends React.Component {
  render() {
    return <>
      <Classprops name = "Learner 1" place = "XYZ"><p>Let's begin learning</p></Classprops>
      <Classprops name = "Learner 2" place = "ABC"><button>Click here</button></Classprops>
      <Classprops name = "Learner 3" place = "PQR"><p><form>Hello</form></p></Classprops>
      <FunctionProps name = "Learner 4" place= "UVW"><p>Using Function Component</p></FunctionProps>
      </>
  }
}

export default App;
