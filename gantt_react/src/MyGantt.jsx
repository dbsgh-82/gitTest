import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import { useEffect, useRef } from "react";
import initLevels from "./zoomLevelSetting";

function MyGantt({tasks,curzoom,onDataUpdated,msgs}){
    const ganttRef = useRef(null)

    let dataProcessor = null
    const initGanttDataProcessor = () => {
        dataProcessor = gantt.createDataProcessor((entityType, action, item, id) => {
            return new Promise((resolve, reject) => {
                if (onDataUpdated) {
                    onDataUpdated(entityType, action, item, id);
                }
                return resolve();
            });
        });
    }

    useEffect(()=>{
        gantt.i18n.setLocale("kr");
        gantt.config.date_format = "%Y-%m-%d %H:%i";
        gantt.config.scales = [
            {unit:"day",step:1, format:"%j,%D"}
        ]
        console.log("확인 lightbox",gantt.config.lightbox.sections);
        console.log("확인 다국어지원",gantt.locale.labels);

        gantt.config.lightbox.sections[1].time_format=["%Y","%m","%d"];  
        gantt.locale.labels.new_task="새 작업";
        gantt.config.task_date = "&nbsp;&nbsp;&nbsp;&nbsp;%Y년 %m월 %d일";


        gantt.ext.zoom.init(initLevels);
        console.log("확인2",gantt.config.lightbox)
        //initGanttDataProcessor(); 요기 있으면 message처리가 이상해짐??
        gantt.init(ganttRef.current);
        gantt.parse(tasks);

    },[])

    useEffect(()=>{
        gantt.ext.zoom.setLevel(curzoom);
        initGanttDataProcessor();

        return () =>{
            if(dataProcessor){
                dataProcessor.destructor();
                dataProcessor = null;
            }
        }
        // gantt.render();
    },[curzoom,msgs])

    return (
        <div
            ref={ganttRef}
            style={{width:"100%",height:"100%"}}     
        ></div>
    )
}

export default MyGantt