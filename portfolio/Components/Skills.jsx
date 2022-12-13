import React from 'react'
import SkillsCard from './SkillsCard';
import skillsSubCategory1 from '../DataBase/SkillsSubCategory1';
import skillsSubCategory2 from '../DataBase/SkillsSubCategory2';
import skillsSubCategory3 from '../DataBase/SkillsSubCategory3';
const Skills = () => {
    return (
        <>
            <div className="container py-5" style={{justifyContent:"center",alignItems:"center"}}>
                    <h1 className='hero-h1 py-5' style={{ textAlign: "center", fontSize: "36px" }}>
                        Skills
                    </h1>
                <div className="row pb-5 skills-main-div" style={{justifyContent:"center"}}>
                    <SkillsCard title={"Frontend Development"} skills={skillsSubCategory1}/>
                    <SkillsCard title={"Backend Development"} skills={skillsSubCategory2}/>
                    <SkillsCard title={"Programming Language"} skills={skillsSubCategory3}/>
                </div>
            </div>
        </>
    )
}

export default Skills