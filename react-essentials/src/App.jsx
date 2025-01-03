import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	const description = reactDescriptions[genRandomInt(genRandomInt(2))];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}

function CoreConcept({image, title, description}) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0].title} />
						<CoreConcept {...CORE_CONCEPTS[1].title} />
						<CoreConcept {...CORE_CONCEPTS[2].title} />
						<CoreConcept {...CORE_CONCEPTS[3].title} />
					</ul>
				</section>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
