interface Project {
    title: string;
    description: string;
}

interface Props {
    projects: Project[];
}

function Projects({ projects }: Props) {
    return (
        <>
            <div>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Projects;