import React from 'react';
import './index.css'; 
import { UserProfile } from './ui-user-profile';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Network_tab from './ui-network/NetworkTab.jsx';




const App = () => {
  return <>
  {/* <UserProfile/> */}
  <Router>
    
    <Routes>
      <Route path="/network_tab" element={<Network_tab/>} />
     
    </Routes>
  </Router>
</>
}

export default App;

