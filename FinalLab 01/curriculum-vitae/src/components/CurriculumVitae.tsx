import About from "./About";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import Projects from "./Projects";
import Qualifications from "./Qualifications";
import defaultpfp from "../assets/defaultpfp.png";

function CurriculumVitae() {

    const softSkills = ["Communication", "Teamwork", "Problem-solving", "Time Management"];
    const hardSkills = ["C++", "JavaScript", "Python", "C#", "NestJS"];
    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam nisi sed ligula commodo, vel suscipit odio congue. Sed nec lacus sit amet turpis sollicitudin feugiat. Integer nec felis id libero aliquet interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris id nunc sed metus vestibulum consequat. Cras gravida risus in magna commodo, at lacinia felis vehicula."
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam nisi sed ligula commodo, vel suscipit odio congue. Sed nec lacus sit amet turpis sollicitudin feugiat. Integer nec felis id libero aliquet interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris id nunc sed metus vestibulum consequat. Cras gravida risus in magna commodo, at lacinia felis vehicula."
        },
    ];

    const qualifications = {
        school: {
            name: "Quality Education School",
            degree: "SSC",
            grade: "4.67"
        },
        college: {
            name: "Quality Education College",
            degree: "HSC",
            grade: "4.75"
        },
        university: {
            name: "American International University-Bangladesh",
            degree: "BSc",
            cgpa: "3.83"
        }
    };

    return (
        <>
            <div>
                <About
                    name="Rianul Amin"
                    role="Software Developer"
                    phone="01402246680"
                    email="rianulamin.r@gmail.com"
                    address="290/1 A Khilgaon Railgate"
                    summary="Adept IT professional offering vast experience leveraging software engineering and dev-ops methodologies to deliver highly effective and creative solutions to business and technology challenges. Utilizes highly attuned analytical skills to develop IT and business strategies employing cutting-edge technologies to increase productivity by orchestrating agile and resilient systems at scale."
                />
                <img src={defaultpfp} style={{ position: 'absolute', top: '50px', right: '230px', width: '200px', height: '200px'}} />
                <Qualifications 
                school={qualifications.school}
                college={qualifications.college}
                university={qualifications.university} 
                /> 
                <SoftSkills skills={softSkills}/>
                <HardSkills skills={hardSkills}/>
                <Projects projects={projects}/>
            </div>
        </>
    )
}

export default CurriculumVitae;