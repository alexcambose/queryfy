const queryfy = (obj, url) => {

	//if the first parameter is the url that needs to be prepended
	if(typeof obj === 'string' && typeof url === 'object')
		url = [obj, obj = url][0]; //switch obj <-> url
	
	let query = '';
	//iterate over object keys
	for(let key of Object.keys(obj)){
		let keyValue = encodeURIComponent(obj[key]);
		query += `${key}=${keyValue}&`;
	}
	//remove last &
	query = query.substring(0, query.length-1);

	return (url ? url + '?' : '') + query;
}

const deQueryfy = URI => {
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

if (typeof window != "undefined") {
	window.queryfy = queryfy;
	window.deQueryfy = deQueryfy;
} else {
	module.exports.queryfy = queryfy;
	module.exports.deQueryfy = deQueryfy;
}