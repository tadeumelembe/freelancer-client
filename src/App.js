import './App.css';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Jobs from './Views/Jobs';
import JobDetails from './Views/JobDetails';

function App() {

  const Home = () => {
    return (
      <>
        <p>Hello</p>
      </>
    )
  }

  return (
    <div style={{backgroundColor:'#f8f7f6',minHeight:'100vh'}}>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:jobId" element={<JobDetails />} />
      </Routes>

    </div>
  );
}


export default App;
