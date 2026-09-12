import Projects from "../components/Projects";
import ProjectsActionBar from "../components/ProjectsActionBar";
import Task from "@/components/Task";
import WorkspaceInfo from "../components/WorkspaceInfo";
import { getWorkspaceInfo } from "@/utils";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workspaceInfo = await getWorkspaceInfo(id);

  if (!workspaceInfo) throw new Error("Error");
  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-[40px_1fr]">
        <div className="lg:col-start-1 lg:row-start-1">
          <WorkspaceInfo
            id={id}
            name={workspaceInfo.name}
            description={workspaceInfo.description}
            members={workspaceInfo._count.memberships}
            projects={workspaceInfo.projects.length}
          />
          <Projects projects={workspaceInfo.projects} />
        </div>
        <ProjectsActionBar />
        <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2">
          <h2 className="font-medium text-lg mb-2">Your Tasks</h2>
          <div className="">
            {[0, 1, 2].map((i) => (
              <Task key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
