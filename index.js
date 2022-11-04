import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [{
  username: 'bobesponja',
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];

const tweets = [{
  username: "bobesponja",
  tweet: "eu amo o hub"
}];

app.get('/sign-up', (req, res) => {

  const newUser = {
    username: 'Quadrado',
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  }

  users.push(newUser);

  res.send(users);
});


app.listen(5000, () => console.log('App is running in port 5000'));
