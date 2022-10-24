import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminRouter from './pages/admin/AdminRouter';
import AuthRouter from './pages/auth/AuthRouter';
import PublicRoute from './pages/public/PublicRoute';
import AuthGuard from './_helpers/AuthGuard';

function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<PublicRoute />} />
      <Route path='/admin/*' element={
        <AuthGuard>
          <AdminRouter />
        </AuthGuard>
      } />    
      <Route path='/auth/*' element={<AuthRouter />} />    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
