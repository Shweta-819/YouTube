import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';

import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchContainer from './components/WatchContainer';

const appRouter = createBrowserRouter([{

  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>

    },
    {
      path: "watch",
      element: <WatchContainer/>
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Header></Header>
      <RouterProvider router={appRouter}></RouterProvider>

    </div>
    </Provider>
  );
}

export default App;
