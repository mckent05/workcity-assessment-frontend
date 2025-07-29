import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import LoginPage from "./components/sessions/LoginPage";
import RegisterPage from "./components/sessions/RegisterPage";
import ClientDetailsPage from "./pages/ClientDetails";
import ClientListPage from "./pages/ClientListPage";
import ClientPage from "./pages/ClientPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetails from "./pages/ProjectDetails";
import AddNewProjectPage from "./pages/AddNewProjectPage";
import AddNewClientPage from "./pages/AddNewClientPage";
import Main from "./pages/Main";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const sessionDetails = useSelector((state) => state.sessions);

  const { isLoading, isSignedIn } = sessionDetails;

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage loading={isLoading} signedIn={isSignedIn} />}
        />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />}>
            <Route index element={<ClientPage />} />
            <Route path="clients" element={<ClientPage />}>
              <Route index element={<ClientListPage />} />
              <Route path=":id" element={<ClientDetailsPage />} />
              <Route path="add-new" element={<AddNewClientPage />} />
            </Route>

            {/* Project Routes */}
            <Route path="projects" element={<ProjectPage />}>
              <Route index element={<ProjectListPage />} />
              <Route path=":id" element={<ProjectDetails />} />
              <Route path="add-new" element={<AddNewProjectPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
