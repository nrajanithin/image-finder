import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/search/Search';
import ImageResult from './components/image-result/ImageResult';
class App extends React.Component
{
  render()
  {
    return(
      <MuiThemeProvider>
          <div className="App">
            <Navbar/>
            <Search/>
          </div>
      </MuiThemeProvider> 
    );
  }
}
export default App;
