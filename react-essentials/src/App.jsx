import React, { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
	const [selectedTopic, setSelectedTopic] = useState("components");

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

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
						<TabButton onClick={() => handleClick("components")}>
							Components
						</TabButton>
						<TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
						<TabButton onClick={() => handleClick("props")}>Props</TabButton>
						<TabButton onClick={() => handleClick("state")}>State</TabButton>
					</menu>
					<div id="tab-content">
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
