function tempo() {
	const dynamic_date = new Date();

	response.json({
		date: dynamic_date.toGMTString()
	});
}

export default tempo;