import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainContent from './components/MainContent';
import Login from './components/Login';
import ArithmeticProblems from './components/ArithmeticProblems';
import VerbalAbility from './components/VerbalAbility';
import Aptitude from './components/Aptitude';
import Marketing from './components/Marketing';
import AcePlacements from './components/Aceplacements';
import CareerSuccess from './components/CareerSuccess';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/arithmetic-problems" element={<MainContent><ArithmeticProblems /></MainContent>} />
        <Route path="/verbal-ability" element={<MainContent><VerbalAbility /></MainContent>} />
        <Route path="/aptitude" element={<MainContent><Aptitude /></MainContent>} />
        <Route path="/ace-placements" element={<MainContent><AcePlacements /></MainContent>} />
        <Route path="/marketing" element={<MainContent><Marketing /></MainContent>} />
        <Route path="/career-success" element={<MainContent><CareerSuccess /></MainContent>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;