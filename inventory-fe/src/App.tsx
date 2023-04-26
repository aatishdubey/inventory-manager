import {
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { BaseLayout } from '@components/BaseLayout';
import Products from './pages/Products';
import { Login } from './pages/Login';
import { queryClient } from './api';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Products />} />
            </Routes>
          </Router>
      </BaseLayout>
    </QueryClientProvider>
  )
}

export default App
