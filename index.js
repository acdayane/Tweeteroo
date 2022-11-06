import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [{
  id: 1,
  username: 'bobesponja',
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];

const tweets = [{
  id: 1,
  username: "bobesponja",
  tweet: "eu amo o hub",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}]

app.post('/sign-up', (req, res) => {

  const { username, avatar } = req.body;

  if (!username || !avatar) {

    res.status(400).send("Todos os campos são obrigatórios");
		return
    
  }  

  const newUser = {
    id: users.length + 1,
    username: username.toLowerCase(),
    avatar: avatar
  }

  users.unshift(newUser);

  res.status(201).send("OK");

});

app.post ('/tweets', (req, res) => {

  const { username, tweet } = req.body;

  if (!username || !tweet) {

    res.status(400).send("Todos os campos são obrigatórios");
		return
    
  } 

  const newTweet = {
    id: tweets.length + 1,
    username: username.toLowerCase(),
    tweet: tweet,
    avatar: users[0].avatar
  }

  tweets.unshift(newTweet);

  res.status(201).send("OK");

});

app.get ('/tweets', (req, res) => {

  const tenTweets = [];

  for (let i=0; i< Math.min(10,tweets.length); i++){
   tenTweets.push(tweets[i])
  }

  res.send(tenTweets);
});

app.get("/tweets/:username", (req, res) => {

  const username = req.params.username;

  const userTweets = tweets.filter((obj) => obj.username === username);

  res.send(userTweets);
});

app.listen(5000, () => console.log('App is running in port 5000'));
