import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TenTime from './components/Task1/TenTime';
import List from './components/Task2/List';
import AddStudent from './components/Task3/Students/AddStudent';
import AddLibrarian from './components/Task3/Librarian/AddLibrarian';
import Books from './components/Task3/Books/Books';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <TenTime></TenTime>
          </Route>

          <Route path='/task_2'>
            <List></List>
          </Route>

          <Route path='/books'>
            <Books></Books>
          </Route>

          <Route path='/students'>
            <AddStudent></AddStudent>
          </Route>
          <Route path='/librarian'>
            <AddLibrarian></AddLibrarian>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
