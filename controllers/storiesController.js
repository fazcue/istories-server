const db = require('../models')

const { Stories } = db

const productsController = {
	get: async (req, res) => {
		const { lang } = req.params

		const stories = await Stories.findAll({
			where: { lang },
			attributes: [
				'id',
				'family',
				'lang',
				'title',
				'slug',
				'description',
				'thumbnail',
				'parts',
			],
		})
		return res.json(stories)
	},
	getOne: async (req, res) => {
		const { slug, lang } = req.params

		console.log('getOne, ', slug, lang)

		const stories = await Stories.findOne({
			where: { lang: lang, slug: slug },
			attributes: [
				'id',
				'family',
				'lang',
				'title',
				'slug',
				'description',
				'thumbnail',
				'parts',
			],
		})
		return res.json(stories)
	},
	getLocales: async (req, res) => {
		const { family } = req.params

		console.log('getLocales, ', family)

		const stories = await Stories.findAll({
			where: { family: family },
			attributes: ['id', 'lang', 'slug'],
		})
		return res.json(stories)
	},
}

module.exports = productsController
