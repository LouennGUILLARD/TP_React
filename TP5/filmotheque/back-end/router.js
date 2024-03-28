const express = require("express");

const {findFavoriteByAny,findFavoriteById, findFavoriteByUser, findFavoriteByMovie, addFavorite, updateFavorite,deleteFavorite} = require("./db.js");

const router = express.Router();

router.get("/favorite/", async(req, res) => {
    res.json({
        'retour': `liste de favori`,
    });
;});

router.get("/favorite/:val", async(req, res) => { 
    res.json({
        'retour': `valeur de favori ${req.params.val}`,
    });
;});

router.post("/favorite/", async(req, res) => {
    var data = req.body
    if(!data.user || !data.movie || !data.content){
        res.status(400);
        res.json({
            'error': 'missing parameter',
        });
        return;
    }   
    else{
        res.json({
            'user': `${data.user}`,
            'movie': `${data.movie}`,
            'content': `${data.content}`,
        
    });}});

router.patch("/favorite/:val", async(req, res) => {
    if(!req.params.val){
        res.status(400);
        res.json({
            'error': 'missing body values',
        });
        return;
    }
    var data = req.body
    if(!data.user || !data.movie || !data.content){
        res.status(400);
        res.json({
            'error': 'missing body values',
        });
        return;
    }   
    else{
        res.json({
            'user': `${data.user}`,
            'movie': `${data.movie}`,
            'content': `${data.content}`,
        
    });}});

router.delete("/favorite/:val", async(req, res) => {console.log("suppression d’un favori :val");});

router.use((req, res) => {
    res.status(404);
    res.json({
        error: `${req.method + ":" + req.originalUrl} Page not found`,
    });
});
module.exports = router;