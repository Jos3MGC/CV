import { useContext, useEffect, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = ({ id }) => {
	const { singleProjectData } = useContext(SingleProjectContext);

	const [filterData, setFilterData] = useState([]);

	useEffect(() => {
		filterProyectData()
	}, [id]);

	const filterProyectData = () => {
		let filtered = singleProjectData.ProjectImages.filter(item => item.id === parseInt(id));

		console.log(filtered[0].img);
		setFilterData(filtered[0].img);
	};

	return (
		<div className="grid grid-cols-1 p-10 md:p-0 sm:grid-cols-3 sm:gap-10 mt-12">
			{filterData.map((project) => {
				return (
					<div className="contenedorImagenesMuestra mt-4">
						<img
							src={project}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt="Image"
							key={project}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
