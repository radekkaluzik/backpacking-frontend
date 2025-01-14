import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Split, SplitItem, Stack, StackItem,
} from '@patternfly/react-core';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import { fetchCategories } from './api/categories';
import MyBackpack from './components/MyBackpack';

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <Router>
      <div className="App orange-theme">
        <Stack>
          <StackItem>
            <Header />
          </StackItem>
          <StackItem isFilled>
            <div className="main-content">
              <Split>
                <SplitItem>
                  <CategoryList categories={categories} />
                </SplitItem>
                <SplitItem isFilled>
                  <Switch>
                    {categories.map((category) => (
                      <Route path="/category/:id" key={category.name}>
                        <CategoryDetail />
                      </Route>
                    ))}
                    <Route path="/backpack">
                      <MyBackpack />
                    </Route>
                  </Switch>
                </SplitItem>
              </Split>
            </div>
          </StackItem>
        </Stack>
        <Footer />
      </div>
    </Router>
  );
}
