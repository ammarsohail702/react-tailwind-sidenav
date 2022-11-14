import logo from './logo.svg';
import './App.css';
import {AiTwotoneRocket} from 'react-icons/ai'
import { IconContext } from "react-icons";
import { useState } from 'react';
function App() {
  const [open, setOpen] =useState(false);
  const Menu= [
    {title: 'Home'},
    {title: 'Chat'},
    {title: 'Products'},
    {title: 'Billing'},
  ]
  return (
<div className='flex'>
{/* sidebar */}
<div className={`h-screen bg-slate-700 p-6 relative ${  open? 'w-72' : 'w-20'}`}>
<div className='flex items-center pb-20 gap-x-4'>
<i className='text-white font-semibold text-3xl fa fa-podcast'></i>
<div>
  <p className= {`text-stone-50 text-2xl' ${!open&& "scale-0"}`}>React SideBar</p>
</div>
  <img className='absolute cursor-pointer rounded-full right-2 top-3 w-7' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png' onClick={() => setOpen(!open)}/>
</div>

 <ul>
  {Menu.map((item, index) =>(
  <li key={index} className="text-white flex gap-x-3 p-4 hover:bg-slate-50/10">
<i className='text-white text-2xl fa fa-envelope-open'></i>
    <p className={`${!open&& "scale-0"}`}>{item.title}</p>
  </li>
  ))}
 </ul>

</div>
{/* home */}
<div className='p-5 h-screen '>
  Home
</div>
</div>
  );
}

export default App;