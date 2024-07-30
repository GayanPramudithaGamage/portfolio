import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => setData(data.projects))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold py-4'>PROJECTS</h1>
      <div className='flex md:flex-row space-x-4 overflow-x-auto'>
        {data.length > 0 ? (
          data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Projects;
