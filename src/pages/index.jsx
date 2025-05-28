import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from '../utils'
const Login = lazy(() => import('./login/Login'))
const Layout = lazy(() => import('./layout/Layout'))
const Home = lazy(() => import('./home/Home'))
const NotFound = lazy(() => import('./not-found/NotFound'))
const Users = lazy(() => import('./users/Users'))
const ProductDetail = lazy(() => import('./product-detail/ProductDetail'))
const UserDetail = lazy(() => import('./users-detail/UsersDetail'))
const Dashboard = lazy(() => import('./dashboard/Dashboard'))
const BoshSahifa = lazy(() => import('./dashboard/bosh-sahifa/BoshSahifa'))
const Tolovlarim = lazy(() => import('./dashboard/tolovlarim/Tolovlarim'))
const Guruhlarim = lazy(() => import('./dashboard/guruhlarim/Guruhlarim'))
const Korsatkichlarim = lazy(() => import('./dashboard/korsatkichlarim/Korsatkichlarim'))
const Reyting = lazy(() => import('./dashboard/reyting/Reyting'))
const Dokon = lazy(() => import('./dashboard/dokon/Dokon'))
const Qoshimcha = lazy(() => import('./dashboard/qoshimcha/Qoshimcha'))
const Sozlamalar = lazy(() => import('./dashboard/sozlamalar/Sozlamalar'))
const Tolangan = lazy(() => import('./dashboard/tolovlarim/Tolangan'))
const Tolanmagan = lazy(() => import('./dashboard/tolovlarim/Tolanmagan'))
const Faol = lazy(() => import('./dashboard/guruhlarim/Faol'))
const Tugagan = lazy(() => import('./dashboard/guruhlarim/Tugagan'))


const MainRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Suspense> <Layout /> </Suspense> }>
          <Route path="/" element={ <Suspense> <Home /> </Suspense> } />
          <Route path="/product/:id" element={ <Suspense> <ProductDetail /> </Suspense> } />
          <Route path="/user/:id" element={ <Suspense> <UserDetail /> </Suspense> } />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={ <Suspense> <NotFound /> </Suspense> } />
        </Route>

        <Route path="/login" element={ <Suspense> <Login /> </Suspense> } />

        <Route path='/dashboard' element={<Suspense><Dashboard /></Suspense>}>
          <Route path='' element={<Suspense><BoshSahifa /></Suspense>} />
          <Route path='tolovlarim' element={<Suspense><Tolovlarim /></Suspense>}>
            <Route path='' element={<Suspense><Tolangan /></Suspense>} />
            <Route path='tolanmagan' element={<Suspense><Tolanmagan /></Suspense>} />
          </Route>
          <Route path='guruhlarim' element={<Suspense><Guruhlarim /></Suspense>}>
            <Route path='' element={<Suspense><Faol /></Suspense>} />
            <Route path='tugagan' element={<Suspense><Tugagan /></Suspense>} />
          </Route>
          <Route path='korsatkichlarim' element={<Suspense><Korsatkichlarim /></Suspense>} />
          <Route path='reyting' element={<Suspense><Reyting /></Suspense>} />
          <Route path='dokon' element={<Suspense><Dokon /></Suspense>} />
          <Route path='qoshimcha' element={<Suspense><Qoshimcha /></Suspense>} />
          <Route path='sozlamalar' element={<Suspense><Sozlamalar /></Suspense>} />
        </Route>
      </Routes>
    </>
  )
}

export default React.memo(MainRouters)