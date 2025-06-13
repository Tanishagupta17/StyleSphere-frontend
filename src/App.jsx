import './App.css';
import { Routes, Route } from 'react-router-dom';

import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
