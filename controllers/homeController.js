module.exports = {

    homeView: (req, res) => {
        res.render('homepage', {
            loggedInUser: req.session.user || null,
        });
    }

}