import { mount, route } from 'navi'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Router, View } from 'react-navi'

import { withAuthentication } from "./api/authenticatedRoute";
//import Landing from './components/pages/Landing'

import Layout from './components/pages/Layout'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Spinner from './components/widgets/Spinner'
import SingleView from './components/pages/SingleView'
import './styles/index.scss';

//localStorage.setItem("data_token_tookit","XYZ-ABC-DEF")
const Landing = React.lazy(() => import('./components/pages/Landing')); 
const routes =
  mount({
    '/': route({
      title: "Landing Page",     
      view: <Landing />,
    }),
    '/view/:id': route({
      title: "Single View",     
      view: <SingleView />,
    }),
    '/login': route({
      title: "Login",     
      view: <Login />,
    }),
    "/profile": withAuthentication(
      route({
        title: "Profile",
        view: <Profile />,
      })
    ),
  })

ReactDOM.render(
  <Router routes={routes} context={{ token: localStorage.getItem("data_token_tookit") }}>
    <Layout>
      <Suspense fallback={<Spinner/>}>
        <View />
      </Suspense>
    </Layout>
  </Router>,
  document.getElementById('root')
)