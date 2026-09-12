import { Circle } from "lucide-react";
import React from "react";

function Task() {
  return (
    <div className="border p-2 rounded-md border-slate-200 bg-slate-100 not-last:mb-2">
      <div className="flex items-center gap-2 h-6 mb-1">
        <button className="size-6 grid place-items-center">
          <Circle size={20} />
        </button>
        <h3 className="font-medium">Task name</h3>
      </div>
      <div className="pl-8">
        <p className="text-sm text-slate-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
          maxime.
        </p>
        <hr className="border-slate-300 w-30 my-2" />
        <div className="">
          <div className="flex gap-2">
            <p className="text-sm text-slate-600">
              Created:{" "}
              <span className="text-slate-800 font-medium">2 days</span>
            </p>
            <p className="text-sm text-slate-600">
              Due in:{" "}
              <span className="text-slate-800 font-medium">18 hours</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
