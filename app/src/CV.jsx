import React from 'react';
import './App.css';
import CVBlockTech from './CVBlockTech';
import CVBlockLang from './CVBlockLang';
import CVBlock from './CVBlock';
import {technologies,work,education,otherSkills} from './CVBlockContents';

function CV() {
  return (
    <main>
      <div style={{
                    flex: "2",
                    order:"1",
                    width:"40%"}}>
        <CVBlockTech />
      </div>
      <div style={{
                    flex: "2",
                    order: "2",
                    width:"40%"}}>
        <CVBlockLang />
      </div>
      <div style={{
                    flex: "4",
                    order:"3",
                    width:"40%"}}>
        <CVBlock 
              title="Auxillary skills"
              text={otherSkills}>
        </CVBlock>
      </div>
      <div style={{
                    flex: "1",
                    order: "4",
                    width:"60%"}}>
        <CVBlock
              title="Work experience"
              text={work}>
        </CVBlock>
      </div>
      <div style={{
                    flex: "1",
                    order:"5",
                    width:"60%"}}>
        <CVBlock 
              title="Education"
              text={education}>
        </CVBlock>
      </div>
      <div style={{
                    flex: "4",
                    order:"6",
                    width:"60%"}}>
        <CVBlock 
              title="Technical skills"
              text={technologies}>
        </CVBlock>
      </div>
    </main>
  );
}

export default CV;
