import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router';
import Loading from './components/Loading/Loading.js';
import './App.css';

const MainPage = React.lazy(()=>import('./pages/MainPage/MainPageContainer.js'));
const TitlePage = React.lazy(()=>import('./pages/TitlePage/TitlePage.js'));
/**
 * Головной компонент
 * @return {JSX}
 */
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={TitlePage} />
          <Route path="/main" exact component={MainPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
