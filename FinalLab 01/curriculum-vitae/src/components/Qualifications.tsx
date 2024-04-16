interface School {
    name: string;
    degree: string;
    grade: string;
}

interface College {
    name: string;
    degree: string;
    grade: string;
}

interface University {
    name: string;
    degree: string;
    cgpa: string;
}

interface Props {
    school: School;
    college: College;
    university: University;
}

function Qualifications({ school, college, university }: Props) {
    return (
        <>
            <div>
                <h2>Qualifications</h2>
                <table border={1} cellSpacing={0} width={1300} cellPadding={20}>
                    <thead>
                        <tr>
                            <th>Institution</th>
                            <th>Degree</th>
                            <th>Grade/CGPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{school.name}</td>
                            <td>{school.degree}</td>
                            <td>{school.grade}</td>
                        </tr>
                        <tr>
                            <td>{college.name}</td>
                            <td>{college.degree}</td>
                            <td>{college.grade}</td>
                        </tr>
                        <tr>
                            <td>{university.name}</td>
                            <td>{university.degree}</td>
                            <td>{university.cgpa}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Qualifications;