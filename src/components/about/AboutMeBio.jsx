import profileImage from '../../images/profile-pic.jpg';
import {
	FaAngular,
	FaReact,
	FaJava,
	FaPython
} from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';

const AboutMeBio = () => {

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p
					className="mb-4 text-justify text-ternary-dark dark:text-ternary-light text-lg"
				>
					I am a passionate Junior Frontend Developer with a specialized focus on <strong className='text-lime-600'>React Native and Js</strong> and Backend Developer focus on <strong className='text-lime-600'>Java (SpringBoot)</strong>.
					My career is characterized by the perfect combination of technical skills and soft skills that make me a valuable asset in any development team as well as developing APIs,
					I am ready to contribute to the success of challenging projects and continue growing as a professional in the exciting world of software development.
				</p>

				<h3 className='text-ternary-dark dark:text-ternary-light underline decoration-double text-lg mb-3'>Teconologies:</h3>

				<div className="flex flex-wrap items-center justify-center">
					<p className="mr-2 mt-2 rounded-full bg-violet-800 py-4 px-8 flex justify-center items-center text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
					>
						<FaAngular className='mr-2' size={22} />
						Angular
					</p>
					<p className="mr-2 mt-2 rounded-full bg-sky-400 py-4 px-8 flex justify-center items-center text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
					>
						<FaReact className='mr-2' size={22} />
						React
					</p>
					<p className="mr-2 mt-2 rounded-full bg-teal-600 py-4 px-8  flex justify-center items-center text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
					>
						<FaJava className='mr-2' size={22} />
						Java
					</p>
					<p className="mr-2 mt-2 rounded-full bg-lime-600 py-4 px-8 flex justify-center items-center text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
						<FaPython className='mr-2' size={22} />
						Python
					</p>
					<p className="mr-2 mt-2 rounded-full bg-yellow-500 py-4 px-8 flex justify-center items-center text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
						<BiLogoJavascript className='mr-2' size={22} />
						JavaScript
					</p>
					<p className="mr-2 mt-2 rounded-full bg-amber-700 py-4 px-8 flex justify-center items-center text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
						<SiMysql className='mr-2' size={22} />
						MySQL
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
