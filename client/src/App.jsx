import { BrowserRouter, Routes, Route } from "react-router-dom"
import adminRegisterPage from "./Pages/Admin/register";
import './Pages/Admin/assets/css/pace.min.css'
import './Pages/Admin/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css'
import './Pages/Admin/assets/plugins/metismenu/metisMenu.min.css'
import './Pages/Admin/assets/plugins/metismenu/mm-vertical.css'
import './Pages/Admin/assets/css/bootstrap.min.css'
import './Pages/Admin/assets/css/bootstrap-extended.css'
import './Pages/Admin/assets/sass/main.css'
import './Pages/Admin/assets/sass/dark-theme.css'
import './Pages/Admin/assets/sass/responsive.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/register" Component={adminRegisterPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
