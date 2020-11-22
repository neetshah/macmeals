import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Nav/NavBar';
import { ToastProvider} from 'react-toast-notifications'


class App extends React.Component {
  render() {
    return (
      <div>
        <ToastProvider>
        <Navigation></Navigation>
        </ToastProvider>
    </div>
    );
  }
}

export default App;
