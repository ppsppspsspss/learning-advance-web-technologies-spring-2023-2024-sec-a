interface Props {
    skills: string[];
}

function HardSkills({ skills }: Props) {
    return (
        <>
            <div>
                <h2>Hard Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default HardSkills;