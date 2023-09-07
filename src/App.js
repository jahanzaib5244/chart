/**
 * Application
 */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { BryntumGantt, BryntumProjectModel } from "@bryntum/gantt-react";
import { ganttConfig, projectConfig } from "./AppConfig";
import "./App.scss";
import { projectData } from "./DemoData";
import moment from "moment";
import axios from "axios";

const App = () => {
  const [calendars, setCalendars] = useState(projectData.calendars);
  const [tasks, setTasks] = useState([]);
  const [assignments, setAssignments] = useState(projectData.assignments);
  const [dependencies, setDependencies] = useState(projectData.dependencies);
  const [resources, setResources] = useState(projectData.resources);

  // edit button click handler
  const handleEditClick = ({ record, grid: gantt }) => {
    gantt.editTask(record);
  };
  const project = useRef();
  const gantt = useRef();

  const api_data = [
    {
      Event: "Meeting",
      "Time Range": "9:00 AM - 10:00 AM",
      id: 1,
    },
    {
      Event: "Lunch",
      "Time Range": "11:30 AM - 12:30 PM",
      id: 2,
    },
    {
      Event: "Presentation",
      "Time Range": "2:00 PM - 3:00 PM",
      id: 3,
    },
  ];

  const setApiTasks = (array) => {
    const start_date = moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss");
    const end_date = moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss");
    const childrens = (array ?? api_data).map((item, index) => {
      const start = moment(item["Time Range"].split("-")[0].trim(), "h:mm A");
      const start_time = start.format("YYYY-MM-DDTHH:mm:ss");
      const end = moment(item["Time Range"].split("-")[1].trim(), "h:mm A");
      const end_time = end.format("YYYY-MM-DDTHH:mm:ss");
      return {
        id: index,
        name: item?.Event,
        percentDone: (Math.random() * 100).toFixed(0),
        startDate: start_time,
        endDate: end_time,
        duration: 0.041666666666667,
        rollup: true,
        expanded: true,
        children: [],
        baselines: [
          {
            startDate: start_time,
            endDate: end_time,
          },
        ],
      };
    });
    const taskData = {
      id: 1000,
      name: "Today Schedule",
      percentDone: 10,
      startDate: start_date,
      endDate: end_date,

      expanded: true,
      children: childrens,
      baselines: [
        {
          startDate: start_date,
          endDate: end_date,
        },
      ],
    };

    setTasks([taskData]);
  };

  const setTaskFromApi = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8050", // Replace with your API base URL
    });

    // Make the API request
    const res = await axiosInstance.get("/api/schedule");
    setApiTasks(res.data);
  };

  useEffect(() => {
    setTaskFromApi();
  }, []);

  return (
    <Fragment>
      <BryntumProjectModel
        ref={project}
        calendars={calendars}
        tasks={tasks}
        assignments={assignments}
        dependencies={dependencies}
        resources={resources}
        {...projectConfig}
      />
      <BryntumGantt
        ref={gantt}
        extraData={{ handleEditClick }}
        project={project}
        {...ganttConfig}
      />
    </Fragment>
  );
};

export default App;
