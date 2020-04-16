import React from 'react';
import './App.css';
import BookContextProvider from './context/BookContext';
import NavBar from './components/NavBar';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <BookContextProvider>
          <NavBar />
          <div className="container">

          <Route exact path="/" component={BookList}>

          </Route>
          <Route path="/addbook" component={AddBook}>

          </Route>
          </div>

        </BookContextProvider>
      </BrowserRouter>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
