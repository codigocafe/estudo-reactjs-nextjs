import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Home({ user }) {
	return (
		<div>
			<Head>
				<title>Código Café</title>
				<meta name="description" content="Primeiro app NextJS dá código Café" />
			</Head>

			<h1>{user.name}</h1>
			<h2>{user.company}</h2>
			<Image src={user.avatar_url} width={100} height={100} alt={user.name} />
			<p>
				<a href={user.html_url} target="_blank" style={{ color: "white", backgroundColor: "red", padding: 20, textDecoration: "none" }}>
					Link do perfil
				</a>
			</p>
		</div>
	);
}

export async function getStaticProps() {
	const responseUser = await fetch("https://api.github.com/users/codigocafe");
	const user = await responseUser.json();

	return {
		props: {
			user,
		},
	};
}

export default Home;
