import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
  render() {
    const style = {
      height: 200,
      width: 300,
      margin: 'auto',
      textAlign: 'center',
      display: 'relative',
    };

    const labelStyle = {
      fontSize: '25px',
      color: '#4ec3cd'
    }

    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton style={style} zDepth={3} label="Welcome to Vettit!" labelStyle={labelStyle}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;