import Image from 'next/image';
import Link from 'next/link';

function Tempo(props) {
	var chapter_number;
	var chapter_titles_file;
	var cdn_folder, cdn_texts_folder, stories_folder, pequenata_story_folder;

	cdn_folder = "/cdn/";
	cdn_texts_folder = cdn_folder + "texts/";

	stories_folder = cdn_texts_folder + "Historias/";
	pequenata_story_folder = stories_folder + "Pequenata - Littletato/";
	chapter_titles_file = pequenata_story_folder + "CapTitles ENUS.txt";

	console.log(chapter_titles_file);
	fetch(chapter_titles_file)
		.then(function(response) {
			response.text().then(function(text) {
				chapter_number = text.split("\n");
				document.getElementById('chapter_number_text').textContent = chapter_number.length;
			});
		});

	return (
		<div id="main_div">
			<div>
				Chapter number is: <span id="chapter_number_text">Placeholder</span>
			</div>
		</div>
	)
}

export function getStaticProps() {
	const staticDate = new Date();
	const staticDateString = staticDate.toGMTString();

	return {
		props: {
			staticDateString
		},
		revalidate: 1
	}
}

export default Tempo;