import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import UrlShortenerCreate from './components/forms/UrlShortenerCreate';
import UrlShortenerTable from './components/UrlShortenerTable';
import UrlContextProvider from '../src/context/UrlContext';
import DialogContextProvider from '../src/context/DialogContext';
import Redirect from './views/Redirect';
import MainPage from './views/MainPage';

function App() {
  return (
    <div className="App">
      <UrlContextProvider>
        <DialogContextProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/:shorterUrl" exact component={Redirect} />
              <Route path="/" exact component={MainPage} />
            </Switch>
          </BrowserRouter>
        </DialogContextProvider>
      </UrlContextProvider>
    </div>
  );
}

export default App;
