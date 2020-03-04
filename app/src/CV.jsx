import React from 'react';
import './App.css';
import CVBlockTech from './CVBlockTech';
import CVBlockLang from './CVBlockLang';
import CVBlock from './CVBlock';

function CV() {
  return (
    <main>
      <div style={{flex: "2",order:"1",width:"420px"}}><CVBlockTech /></div>
      <div style={{flex: "2",order: "2",width:"420px"}}><CVBlockLang /></div>
      <div style={{flex: "1",order: "3",width:"auto"}}><CVBlock
              title="Work experience"
              elements={[
                {label: 'Environmental Protection Specialist, EU ETS Auditor'},
                {label: ' at TÜV Rheinland Polska Sp. z o.o.'},
                {label: 'Industry Services & Cybersecurity Department'},]}>
      </CVBlock></div>
      <div style={{flex: "1",order:"4"}}><CVBlock 
              title="Education"
              elements={[
                {label: 'University of Silesia in Katowice, Faculty of Computer Science and Material Science'},
                {label: ' B.Eng. Biomedical Engineering; specialty: Medical Computer Science'},
                {label: ' specialisation: Medical Imaging'},]}>
      </CVBlock></div>
      <div style={{flex: "4",order:"5"}}><CVBlock 
              title="Education1"
              elements={[
                {label: 'University of Silesia in Katowice, Faculty of Computer Science and Material Science'},
                {label: ' B.Eng. Biomedical Engineering; specialty: Medical Computer Science'},
                {label: ' specialisation: Medical Imaging'},]}>
      </CVBlock></div>
    </main>
  );
}

export default CV;
