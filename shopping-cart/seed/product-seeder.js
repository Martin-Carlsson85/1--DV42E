var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
     new Product({
         imagePath: 'https://shopcdn.textalk.se/shop/ws39/50039/art39/h0341/30760341-origpic-d7d2be.jpg?max-width=250&max-height=250&quality=92&resize=crop',
         title: 'Lorem ipsum dolor sit amet',
         description: 'Mauris bibendum porttitor accumsan',
         price: 10
     }),
     new Product({
         imagePath: 'https://shopcdn.textalk.se/shop/ws39/50039/art39/h1977/31251977-origpic-c59c35.jpg?max-width=250&max-height=250&quality=92&resize=crop',
         title: 'Lorem ipsum dolor sit amet',
         description: 'Mauris bibendum porttitor accumsan',
         price: 20
     }),
     new Product({
         imagePath: 'https://shopcdn.textalk.se/shop/ws39/50039/art39/h1774/31121774-origpic-b9b132.jpg?max-width=250&max-height=250&quality=92&resize=crop',
         title: 'Lorem ipsum dolor sit amet',
         description: 'Mauris bibendum porttitor accumsan',
         price: 40
     }),
     new Product({
         imagePath: 'https://shopcdn.textalk.se/shop/ws39/50039/art39/h0161/30760161-origpic-5b745f.jpg?max-width=250&max-height=250&quality=92&resize=crop',
         title: 'Lorem ipsum dolor sit amet',
         description: 'Mauris bibendum porttitor accumsan',
         price: 15
     }),
     new Product({
         imagePath: 'https://shopcdn.textalk.se/shop/ws39/50039/art39/h0163/30760163-origpic-da4d05.jpg?max-width=250&max-height=250&quality=92&resize=crop',
         title: 'Lorem ipsum dolor sit amet',
         description: 'Mauris bibendum porttitor accumsan',
         price: 50
     })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
         done++;
         if (done === products.length) {
             exit();
         }
     });
 }

 function exit() {
      mongoose.disconnect();
 }
