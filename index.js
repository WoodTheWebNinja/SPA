const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const { maskErrors } = require("graphql-errors");
const { graphql } = require("graphql");
const { PORT } = require("./config");

const path = require("path"); 
const app = express();

/*
// Sauvegarder Tweets dans un fichier Json 
const fs = require('fs');

const data =  fs.readFileSync('words.json');
const words = JSON.parse(data); 
console.log(words);

*/



app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


app.get("/*", (req, res) => {
 res.sendFile(path.resolve(__dirname,"frontend", "index.html"));
});


app.listen(process.env.PORT || 8081, () => console.log("server running...."))


maskErrors(schema);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);










/*app.listen(PORT || 4001, () => {
  console.log("Server running on PORT", PORT);
});


graphql(schema, '{ mostLikedTweet(screen_name: "Pokemon") { tweet_text likes } }').
then((response) => {
  console.log('Wood');
});
*/