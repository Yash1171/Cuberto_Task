import ProjectsGrid from "@/components/projects-grid"
import ProjectCategories from "@/components/project-categories"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProjectCategories />
      <ProjectsGrid />
    </main>
  )
}

