import React from 'react';
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3,BiLogoJavascript,BiLogoReact,BiLogoPython} from 'react-icons/bi'
import {SiTableau} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import './Skillset.css'


const Skillset = () => {
  return (
    <div className='container' >
      <div className='skills'>
        <li title='HTML'><AiFillHtml5 className='icon' /> </li>
        <li title='CSS'><BiLogoCss3 className='icon'/> </li>
        <li title='JavaScript'><BiLogoJavascript className='icon'/> </li>
        <li title='React'><BiLogoReact className='icon'/> </li>
        <li title='Python'><BiLogoPython className='icon'/> </li>
        <li title='Tableau'><SiTableau className='icon'/> </li>
        <li title='MySql'><GrMysql className='icon'/> </li>
        
      </div>
    </div>
  );
};

export default Skillset;
