import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Navbar } from '../Components/NavBar'
import { Default } from '../Pages/Default'
import { TodoList } from '../Pages/TodoList'

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container py-4">
        <Switch>
          <Route path={'/'} exact render={() => <Home />} />
          <Route path={'/todo-list'} exact render={() => <TodoList />} />

          <Route render={() => <Default />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
