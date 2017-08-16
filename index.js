module.exports.queryfy = obj => {
	let query = '';
	//iterate over object keys
	for(let key of Object.keys(obj)){
		let keyValue = encodeURIComponent(obj[key]);
		query += `${key}=${keyValue}&`;
	}
	//remove last &
	query = query.substring(0, query.length-1);

	return '?' + query;
}

module.exports.deQueryfy = URI => {
	let obj = {};
	URISplit = URI.split('?');
	//get the last part after ?
	let query = URISplit[URISplit.length-1];

	const paramBlocks = query.split('&');
	//iterate over each param block
	for(let block of paramBlocks){
		let blockSplit = block.split('=');
		obj[blockSplit[0]] = decodeURIComponent(blockSplit[1]);
	}

	return obj;
}


