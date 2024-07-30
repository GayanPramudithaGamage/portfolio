import React from 'react'

function Skills() {
  const skills = ["Python","Java", "HTML", "CSS", "Javascript", "React","VueJs", "ExpressJS","MySQL","MongoDB","Firebase","Swift","Android","Git","Flask"]
  return (
    <div className='container mx-auto px-4'>
    <div>
        <h1 className='text-3xl font-bold py-4'>SKILLS</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xl'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-gray-200 p-4 rounded-md shadow-md'>
              {skill}
            </div>
          ))}
          </div>
        
    </div>

    </div>
  )
}

export default Skills