exports.projectHome = (req, res) => {
    res.render('Index', {
        pageName: 'Projects '
    });
}

exports.projectWe = (request, response) => {
    response.render('We', {
        pageName: 'We projects'
    }); 
}