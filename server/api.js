// import axios from "axios";
/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");


const https = require('https');

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|


router.get("/newQuestion", (req,res) => {
  question.find({}).then((content) => {
    res.send(content);
  });
});

router.post("/submitQuestion", (req,res) => {
  let newQuestion = new question({
    content: req.content,
    answer: req.answer,
    difficulty: req.difficulty,
    scoreAdded: req.scoreAdded,
  })
  newQuestion.save()
})



/*
class answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }



  componentDidMount() {
    fetch()
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
*/

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://api.wolframalpha.com/v2/query?appid=XXXW&input=solve+3x-7%3D11&podstate=Result__Step-by-step+solution&format=plaintext&includepodid=Result&output=json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return (<div>Error: {error.message}</div>);
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

MyComponent()

// router.get("/answer", (req,res) => {
//   fetch("http://api.wolframalpha.com/v2/query?appid=XXXW&input=solve+3x-7%3D11&podstate=Result__Step-by-step+solution&format=plaintext&includepodid=Result&output=json")
//   .then(res => res.json())
//   .then(data => this.setState({}))
// })

// https.get("http://api.wolframalpha.com/v2/query?appid=XXXW&input=solve+3x-7%3D11&podstate=Result__Step-by-step+solution&format=plaintext&includepodid=Result&output=json", res => {
//   let data = []
//   const answer = res.pods.subpods
//   console.log("answer: ", answer);
//   res.on('data',chunk => {
//     data.push(chunk)
//   })
// })



// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//     console.log('Status Code:', res.status);
//     console.log('Date in Response header:', headerDate);

//     const users = res.data;

//     console.log(users)
//   })
//   .catch(err => {
//     console.log("123");
//     console.log('Error: ', err.message);
//   });

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
