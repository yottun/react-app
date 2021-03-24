import React from 'react';
import Booklist from './components/Booklist';
// import Header from './components/Header';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';


const App = () => {
  const languages = ['React', 'Vue', 'Angular', 'Laravel'];
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }
  return (
    <BrowserRouter>
      <div class="wrap">
        <h1 class="Heading_1">react app</h1>
        <div class="page_book">
          <ul>
            <li><Link to='/'>React</Link></li>
            <li><Link to='/vue'>Vue</Link></li>
            <li><Link to='/angular'>Angular</Link></li>
            <li><Link to='/laravel'>Laravel</Link></li>
          </ul>
          <Route
            exact path='/'
            render={
              props =>
                <Booklist
                  language={languages[0]}
                  getData={keyword => getDataFromAPI(keyword)}
                />
            } >
          </Route>
          <Route
            path='/vue'
            render={
              props =>
                <Booklist
                  language={languages[1]}
                  getData={keyword => getDataFromAPI(keyword)}
                />
            } >
          </Route>
          <Route
            path='/angular'
            render={
              props =>
                <Booklist
                  language={languages[2]}
                  getData={keyword => getDataFromAPI(keyword)}
                />
            } >
          </Route>
          <Route
            path='/laravel'
            render={
              props =>
                <Booklist
                  language={languages[3]}
                  getData={keyword => getDataFromAPI(keyword)}
                />
            } >
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;