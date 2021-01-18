import Image from 'next/image';
import Link from 'next/link';
import Document from 'next/document';
import Html from 'next/document';
import Head from 'next/head';

function Pequenata(props) {
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

	var chapter_number_text = "Chapter number is";

	return (
      <Html>
        <Head>
			<script type="text/javascript" src="/static/Redirect.js"></script>
			<script>Define_Language();</script>
		</Head>
        <body>
			<div id="main_div">
				<div>
				{chapter_number_text}: <span id="chapter_number_text">[placeholder]</span>
				</div>
			</div>
        </body>
      </Html>

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

export default Pequenata;