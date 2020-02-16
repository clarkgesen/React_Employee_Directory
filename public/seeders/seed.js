let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_n7shqn37:3lipr1j4h0aedjuqe4j1d05f9q@ds221990.mlab.com:21990/heroku_n7shqn37np", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let directorySeed = [
    {
        firstName: "Jaxson",
        lastName: "Quintana",
        department: "Architecture",
        title: "Head Architect",
        yearsEmployed: "20"
    },
    {
        firstName: "Kareena",
        lastName: "Connolly",
        department: "Architecture", 
        title: "Junior Architect",
        yearsEmployed: 3, 
    },
    {
        firstName: "Leyla",
        lastName: "Holland",
        department: "Architecture", 
        title: "Junior Architect",
        yearsEmployed: 4, 
    },
    {
        firstName: "Simrah",
        lastName: "James",
        department: "Software Development", 
        title: "Senior Developer",
        yearsEmployed: 15, 
    },
    {
        firstName: "Audrey",
        lastName: "Corona",
        department: "Software Development", 
        title: "Junior Developer",
        yearsEmployed: 3, 
    },
    {
        firstName: "Tomos",
        lastName: "Fuentes",
        department: "Software Development", 
        title: "Junior Developer",
        yearsEmployed: 4, 
    },
    {
        firstName: "Toby",
        lastName: "Flenderson",
        department: "Human Resources", 
        title: "Human Resources Specialist",
        yearsEmployed: 15, 
    },
    {
        firstName: "Oscar",
        lastName: "Martinez",
        department: "Accounting", 
        title: "Senior Accountant",
        yearsEmployed: 13, 
    },
    {
        firstName: "Kevin",
        lastName: "Malone",
        department: "Accounting", 
        title: "Junior Accountant",
        yearsEmployed: 10, 
    },{
        firstName: "Angela",
        lastName: "Martin",
        department: "Accounting", 
        title: "Head Acountant",
        yearsEmployed: 16, 
    }


]

