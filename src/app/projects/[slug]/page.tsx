
import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProjectsDetails from "@/app/portfolio/ProjectsDetails";
import { getProjectBySlug, projects } from "@/lib/projects";

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Prokash Das",
    };
  }

  return {
    title: `${project.title} | Prokash Das`,
    description: project.description,
  };
}

async function ProjectDetailsContent({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectsDetails project={project} />;
}

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  return (
    <Suspense fallback={<div>Loading project details...</div>}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}
