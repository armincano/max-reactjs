import React, { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
	const [selectedTopic, setSelectedTopic] = useState("");

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	let tabContent = <p>Please select a topic.</p>;

	if (selectedTopic) {
		tabContent = (
			<div>
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	const ulCoreConcepts = CORE_CONCEPTS.map((coreConcept, index) => <CoreConcept key={index} {...coreConcept} />);

	const tabButtons = Object.keys(EXAMPLES).map((topic, index) => (
		<TabButton key={index} isSelected={selectedTopic === topic} onClick={() => handleClick(topic)}>
			{EXAMPLES[topic].title}
		</TabButton>
	));

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<ul>
						{ulCoreConcepts}
					</ul>
				</section>
				<h2>Time to get started!</h2>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{tabButtons}
					</menu>
					<div id="tab-content">{tabContent}</div>
				</section>
			</main>
		</div>
	);
}

export default App;
