import { useState } from "react";
import MessageArea from "./MessageArea";
import MyGantt from "./MyGantt";
import Toolbar from "./Toolbar";
import data from "./dummyData";


function App() {
  const [zoom,setZoom] = useState("날짜단위")
  const [msgs,setMsgs] = useState([])

  const onZoomChange = (zoom)=>{
      setZoom(zoom)
  }

  const logMessage = (message) =>{
    msgs.length >= 5 ? setMsgs([message,...msgs.slice(0,4)]):setMsgs([message,...msgs]) 
  }

  const logDataupdate = (entityType, action, itemData, id) => {
    console.log("B/E 에 중요",entityType, action, itemData, id);
    
    let text = itemData && itemData.text ? ` (${itemData.text})`: '';
    let message = `${entityType} ${action}: ${id} ${text}`;
    if (entityType === 'link' && action !== 'delete' ) {
        message += ` ( source: ${itemData.source}, target: ${itemData.target} )`;
    }
    logMessage(message)
  }

  return (
    <>
      <Toolbar curzoom={zoom} onZoomChange = {onZoomChange} />
      <div className="gantt-container">
        <MyGantt tasks={data} curzoom={zoom} msgs={msgs} onDataUpdated={logDataupdate} />
      </div>
      <MessageArea msgs={msgs} />
    </>
  )
}

export default App