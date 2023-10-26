import { useContext, useEffect, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = ({ id }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [loading, setLoading] = useState(true);
	const [filterDataCompanyInfo, setFilterData] = useState([]);
	const [filterObjectiveDetails, setFilterObjectiveDetails] = useState([]);
	const [filterTechnologies, setFilterTechnologies] = useState([]);
	const [filteredChallenge, setFilteredChallenge] = useState([]);

	useEffect(() => {
		filterProyectData();
	}, [id]);

	const filterProyectData = () => {
		let tecnologies = [];
		let idIterator = 0;

		let filteredComapnyInfo = singleProjectData.ProjectInfo.CompanyInfo.filter(item => item.id === parseInt(id));
		let filteredObjectivesDetails = singleProjectData.ProjectInfo.ObjectivesDetails.filter(item => item.id === parseInt(id));
		let filteredTechnologies = singleProjectData.ProjectInfo.Technologies.filter(item => item.id === parseInt(id));
		let filteredChallenge = singleProjectData.ProjectInfo.ProjectDetails.filter(item => item.id === parseInt(id));

		if (filteredTechnologies[0].techs.length === filteredTechnologies[0].colors.length) {
			for (let i = 0; i < filteredTechnologies[0].techs.length; i++) {
				const techObject = {
					id: idIterator++,
					tech: filteredTechnologies[0].techs[i],
					color: filteredTechnologies[0].colors[i]
				};
				tecnologies.push(techObject);
			}
		} else {
			console.error('Los arreglos no tienen la misma longitud.');
		}

		setFilterData(filteredComapnyInfo[0].info);
		setFilterObjectiveDetails(filteredObjectivesDetails[0].details);
		setFilterTechnologies(tecnologies);
		setFilteredChallenge(filteredChallenge[0].details);

		setLoading(false);
	};

	if (loading) {
		return (
			<button type="button" className="bg-indigo-500" disabled>
				<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
				</svg>
				Processing...
			</button>
		)
	}

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleProjectData.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{filterDataCompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span>{info.title}: </span>
										{info.id === 3
											? (
												<a
													href={info.details}
													target='_blank'
													className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
													aria-label="Project Website and Phone"
												>
													{info.details}
												</a>
											) : (
												<span
													className="dark:text-white"
													aria-label="Project Website and Phone"
												>
													{info.details}
												</span>
											)}
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-justify text-primary-dark dark:text-ternary-light">
						{filterObjectiveDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<div className="flex flex-wrap items-center justify-center">
						{filterTechnologies.map(element => (
							<p key={element.id} className={`mr-2 mt-2 rounded-full ${element.color} py-2 px-4 flex justify-center items-center text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg`}>
								{element.tech}
							</p>
						))}
					</div>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{filteredChallenge.map((details) => {
					if (details.list) {						
						return (
							<ul className="list-disc ps-8" key={details.id}>
								<li									
									className="font-general-regular text-justify mb-5 text-lg text-ternary-dark dark:text-ternary-light"
								>
									{details.details}
								</li>
							</ul>
						);
					} else {
						return (
							<p
								key={details.id}
								className="font-general-regular text-justify mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								{details.details}
							</p>
						);
					}
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
