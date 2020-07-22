import React, { Component } from 'react';
import { CarbonData } from "./components/CarbonData";
import { ApolloClient, ApolloProvider, InMemoryCache }  from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.jpg';

const client = new ApolloClient({
  uri : '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <div className="container">
          <img src={logo} 
          alt="carbon" 
          style={{ width:300, display: 'block', margin: 'auto', borderRadius: 200, padding: 20}}></img>
          <Route exact path="/" component={CarbonData} />
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;