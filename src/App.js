import './App.css';
import {useState,useEffect} from 'react'


function App() {
  const [toDos, setToDos]=useState([])
  const [toDo, setToDo]=useState('')
  const currentTime = new Date(Date.now());
  const month = currentTime.toLocaleString('default', { month: 'long' });
  const formattedTime = `${month.toString().substring(0,3)}-${currentTime.getDate()}    ${currentTime.getHours()}:${currentTime.getMinutes()}`;
  const delete_note = (item)=>setToDos(toDos.filter((itm)=>itm!==item))
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });


  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List </h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's a great day 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add your task..." />
    <i className="fas fa-plus" onClick={()=>{setToDos([...toDos,{ date:formattedTime, text: toDo, status: false}]); setToDo('');}}></i>
    </div>
    <div className="todos">
      {toDos.filter((item)=>item.status===false).map((item,index)=>{
        return (
          <div className="todo" key={index}>
          <div className="left">
          <input type="checkbox" name="" id="" checked={item.status} onChange={(e)=>toDos.filter(
            (itm)=>itm===item
          ).map((item)=>item.status=e.target.checked)}/>
          <p>{item.text}</p>
          </div>
            <div className='right'>
          <p>{item.date}</p>
            </div>
          <div className="right">
          <i class="fa-solid fa-pen" onClick={()=>{
            setToDo(item.text)
            delete_note(item)
            }}></i>
          <i className="fas fa-times" onClick={
            ()=>{
              delete_note(item)
            }
          }>
          </i>
          </div>
          </div>
          
      )
      })}
      
    </div>
      <br /><br />
      
    <div className="subHeading">
      <br />
      <h2>Completed task </h2>
    </div>
    <div className="todos">
      {toDos.filter((item)=>item.status===true).map((item,index)=>{
        return (
          <div className="todo" key={index}>
          <div className="left">
          <input type="checkbox" name="" id="" checked={item.status} onChange={(e)=>
          toDos.filter(
            (itm)=>itm===item
          ).map((item)=>item.status=e.target.checked)}/>
          <p>{item.text}</p>
          </div>
            <div className='right'>
          <p>{item.date}</p>
            </div>
          </div>
          
      )
      })}
      
    </div>
  </div>
);
}



export default App;
