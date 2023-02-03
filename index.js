const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

const getUser = (name) =>
  new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    // If user found, if not
    user ? resolve(user) : reject(`No such user with name : ${name}`);
  });

const getArticles = (userId) =>
  new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);
    // If user found, if not
    userArticles ? resolve(userArticles.articles) : reject("Wrong ID");
  });

const getData = async () => {
  try {
    const user = await getUser("john");
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};

getData();

// Other way, using promises
// getUser("john")
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));
