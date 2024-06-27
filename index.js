import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("styles"));

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",(req,res)=>{
    res.render("index.ejs");
  });
  
app.get("/read",(req,res)=>{
    res.render("read.ejs")
  
  });
  
app.get("/write",(req,res)=>{
    res.render("write.ejs")
  
  });

app.post("/submit", (req, res) => {
    const hi_name= req.body["your_name"];
    const hi_email = req.body["title"];
    const hi_blog = req.body["blog_here"];
    res.render("submit.ejs",{here_name:hi_name,here_email:hi_email,here_blog:hi_blog});
    
  });

















app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  