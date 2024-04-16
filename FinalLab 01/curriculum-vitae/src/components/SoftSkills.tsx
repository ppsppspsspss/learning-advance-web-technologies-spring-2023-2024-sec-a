interface Props {
    skills: string[];
}

function SoftSkills({ skills }: Props) {
    return (
        <>
            <div>
                <h2>Soft Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SoftSkills;