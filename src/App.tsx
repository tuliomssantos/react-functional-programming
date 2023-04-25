import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PureFunctionalComponent } from './components/pure-functional-component'

import { Layout } from './components/layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Layout>
              <PureFunctionalComponent />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
