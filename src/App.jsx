import './App.css'
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
     <Blogs></Blogs>
    </div>
  )
}

export default App
