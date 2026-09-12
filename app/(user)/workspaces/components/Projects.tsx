"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function Projects({
  projects = [],
}: {
  projects: {
    id: string;
    name: string;
    description: string | null;
    _count: {
      tasks: number;
    };
    tasks: {
      isDone: boolean;
    }[];
  }[];
}) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [originalHeight, setOriginalHeight] = useState(0);
  useLayoutEffect(() => {
    if (projectsRef.current) {
      const rect = projectsRef.current.getBoundingClientRect();
      setOriginalHeight(projectsRef.current.scrollHeight);
    }
  }, [projectsRef]);
  return (
    <motion.div
      className={`border border-slate-200 h-fit bg-slate-100 rounded-md py-3 overflow-hidden relative mb-3`} // shadow-[0_-60px_30px_-25px_#00000077_inset]
      ref={projectsRef}
    >
      <h2 className="font-medium text-center text-lg mb-2">
        Workspace projects
      </h2>
      {projects.map(({ id, name, description, _count }) => (
        <div
          className={`borer border-slate-300 bg-slate-10 p-3 block not-last:border-b hover:bg-slate-200`}
          key={id}
        >
          <h3 className="font-medium overflow-hidden text-ellipsis text-nowrap">
            {name}
          </h3>
          <p className="text-sm text-slate-700 line-clamp-1 my-1">
            {description}
          </p>
          <div className="flex gap-2 mb-1">
            <p className="text-sm text-slate-700">
              <span className="font-medium text-slate-800">{_count.tasks}</span>{" "}
              Total tasks
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-medium text-slate-800">3</span> Your tasks
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="h-2 w-full bg-blue-200 rounded-full overflow-hidden">
              <div className="h-full w-[48%] bg-blue-600 rounded-full" />
            </div>
            <p className="text-blue-600 font-medium">48%</p>
          </div>
        </div>
      ))}
      {/* <button className="absolute bottom-2 left-1/2 translate-x-[-50%] rounded-full text-white bg-white/10 backdrop-blur-sm size-7 grid place-items-center shadow-[0_2px_10px_0_#fff] hover:bg-white/20">
        <ChevronDown size={22} />
      </button> */}
    </motion.div>
  );
}

export default Projects;
