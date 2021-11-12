const express = require("express");
const cors = require("cors");

const eventAllList=[];
const eventAllCount=0;

const app = express();

app.use(cors());
app.use(express.json()); 

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

//POST comliment events
app.post("/api/events/", (req, res) => {
  let {eventsComplimentName} = req.body;
  let newEvents = {
    id: eventAllCount + 1
  };
  eventAllCount++;
  eventAllList.push(newEvents);
  res.status(200).send(eventAllList);
});

//PUT comliment events
app.put('/api/events/:id', (req, res) => {
  const eventIndex = eventAllList.findIndex((event) => {
    return event.id === +req.params.id;
  });
  eventAllList[eventIndex].status = "checked";
  res.status(200).send(eventAllList);
});

//DELETE comliment events

app.delete('/api/events/:id', (req, res) => {
  const eventIndex = eventAllList.findIndex((event) => {
    return event.id === +req.params.id;
  });
  eventAllList.splice(eventIndex, 1);
  res.status(200).send(eventAllList);
});

app.listen(4000, () => console.log("Server running on 4000"));

// // first additional features
// app.get("/api/fortunes", (req, res) => {
// const fortunes =[
//   "Curiosity kills boredom. Nothing can kill curiosity.",
//   "Don’t let friends impose on you, work calmly and silently.",
//   "Happy life is just in front of you.",
//   "Happiness will bring you good luck.",
//   "Happiness begins with facing life with a smile and a wink."
//                  ];
//   // choose random fortunes
//   let randomIndex = Math.floor(Math.random() * fortunes.length);
//   let randomfortunes = fortunes[randomIndex];

//   res.status(200).send(randomfortunes);
  
// });
//  // get all fortunes
//  app.get('/api/compliment', (req, res) => {
//   res.status(200).send(compliments);
//   console.log(compliments);
// });

// // second additional features
// app.get("/api/photos", (req, res) => {
// const photos =[
// "birthday photos.",
// "Congrat photos.",
// "Annuversary photos.",
// "Good luck photos.",
// "New born photos."
//  ];
//   // choose random photos
//   let randomIndex = Math.floor(Math.random() * photos.length);
//   let randomphotos = photos[randomIndex];

//   res.status(200).send(randomphotos);
// });
//  // get all photos
//  app.get('/api/photos', (req, res) => {
//   res.status(200).send(photos);
//   console.log(photos);
// });

// // third additional features
// app.get("/api/cards", (req, res) => {
// const cards =[
// "birthday cards.",
// "Congrat cards.",
// "Annuversary cards.",
// "Good luck cards.",
// "New born cards."
// ];
//   // choose random cards
//   let randomIndex = Math.floor(Math.random() * cards.length);
//   let randomcards = cards[randomIndex];

//   res.status(200).send(randomcards);  
// });
// // get all cards
// app.get('/api/cards', (req, res) => {
//   res.status(200).send(cards);
//   console.log(cards);
// });

// // forth additional features
// app.get("/api/flowers", (req, res) => {
//   const flowers =[
//   "birthday flowers.",
//   "Congrat flowers.",
//   "Annuversary flowers.",
//   "Good luck flowers.",
//   "New born flowers."
//   ];               

//   // choose random flowers
//   let randomIndex = Math.floor(Math.random() * flowers.length);
//   let randomflowers = flowers[randomIndex];

//   res.status(200).send(randomflowers);
// });
// // get all flowers
// app.get('/api/flowers', (req, res) => {
//   res.status(200).send(flowers);
//   console.log(flowers);
// });