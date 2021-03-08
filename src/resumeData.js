let resumeData = {
    "imagebaseurl":"",
    "name": "Michael Hutchings",
    "role": "",
    "linkedinId":"Your LinkedIn Id",
    "skypeid": "Your skypeid",
    "roleDescription": "",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/michael-hutchings-58a19826/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"http://github.com/mhutchbot",
          "className":"fa fa-github"
        },
        {
          "name":"skype",
          "url":"http://twitter.com/mikerobot",
          "className":"fa fa-twitter"
        }
      ],
   
    "education":[
      {
        "UniversityName":"Denver University Full Stack Bootcamp",
        "specialization":"HTML and REACT",
        "MonthOfPassing":"Aug",
        "YearOfPassing":"2020",
        
      },
      {
        "UniversityName":"Regis University",
        "specialization":"Business",
        "MonthOfPassing":"Jan",
     
      }
    ],
    "work":[
      {
        "CompanyName":"Airbnb",
        
        "specialization":"CSR Supervisor",
        "MonthOfLeaving":"Jan",
        "YearOfLeaving":"2019",
        "Achievements":""
      },
      {
        "CompanyName":"Sprint",
        "specialization":"Sales/Customer Service",
        "MonthOfLeaving":"Jan",
        "YearOfLeaving":"2012",
        "Achievements":""
      },
      {
        "CompanyName":"Verizon",
        "specialization":"Sales/Customer Service",
        "MonthOfLeaving":"Jan",
        "YearOfLeaving":"2006",
        "Achievements":""
      }
    ],
    "skillsDescription":"Your skills here",
    "skills":[
      {
        "skillname":"HTML"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"JavaScript"
      },
      {
        "skillname":"Reactjs"
      },
      {
        "skillname":"NextJs"
      }
    ],
    "portfolio":[
      {
        "name":"Fitness Tracker",
        "description":"Exercise Tracker ",
        "imgurl":"data:image/png;base64,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"
      },
      {
        "name":"Budget Tracker",
        "description":"mobileapp",
        "imgurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRU8izJmPOkOsLqrAby4w7egGM8g4E6INIQ&usqp=CAU"
      },
      {
        "name":"LostHope - Soundcloud",
        "description":"Personal Music Production",  
        "imgurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphttps://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Fexercise-56&psig=AOvVaw0pkMDphNPnorQgNeM9_4D0&ust=1615150372427000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjkwp3GnO8CFQAAAAAdAAAAABAD-WUrKYTu1ZRe0Nh9E55ZBeQ3yaQMN4FdRA&usqp=CAU"
      },
      {
        "name":"Quote Maker",
        "description":"Quote of the Day Generator",
        "imgurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKICdE9vOZq74ziEfH3Ap2E0Qt5fmWA3lzLw&usqp=CAU"
      }
  
    ]
  }
  
  export default resumeData