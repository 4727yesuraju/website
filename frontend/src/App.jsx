import axios from 'axios'
import {useState,useEffect} from 'react';

function App() {
  const [item,setItem] = useState([])
  const [link,setLink] = useState('');
  useEffect(()=>{
    axios.get('https://test-w2ww.onrender.com')
    .then((res)=>{
        setItem(res.data);
    })
  },[])

  function subFun(){
    console.log({img:link});
    axios.post('https://test-w2ww.onrender.com',{img:link});
   window.location.reload()
  }
  function funDel(id){
    console.log(id);
    axios.delete(`https://test-w2ww.onrender.com/${id}`);
   window.location.reload()
  }
  return (
    <>
      <div className="form">
        <input type="text" placehoder="enter a link" onChange = {(e)=>setLink(e.target.value)}/>
        <button onClick={subFun}>submit</button>
      </div>
      <div className="box">
        {item.map((i,ind)=>{
          return <div className="img">
            <button onClick={()=>funDel(i._id)}>X</button>
            <img key={ind} src={i.img} alt="img" />
          </div>
        })}
      </div>
    </>
  )
}

export default App
