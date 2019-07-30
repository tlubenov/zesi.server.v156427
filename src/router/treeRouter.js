const express = require('express');

function routes(Tree) {
    const treeRouter = express.Router();
    treeRouter.route('/trees')
        .post((req, res) => {
            const tree = new Tree(req.body);

            tree.save();
            return res.status(201).json(tree)
        })
        .get((req, res) => {
            const query = {};
            if(req.query.treeBul) {
                query.treeBul = req.treeBul;
            }
            Tree.find(query, (err, trees) => {
                //console.log(err, trees)
                if(err){
                    return res.send(err)
                }
                return  res.json(trees)
            });
        });

    treeRouter.use('/trees/:treeUid', (req, res, next) => {
        Tree.findById(req.params.treeUid, (err, tree) => {
            //console.log(err, trees)
            if(err){
                return res.send(err)
            }
            if(tree) {
                req.tree = tree;
                return next();
            }
            return  res.sendStatus(404);
        });
    });
    treeRouter.route('/trees/:treeUid')
        .get((req, res) => {
            res.json(req.tree);
        })
        .put((req, res) => {
            const { tree } = req;
            tree.param1 = req.body.param1;
            tree.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(tree);
            });
        })
        .patch((req, res) => {
            const { tree } = req;
            if (req.body._id) {
                delete req.body._id;
            }
            Object.entries(req.body).forEach(item => {
                const key = item[0];
                const value = item[1];
                tree[key] = value;
            });
            req.tree.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(tree);
            });
        })
    return treeRouter
}

module.exports = routes;
