const OAuthController = require('./oauth-controller');
const { uuid } = require('uuidv4');
const PayeeService = require('../services/payee/payeeService');

const config = require('../config').Config;
const payeeService = new PayeeService();

class ProductsController {

    products = {};

    chooseProduct = async (req, res) => {
        res.render('chooseProduct', { title: "Choose product" });
    }

    storeProduct = async (req, res) => {
        const id = uuid();
        this.products[id] = {
            id: id,
            pkgName: req.body.pkgName,
            startDate: Math.round(new Date().getTime() / 1000),
            amount: req.body.txtAmount,
        };

        res.redirect(`/products/add_payee?appid=${id}`);
    }

    authorizePayee = async (req, res) => {
        if (!OAuthController.isLoggedIn(req)) {
            req.session.targetUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            req.session.save();
            res.redirect('/login');
            return;
        }

        let id = req.query.appid;
        const r = await payeeService.authorizePayee(req, res,
                OAuthController.getAuthToken(req).access_token,
                this.products[id]);
        if (r != "consent") {
            res.send("Status of payee application: " + r);
        }
    }

    getProducts = async (req, res) => {
        let p = [];
        for (var x in this.products) {
            p.push(this.products[x]);
        }

        res.render('products', {
            products: p,
            title: "My products" })
    }
}

module.exports = ProductsController;