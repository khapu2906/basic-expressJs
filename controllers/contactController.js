
const path = require('path')
const fs = require('fs')

module.exports = {
	index: (req, res) => {
		return res.sendFile(path.join(__dirname, './../views/contact.html'))
	},
	store: (req, res) => {
		const fileName = 'contact.txt'
		let file = fs.readFileSync(path.join(__dirname, `/../storage/${fileName}`))
		file = file.toString();
		let contacts = JSON.parse(file);
		contacts[Object.keys(contacts).length.toString()] = req.body
		console.log(contacts, req.body, Object.keys(contacts).length)
		contacts = JSON.stringify(contacts)
		fs.writeFileSync(path.join(__dirname, `/../storage/${fileName}`), contacts)
		return res.redirect('/contact')
	}
}