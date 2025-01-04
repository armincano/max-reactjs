import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<h2>Time to get started!</h2>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton>Components</TabButton>
						<TabButton>JSX</TabButton>
						<TabButton>Props</TabButton>
						<TabButton>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
