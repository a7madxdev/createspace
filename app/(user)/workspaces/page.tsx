import Link from "next/link";
import WorkspacesActionBar from "./components/WorkspacesActionBar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button from "@/components/Button";
import NoWorkspaces from "./components/NoWorkspaces";
import { getMemberships } from "@/utils";

export default async function Workspaces() {
  const session = await auth();
  if (!session) redirect("/signin");
  const memberships = await getMemberships(session);
  return (
    <>
      <WorkspacesActionBar />
      {memberships.length < 1 ? (
        <NoWorkspaces />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 py-3">
          {memberships.map(
            ({
              workspace: {
                id,
                name,
                description,
                _count: { memberships, projects },
              },
            }) => (
              <Link
                href={`/workspaces/${id}`}
                className="border border-slate-200 bg-slate-100 p-2 rounded-md"
                key={id}
              >
                <h2 className="mb-1 font-medium">{name}</h2>
                <div className="flex gap-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-medium text-slate-800">
                      {memberships}
                    </span>{" "}
                    Members
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium text-slate-800">
                      {projects}
                    </span>{" "}
                    Projects
                  </p>
                </div>
                {description && <hr className="w-25 border-slate-300 my-1" />}
                <p className="text-sm">{description}</p>
              </Link>
            ),
          )}
        </div>
      )}
    </>
  );
}
