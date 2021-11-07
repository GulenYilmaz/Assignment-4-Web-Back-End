
//require express
const express = require("express");
const cors = require("cors");
const complimetCtrl= require('./controller.js')
// set app variable equal to express
const app = express();

//MiddleWare
//top level middleware for JSON body parser
app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

// from controller file
// short way
app.get('/api/compliment', complimetCtrl.getComplimet);
app.delete('apicomplimet:id',complimetCtrl.deleteComplimet);
app.post('/api/compliment', complimetCtrl.addCompliment);
app.put('/api/complimet//:id', complimetCtrl.updateComplimet);







// long way

app.get("/api/compliment", (req, res) => {
const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           "A pleasant surprise is waiting for you.",
           "Believe it can be done.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
})

 // get all compliment
 app.get('/api/compliment', (req, res) => {
  res.status(200).send(compliments);
  console.log(compliments);
});

//filter the compliments
  app.get('/api/compliment',(req,res) =>{//handle functions
    if (req.query.oneCompliment){

      const  filteredCompliment= compliments.filter(randomCompliment =>{
        return randomCompliment.toLocaleLowerCase().includes(req.query.oneCompliment).toLocaleLowerCase();
      });

      res.status(200).send(filteredCompliment);
    }else{
      res.status(200).send(compliments);
   }
  });

  app.get('/api/compliment/:id',(req,res) =>{

    console.log("Param : ", +req.params);
    res.status(200).send(compliment[+req.params.id]);
  });











// first additional features
app.get("/api/fortunes", (req, res) => {
const fortunes =[
  "Curiosity kills boredom. Nothing can kill curiosity.",
  "Don’t let friends impose on you, work calmly and silently.",
  "Happy life is just in front of you.",
  "Happiness will bring you good luck.",
  "Happiness begins with facing life with a smile and a wink."
                 ];
  // choose random fortunes
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomfortunes = fortunes[randomIndex];

  res.status(200).send(randomfortunes);
  
});
 // get all fortunes
 app.get('/api/compliment', (req, res) => {
  res.status(200).send(compliments);
  console.log(compliments);
});

//filter the fortunes
  app.get('/api/fortunes',(req,res) =>{//handle functions
    if (req.query.onefortune){

      const  filteredfortunes= fortunes.filter(randomfortunes =>{
        return randomfortunes.toLocaleLowerCase().includes(req.query.onefortune).toLocaleLowerCase();
      });

      res.status(200).send(filteredfortunes);
    }else{
      res.status(200).send(fortunes);
   }
  });

  app.get('/api/fortunes/:id',(req,res) =>{

    console.log("Param : ", +req.params);
    res.status(200).send(fortunes[+req.params.id]);
  });










// second additional features
app.get("/api/photos", (req, res) => {
const photos =[
"birthday photos.",
"Congrat photos.",
"Annuversary photos.",
"Good luck photos.",
"New born photos."
 ];
  // choose random photos
  let randomIndex = Math.floor(Math.random() * photos.length);
  let randomphotos = photos[randomIndex];

  res.status(200).send(randomphotos);
});
 // get all photos
 app.get('/api/photos', (req, res) => {
  res.status(200).send(photos);
  console.log(photos);
});

//filter the photos
  app.get('/api/photos',(req,res) =>{//handle functions
    if (req.query.onephoto){

      const  filteredphotos= photos.filter(randomphotos =>{
        return randomphotos.toLocaleLowerCase().includes(req.query.onephoto).toLocaleLowerCase();
      });

      res.status(200).send(filteredphotos);
    }else{
      res.status(200).send(photos);
   }
  });

  app.get('/api/photos/:id',(req,res) =>{

    console.log("Param : ", +req.params);
    res.status(200).send(photos[+req.params.id]);
  });












// third additional features
app.get("/api/cards", (req, res) => {
const cards =[
"birthday cards.",
"Congrat cards.",
"Annuversary cards.",
"Good luck cards.",
"New born cards."
];
  // choose random cards
  let randomIndex = Math.floor(Math.random() * cards.length);
  let randomcards = cards[randomIndex];

  res.status(200).send(randomcards);  
});
// get all cards
app.get('/api/cards', (req, res) => {
  res.status(200).send(cards);
  console.log(cards);
});

//filter the cards
  app.get('/api/cards',(req,res) =>{//handle functions
    if (req.query.onecard){

      const  filteredcards= cards.filter(randomcards =>{
        return randomcards.toLocaleLowerCase().includes(req.query.onecard).toLocaleLowerCase();
      });

      res.status(200).send(filteredcards);
    }else{
      res.status(200).send(cards);
   }
  });

  app.get('/api/cards/:id',(req,res) =>{

    console.log("Param : ", +req.params);
    res.status(200).send(cards[+req.params.id]);
  });









// forth additional features
app.get("/api/flowers", (req, res) => {
  const flowers =[
  "birthday flowers.",
  "Congrat flowers.",
  "Annuversary flowers.",
  "Good luck flowers.",
  "New born flowers."
  ];               

  // choose random flowers
  let randomIndex = Math.floor(Math.random() * flowers.length);
  let randomflowers = flowers[randomIndex];

  res.status(200).send(randomflowers);
});
// get all flowers
app.get('/api/flowers', (req, res) => {
  res.status(200).send(flowers);
  console.log(flowers);
});

//filter the flowers
  app.get('/api/flowers',(req,res) =>{//handle functions
    if (req.query.oneflower){

      const  filteredflower= flowers.filter(randomflowers =>{
        return randomflowers.toLocaleLowerCase().includes(req.query.oneflower).toLocaleLowerCase();
      });

      res.status(200).send(filteredflowers);
    }else{
      res.status(200).send(flowers);
   }
  });

  app.get('/api/flowers/:id',(req,res) =>{

    console.log("Param : ", +req.params);
    res.status(200).send(flowers[+req.params.id]);
  });













// app.lister --> takes two params:
//1) server port number
//2) callback function that console.log() s message
app.listen(4000, () => console.log("Server running on 4000"));
