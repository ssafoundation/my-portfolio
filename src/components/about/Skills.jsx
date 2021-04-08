import React from 'react';
import SkillBar from 'react-skillbars';
// const SKILLS = [
//     {
//         "type":"Creativity:",
//         "level": 90,
//     },
//     {
//         "type":"Team_Work:",
//         "level": 90,
//     },
//     {
//         "type":"Communication:",
//         "level": 90,
//     },
// ]
const SKILLS2 = [
    {
        "type": "HTML 5",
        "level": 90,
    },
    {
        "type": "CSS 3",
        "level": 85,
    },
    {
        "type": "BOOTSTRAP 4+",
        "level": 92,
    },
    {
        "type": "JavaScript",
        "level": 80,
    },
    {
        "type": "PHP",
        "level": 65,
    },
]
const colors = {
    "bar": "#d1d",
    "background": "#d1d",
    "title": {
        "text": "#fff",
    }
}
const Skills = () => {
    return (
        <div className="skill-main-area">
            {/* <div className="academic-content">
                <h4>WORK SKILLS:</h4>
                <div className="skills-area">
                    <h5><SkillBar skills={SKILLS} colors={colors} /></h5>
                </div>
            </div> */}
           
            <div className="academic-content">
                <h4>CODING SKILLS</h4>
                <div className="skills-area">
                    <h5><SkillBar skills={SKILLS2} colors={colors} /></h5>
                </div>
            </div>
        </div>
    );
};

export default Skills;