import Image from 'next/image';
import Link from 'next/link';
import Document from 'next/document';
import Html from 'next/document';
import Head from 'next/head';

function Pequenata(props) {
	return (
      <Html>
        <Head>
			<script type="text/javascript" src="/static/Redirect.js"></script>
		</Head>
        <body>
			<div id="main_div">
				<div>
				Test: <span id="chapter_number_text">[placeholder]</span>
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