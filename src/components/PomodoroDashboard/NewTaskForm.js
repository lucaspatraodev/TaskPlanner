import { useNavigation } from "@/context/NavigationContext";
import React, { use, useState } from "react";

const NewTaskForm = () => {
  const [title, setTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [link, setLink] = useState("");

  const [pomoCount, setPomoCount] = useState(0);
  const [pomoDuration, setPomoDuration] = useState(0);
  const [pomoShortPause, setPomoShortPause] = useState(0);
  const [pomoLongPause, setPomoLongPause] = useState(0);
  const [longBreakInterval, setLongBreakInterval] = useState(1);

  //   title, OK
  //   description, OK
  //   pomodoroStructure,
  //   ownerID,
  //   priority,
  //   tags,
  //   dueDate,
  //   status,
  //   timeToFinish,
  //   link,

  const { navigate } = useNavigation();

  const [pomodoroStructure, setPomodoroStructure] = useState("");

  // pomoCount: "4"
  // pomoDuration :"20"
  // pomoLongPause: "40"
  // pomoShortPause: "5"
  // Longbreak: 2

  const createPomodoroStructure = () => {
    const pomoStructure = [];

    let totalDuration = 0;

    for (let i = 1; i <= pomoCount; i++) {
      pomoStructure.push({
        type: "pomodoro",
        duration: pomoDuration,
        order: pomoStructure.length + 1,
      });
      totalDuration += parseInt(pomoDuration);

      // const pomodorosQty = pomoStructure.filter(
      //   (pomo) => pomo.type == "pomodoro"
      // ).length;

      // if (i < pomoCount) {
      //   if (pomodorosQty % longBreakInterval === 0) {
      //     pomoStructure.push({
      //       type: "long",
      //       duration: pomoLongPause,
      //       order: pomoStructure.length + 1,
      //     });
      //     totalDuration += parseInt(pomoLongPause);
      //   } else {
      //     pomoStructure.push({
      //       type: "short",
      //       duration: pomoShortPause,
      //       order: pomoStructure.length + 1,
      //     });
      //     totalDuration += parseInt(pomoShortPause);
      //   }
    }

    // console.log(pomoStructure);

    // console.log("Total Duration:", totalDuration, "minutes");

    setPomodoroStructure(pomoStructure);

    return {
      pomodoroStructure: pomoStructure,
      totalDuration: totalDuration,
    };
  };

  // const PomodoroDemoItem = ({ type, duration, order }) => {
  //   return (
  //     <div
  //       className="w-64 h-12 flex justify-center gap-2 bg-blue-500 border-2"
  //       key={order}
  //     >
  //       <p>{type}</p>
  //       <p>{duration}</p>
  //     </div>
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pomodoroStructure = createPomodoroStructure();

    const task = {
      title: title,
      description: taskDescription,
      pomodoroStructure: pomodoroStructure,
      ownerID: "hdaolwdknw",
      priority: priority,
      tags: tags,
      dueDate: dueDate,
      status: 1,
      timeToFinish: pomodoroStructure.totalDuration,
      link: link,
    };

    console.log(task);
  };

  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex gap-2 items-left h-[6%] w-full text-white mb-1">
        <p
          onClick={() => {
            navigate("Pomodoro");
          }}
        >
          {"<--"}
        </p>
        <p>
          Create new <span className="text-red-500">Pomodoro</span> Task
        </p>
      </div>
      <div className="h-[94%] w-full bg-[#262626] rounded-xl p-[5px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 p-4 text-white"
        >
          <div>
            <label htmlFor="taskName">Task Name:</label>
            <input
              className="text-black"
              type="text"
              id="taskName"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="taskDescription">Task description:</label>
            <input
              className="text-black"
              type="text"
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pomoCount">
              How many pomodoros you will spend on this task?
            </label>
            <input
              className="text-black"
              type="number"
              id="pomoCount"
              value={pomoCount}
              onChange={(e) => setPomoCount(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pomoDuration">Pomodoro duration in minutes:</label>
            <input
              className="text-black"
              type="number"
              id="pomoDuration"
              value={pomoDuration}
              onChange={(e) => setPomoDuration(e.target.value)}
            />
          </div>
          <div>
            {/* {pomodoroStructure
              ? pomodoroStructure.map((pomodoro) => {
                  return (
                    <PomodoroDemoItem
                      type={pomodoro.type}
                      duration={pomodoro.duration}
                      order={pomodoro.order}
                    />
                  );
                })
              : ""} */}
            <p>
              This task will take approximately{" "}
              <span>{parseInt(pomodoroStructure.totalDuration / 60)}</span>{" "}
              hours to complete.
            </p>
            <p>
              If you start now, you'll finish by <span>5:00 PM</span>.
            </p>
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </section>
  );
};

export default NewTaskForm;
