import Layout from "../component/layout";

function CCoffee({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default CCoffee;
