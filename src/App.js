import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// State
import { WrapperProvider } from 'state/context'
// Pages
import { Home } from 'pages/home'
import { Launch } from 'pages/launch'
// Components
import { Nav } from 'components/nav'
// Styles
import { theme } from 'styles/utils/variables'
import { GlobalStyle } from 'styles/base'

export const App = () => (
  <WrapperProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/launch/:id" component={Launch} />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  </WrapperProvider>
)
