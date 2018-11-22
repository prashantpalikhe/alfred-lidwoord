const alfy = require('alfy');
const axios = require('axios');
const cheerio = require('cheerio');

const VALID_RESULTS = ['de', 'het'];

const util = {
	async getArticle(word) {
		const fallbackResult = 'De of het';

		try {
			debugger;
			const response = await axios.get(`https://www.welklidwoord.nl/${ word }`);
			const html = response.data;

			const $ = cheerio.load(html);
			const result = $('#content > h1 > span').text();

			if (VALID_RESULTS.includes(result.toLowerCase())) {
				return result;
			}

			return fallbackResult;
		} catch (e) {
			return fallbackResult;
		}
	}
}


module.exports = util;
