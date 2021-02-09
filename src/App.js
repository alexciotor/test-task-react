import {FaUsers} from 'react-icons/fa'
import {HiClipboardList} from 'react-icons/hi'
import {ImMenu} from 'react-icons/im'
import {FiPlay} from 'react-icons/fi'
import {btn} from './modules/data'
import {content} from './modules/data'
import './App.scss';
import React , {useState} from 'react'


function App() {
  let key = new Date().getTime().toString()
  const [value, setValue] = useState(0)
  return (
    <section className='main-section' >
    <div className="left-menu">
    <ul className="ul-list">

    <li className="menu-item">
    
    <div className="menu-grid-item">
    <div className="grid one"></div>
    <div className="grid two"></div>
    <div className="grid three"></div>
    <div className="grid four"></div>
    </div>
    </li>
 
    <li className="menu-item"><HiClipboardList/></li>
    <li className="menu-item"><FaUsers/></li>
    </ul>
    </div>
    <div className="right-content">
    <nav className="nav-bar">
    <div className="nav-content">
    <span className="courses">courses</span>
    <ul className="nav-list">
      {btn.map((btn,index)=>{
        const{name,id} =btn
       return <li key={id} className="nav-li-item "><button className="btn" onClick={()=>{
         setValue(index)
       }} > {name}</button> {value===index && <div className="underline"></div>}</li>
    })}
     
    </ul>
    </div>
    </nav>

    <div className="main-content">
 {content.map((item,index)=>{
   const {name,les,time,img} = item
   return <article key={index} className="article">
   <img className='img' src={img} alt={name}/>
   <div className="text-content">
   <div className="title">
   <p className='name' >{name}</p> 
   <p className='les' >{les} lessons </p>
   </div>
   <span className='time' >{time} min</span>
  
   </div>  
    <span className="play"><FiPlay/></span>
   </article>
 })}
    
    </div>

    </div>
 
    </section>
  );
}

export default App;
