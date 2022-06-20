import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Js/form';
import './components/Sass/App.scss'
import Cards from './components/Js/property'


export default function Rout() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/property" element={<Cards />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Rout />);