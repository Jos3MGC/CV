import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { Link } from 'react-router-dom';

const ProjectRelatedProjects = ({ id }) => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="flex justify-center align-center">
				<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{singleProjectData.RelatedProject.Projects.map((project) => {
						if (project.id !== parseInt(id)) {
							return (
								<Link key={project.id} to={`/projects/single-project/${project.id}`} aria-label="Single Project">
									<div className="contenedorImagenes">
										<img
											src={project.img}
											className="rounded-xl cursor-pointer"
											alt={project.title}
											key={project.id}
										/>
									</div>
								</Link>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
