module.exports = {
    rota1: (req, res) => {
        let html = `
            <h1>Pagina 1</h1>
            <a href='rota2'>Pagina 2</a>
        `
        res.end(html)
    },
    rota2: (req, res) => {
        let html = `
            <h1>Pagina 2</h1>
            <a href='rota1'>Pagina 1</a>
        `
        res.end(html)
    },
    redirect: (req, res) => {
        if (req.app.page == 1) {
            req.app.page = 2
            res.redirect('rota1')
        } else {
            req.app.page = 1
            res.redirect('rota2')
        }
        
    }
}