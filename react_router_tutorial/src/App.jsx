import "./App.css";
import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import About from "./components/pages/AboutPage";
import Home from "./components/pages/HomePage";
import ContactLayout from "./components/pages/help/ContactLayout";
import FAQLayout from "./components/pages/help/FAQLayout";
import Careers, { careersLoader } from "./components/pages/careers/Careers";

// layouts
import RootLayout from "./components/layouts/RootLayout";
import HelpLayout from "./components/layouts/HelpLayout";
import NotFoundPage from "./components/pages/NotFoundPage";
import CareerLayout from "./components/layouts/CareerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQLayout />} />
        <Route path="contact" element={<ContactLayout />} />
      </Route>

      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
