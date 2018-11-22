const alfy = require('alfy');
const reduce = require('lodash/reduce');
const { getArticle } = require('./util');

async function main() {
	try {
		const words = alfy.input.split(' ').filter(word => !!word.trim());

		const articles = {};

		for (let word of words) {
			articles[word] = await getArticle(word);
		}

		const alfyOutput = reduce(articles, (output, article, word) => {
			output.push({
				title: `${ article } ${ word }`
			});

			return output;
		}, []);

		alfy.output(alfyOutput);
	} catch (e) {
		alfy.error(e.message);
	}
}

main();
