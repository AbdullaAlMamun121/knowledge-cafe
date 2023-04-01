import './App.css'
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Question></Question>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
