var srvNm = process.env.DOM_SRV || '';
var dbNm = process.env.DOM_DB || 'LocalScratchBox.nsf';

module.exports = {
	db: {server:srvNm,database:dbNm}
};