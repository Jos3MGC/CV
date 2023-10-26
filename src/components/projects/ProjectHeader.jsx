import { useContext, useEffect, useState } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = ({ id }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [filterData, setFilterData] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		filterProyectData()
	}, [id]);

	const filterProyectData = () => {
		let filtered = singleProjectData.ProjectHeader.filter(item => item.id === parseInt(id));

		setFilterData(filtered[0]);
	};

	return (
		<div>
			<div className="flex justify-between items-end">
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{filterData.title}
				</p>
				<button class="flex items-center justify-evenly bg-blue-500 hover:bg-blue-700 h-3/5 text-white font-bold py-2 px-4 rounded-full" onClick={() => { navigate(-1) }}>
					<BsFillArrowLeftCircleFill className="mx-2" /> Back
				</button>
			</div>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{filterData.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{filterData.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
