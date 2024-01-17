import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];





function App() {
// active tab =>update ui
// updat indicatore
// content updated
// create state
// immutable

// const activeTab=1;

// const state=useState(1);
// console.log(state);

const [activeTab,setActiveTab]=useState(1)
const [isOpen,setIsOpen]=useState(true);
const[count,setCount]=useState(0)


const handleActiveTab= (id) =>{
  // console.log("clicked",id);
setActiveTab(id);
setCount((c)=>c+1)
setCount((c)=>c+1)

}
const handleOpen=(isOpen)=>{
  setIsOpen(!isOpen)
}

  return (
    <div>
    <button onClick={()=>handleOpen(isOpen)}> ❌ </button>
    {isOpen?
    <div className='tab'>
      {/* <button className='active'>
          <span>ITEM ONE</span>
          <span className='tab-indicator'></span>
        </button>
        <button>ITEM TWO</button>
        <button>ITEM THREE</button> */}
      <div className="tab__header">
        {tabData.map((tab)=>(
          <button
          onClick={()=>handleActiveTab(tab.id)}
          key={tab.id} className={activeTab===tab.id ? "active":""}>
          <span>{tab.title}</span>
          <span className='tab-indicator'></span>
        </button>
        ))}
      </div>
      <div className="tab__content">{tabData[activeTab -1].content}-{count}</div>
    </div> : ("closed ")
  }

    </div>
  );
}

export default App
