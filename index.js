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

  const newUser = {
    id: users.length + 1,
    username: req.body.username.toLowerCase(),
    avatar: req.body.avatar
  }

  users.unshift(newUser);

  res.send("OK");

  console.log(users)

});

app.post ('/tweets', (req, res) => {

  const newTweet = {
    id: tweets.length + 1,
    username: req.body.username.toLowerCase(),
    tweet: req.body.tweet,
    avatar: users[0].avatar
  }

  tweets.unshift(newTweet);

  res.send("OK");

  console.log(tweets)

});

app.get ('/tweets', (req, res) => {

  const tenTweets = [];

  for (let i=0; i< Math.min(10,tweets.length); i++){
   tenTweets.push(tweets[i])
  }

  res.send(tenTweets)
  console.log(tenTweets)

});

app.listen(5000, () => console.log('App is running in port 5000'));
