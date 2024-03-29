import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache }  from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.jpg';
import CarbonData from './components/CarbonData';
import { RegionDataDetail } from './components/RegionDataDetail';

const client = new ApolloClient({
  uri : 'http://localhost:5000/graphql',
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
          <Route exact path="/region/:regionid" component={RegionDataDetail} />
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;