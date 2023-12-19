import { Route, Routes } from 'react-router-dom';
import './globals.css';

import RootLayout from './_root/RootLayout';
import SignoutForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';

function App() {
   // JSX içeriği döndür
   return (
      <main className="flex h-screen">
         <Routes>
            <Route element={<AuthLayout />}>
               {/* public routes */}
               <Route path="/sign-in" element={<SigninForm />} />
               <Route path="/sign-up" element={<SignoutForm />} />
            </Route>
            <Route element={<RootLayout />}>
               {/* private routes */}
               <Route index element={<Home />} />
            </Route>
         </Routes>
      </main>
   );
}

export default App;
