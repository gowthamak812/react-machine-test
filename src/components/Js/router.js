import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './basic-form';
import './App.scss'
import Cards from './card'
import Details from "./details";


export default function Rout() {
  return (
    <Router>
      <Routes  className='card-style'>
        <Route exact path="/" element={<Form />} />
        <Route path="/property" element={<Cards />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Rout />);