import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from './routes/privateRoutes'
import PrivateRoute from "./authentication/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import { dashboardRoutes } from "./routes/dashboardRoutes";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";



function App() {
  return (
    
  
       <Navbar>
      <Toaster />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />}/>))}
        
       <Route element={<PrivateRoute />}>
        {privateRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} 
        element={<Component />}/>))}
       </Route>

       <Route path = '/dashboard' element={<Dashboard/>}>
        {dashboardRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} 
        element={<Component />}/>))}     
       </Route>
       <Route path="*" element={<NotFound/>}/>
       </Routes>
      </Navbar>
   
   
  );
}

export default App;
