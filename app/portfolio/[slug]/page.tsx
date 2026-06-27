import { portfolioProjects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ClientPage from "./ClientPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | RH International",
    };
  }

  return {
    title: `${project.title} | Portfolio | RH International`,
    description: project.overview,
    keywords: [project.category, ...project.techStack, "RH International Portfolio", "Case Study"],
    openGraph: {
      title: `${project.title} | RH International`,
      description: project.overview,
      images: [{ url: project.image }],
    },
  };
}

export default async function SinglePortfolioPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ClientPage project={project} />;
}
