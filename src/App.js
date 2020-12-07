import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UrlContextProvider from '../src/context/UrlContext';
import DialogContextProvider from '../src/context/DialogContext';
import Redirect from './views/Redirect';
import MainPage from './views/MainPage';
import Documentation from './views/Documentation';
import PageNotFound from './components/PageNotFound';
import SnackbarContextProvider from './context/SnackbarContext';


function App() {
  return (
    <div className="App">
      <UrlContextProvider>
        <DialogContextProvider>
          <SnackbarContextProvider>
            <BrowserRouter>
              <Switch>
                <Route path="/docs" exact component={Documentation} />
                <Route path="/:shorterUrl" exact component={Redirect} />
                <Route path="/" exact component={MainPage} />
                <Route path="*" exact component={PageNotFound} />
              </Switch>
            </BrowserRouter>
          </SnackbarContextProvider>
        </DialogContextProvider>
      </UrlContextProvider>
    </div>
  );
}

export default App;
