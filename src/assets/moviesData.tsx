export const movies = [
  {
    id: 'CI456',
    label: 'The Darkness',
    descriptionOne: `For each ad campaign that you create, you can control how much
      you're willing to spend on clicks and conversions, which networks
      and geographical locations you want your ads to show on, and more.`,
    descriptionTwo: `This film delves into the psychological depth of human nature, 
      focusing on the struggles of a single man caught in a battle with darkness. The powerful storyline
      is filled with twists and turns, showcasing how far someone can go when they are pushed beyond their limits.
      It is a tale of perseverance, fear, and ultimately, redemption.`,
    coverImgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    genre: ['Fantasy', 'Sci-fi', 'Action'],
    rate: 'PG',
    rating: 5,
    videoPathOnYoutube: 'https://youtube.com/watch?v=darkness_trailer',
    watchingTimes: [
      { day: 'Monday', times: ['03:00 am', '11:00 pm'] },
      { day: 'Tuesday', times: ['02:00 am', '05:30 pm'] },
    ],
    runningTime: '130 mins',
    state: 'displayed',
    productionDate: '17 August, 2017',
    director: 'John Doe',
    certificateAge: '18',
    releasedDate: '18-5-2019',
    starring: ['James Hewitt', 'Jess Richards']
  },
  {
    id: 'CI457',
    label: 'Ocean’s Revenge',
    descriptionOne: `A thrilling underwater journey where a group of adventurers must face the deadly creatures of the deep.`,
    descriptionTwo: `Ocean’s Revenge takes audiences on an extraordinary adventure beneath the waves. The film is set in a post-apocalyptic future where
      humans have taken refuge under the sea. With stunning underwater visuals and heart-pounding action sequences, it explores the perils
      of exploring the uncharted depths, the dangers lurking within, and the hidden mysteries of the ocean.`,
    coverImgPath: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&h=250',
    genre: ['Adventure', 'Thriller'],
    rate: 'PG-13',
    rating: 4,
    videoPathOnYoutube: 'https://youtube.com/watch?v=oceanrevenge_trailer',
    watchingTimes: [
      { day: 'Wednesday', times: ['12:00 pm', '10:30 pm'] },
      { day: 'Thursday', times: ['01:00 pm', '09:00 pm'] },
    ],
    runningTime: '145 mins',
    state: 'displayed',
    productionDate: '23 February, 2018',
    director: 'Jane Smith',
    certificateAge: '16',
    releasedDate: '19-6-2019',
    starring: ['Matt Damon', 'Emily Blunt']
  },
  {
    id: 'CI458',
    label: 'The Final Frontier',
    descriptionOne: `In a distant future, humanity must leave Earth to survive, discovering new worlds in the process.`,
    descriptionTwo: `Set in the distant future, The Final Frontier explores mankind’s pursuit of survival as Earth becomes uninhabitable.
      Colonies are sent across the galaxy in a desperate attempt to find a new home. The film excels in visual storytelling, 
      with jaw-dropping space travel sequences and a gripping tale of human determination and courage in the face of extinction.`,
    coverImgPath: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=250',
    genre: ['Sci-fi', 'Adventure'],
    rate: 'PG',
    rating: 4.5,
    videoPathOnYoutube: 'https://youtube.com/watch?v=finalfrontier_trailer',
    watchingTimes: [
      { day: 'Friday', times: ['10:00 am', '11:30 pm'] },
      { day: 'Saturday', times: ['12:00 pm', '10:30 pm'] },
    ],
    runningTime: '150 mins',
    state: 'comming soon',
    productionDate: '15 July, 2020',
    director: 'Lucas Reed',
    certificateAge: '13',
    releasedDate: '22-7-2021',
    starring: ['Chris Pratt', 'Zoe Saldana']
  },
  {
    id: 'CI459',
    label: 'Silent Shadows',
    descriptionOne: `A detective navigates the dark underworld of a corrupt city to find a missing child.`,
    descriptionTwo: `Silent Shadows combines the intensity of a crime thriller with the emotional weight of a family drama. 
      The narrative unfolds through the eyes of a detective whose journey takes him through the darkest alleys of his city. 
      This noir-inspired film boasts an intense plot and powerful performances that keep you on the edge of your seat from start to finish.`,
    coverImgPath: 'https://images.unsplash.com/photo-1565808221783-cb7c37960a21?auto=format&fit=crop&w=400&h=250',
    genre: ['Crime', 'Drama', 'Thriller'],
    rate: 'R',
    rating: 4.8,
    videoPathOnYoutube: 'https://youtube.com/watch?v=silentshadows_trailer',
    watchingTimes: [
      { day: 'Monday', times: ['06:00 pm', '11:45 pm'] },
      { day: 'Tuesday', times: ['04:00 pm', '11:00 pm'] },
    ],
    runningTime: '120 mins',
    state: 'displayed',
    productionDate: '9 September, 2019',
    director: 'Sarah Lin',
    certificateAge: '18',
    releasedDate: '10-10-2020',
    starring: ['Michael B. Jordan', 'Charlize Theron']
  },
  {
    id: 'CI460',
    label: 'The Ice Kingdom',
    descriptionOne: `An animated journey into a magical frozen world where creatures of the cold battle to survive.`,
    descriptionTwo: `A heartwarming animated feature, The Ice Kingdom is perfect for audiences of all ages. 
      It tells the story of an unlikely group of creatures who must unite to protect their frozen home from an invading force. 
      With dazzling animation and a heartfelt message about the power of unity, this film is sure to be a family favorite.`,
    coverImgPath: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&h=250',
    genre: ['Animation', 'Fantasy', 'Family'],
    rate: 'G',
    rating: 4.3,
    videoPathOnYoutube: 'https://youtube.com/watch?v=icekingdom_trailer',
    watchingTimes: [
      { day: 'Sunday', times: ['11:00 am', '04:00 pm'] },
      { day: 'Saturday', times: ['01:00 pm', '05:00 pm'] },
    ],
    runningTime: '95 mins',
    state: 'displayed',
    productionDate: '12 November, 2018',
    director: 'Anne Hathaway',
    certificateAge: 'All',
    releasedDate: '22-12-2018',
    starring: ['Tom Hanks', 'Emma Watson']
  },
  {
    id: 'CI461',
    label: 'Into the Storm',
    descriptionOne: `A high-octane disaster film about a group of storm chasers who risk everything for the perfect shot.`,
    descriptionTwo: `Into the Storm brings action and disaster to the forefront as it follows a daring group of storm chasers. 
      Their journey takes them into the heart of the most dangerous storms on Earth, battling nature’s wrath in search of the ultimate footage. 
      The film captures both the beauty and destructive power of natural disasters, leaving the audience breathless.`,
    coverImgPath: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=250',
    genre: ['Action', 'Thriller'],
    rate: 'PG-13',
    rating: 4.2,
    videoPathOnYoutube: 'https://youtube.com/watch?v=intothestorm_trailer',
    watchingTimes: [
      { day: 'Friday', times: ['09:00 am', '09:00 pm'] },
      { day: 'Saturday', times: ['10:00 am', '08:30 pm'] },
    ],
    runningTime: '110 mins',
    state: 'displayed',
    productionDate: '8 June, 2021',
    director: 'Michael Bay',
    certificateAge: '13',
    releasedDate: '14-7-2021',
    starring: ['Gerard Butler', 'Margot Robbie']
  },
  {
    id: 'CI462',
    label: 'Galactic Odyssey',
    descriptionOne: `An epic space journey that spans across galaxies in search of a hidden ancient power.`,
    descriptionTwo: `Galactic Odyssey is a visually stunning film that takes audiences on a journey through the far reaches of space. 
      With spectacular special effects, the story follows a team of explorers as they seek an ancient power capable of reshaping the universe. 
      Filled with exhilarating action and deep philosophical themes, the film captivates audiences from beginning to end.`,
    coverImgPath: 'https://images.unsplash.com/photo-1507537429700-64ac6f3f151c?auto=format&fit=crop&w=400&h=250',
    genre: ['Sci-fi', 'Adventure'],
    rate: 'PG',
    rating: 4.7,
    videoPathOnYoutube: 'https://youtube.com/watch?v=galacticodyssey_trailer',
    watchingTimes: [
      { day: 'Wednesday', times: ['10:00 am', '09:30 pm'] },
      { day: 'Thursday', times: ['11:00 am', '08:00 pm'] },
    ],
    runningTime: '140 mins',
    state: 'comming soon',
    productionDate: '5 March, 2022',
    director: 'Christopher Nolan',
    certificateAge: '13',
    releasedDate: '30-8-2023',
    starring: ['Keanu Reeves', 'Scarlett Johansson']
  },
  {
    id: 'CI463',
    label: 'City of Glass',
    descriptionOne: `A neo-noir mystery set in a dystopian city ruled by corruption and greed.`,
    descriptionTwo: `City of Glass weaves an intricate web of intrigue, set in a future where corporations control everything. 
      The film follows a down-and-out detective who uncovers a conspiracy that threatens to bring down the entire city. 
      With its gritty atmosphere, stylish visuals, and a complex narrative, City of Glass keeps audiences guessing until the final scene.`,
    coverImgPath: 'https://images.unsplash.com/photo-1533622597524-a1219ba65558?auto=format&fit=crop&w=400&h=250',
    genre: ['Drama', 'Mystery', 'Sci-fi'],
    rate: 'R',
    rating: 4.6,
    videoPathOnYoutube: 'https://youtube.com/watch?v=cityofglass_trailer',
    watchingTimes: [
      { day: 'Monday', times: ['02:00 pm', '10:00 pm'] },
      { day: 'Tuesday', times: ['03:00 pm', '11:00 pm'] },
    ],
    runningTime: '115 mins',
    state: 'displayed',
    productionDate: '7 January, 2020',
    director: 'David Fincher',
    certificateAge: '18',
    releasedDate: '15-12-2021',
    starring: ['Ryan Gosling', 'Rooney Mara']
  },
  {
    id: 'CI464',
    label: 'The Ghost Ship',
    descriptionOne: `An eerie horror film about a haunted ship that traps its passengers in a terrifying cycle of death.`,
    descriptionTwo: `The Ghost Ship is a spine-chilling horror film that will leave audiences trembling. 
      It follows a group of passengers who board an abandoned ship, only to find themselves hunted by the spirits of the dead. 
      The film’s eerie atmosphere, combined with terrifying jump scares, makes it a must-watch for fans of supernatural horror.`,
    coverImgPath: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&h=250',
    genre: ['Horror', 'Thriller'],
    rate: 'R',
    rating: 4.1,
    videoPathOnYoutube: 'https://youtube.com/watch?v=ghostship_trailer',
    watchingTimes: [
      { day: 'Friday', times: ['07:00 pm', '11:30 pm'] },
      { day: 'Saturday', times: ['08:00 pm', '12:00 am'] },
    ],
    runningTime: '100 mins',
    state: 'comming soon',
    productionDate: '30 October, 2021',
    director: 'James Wan',
    certificateAge: '18',
    releasedDate: '31-10-2022',
    starring: ['Patrick Wilson', 'Vera Farmiga']
  },
  {
    id: 'CI465',
    label: 'The Time Traveler',
    descriptionOne: `A time-travel adventure where a man races against time to prevent a catastrophic event.`,
    descriptionTwo: `The Time Traveler blends elements of science fiction and action, telling the story of a man who must travel 
      back in time to stop a disastrous event from taking place. With thrilling action scenes and a mind-bending plot, the film keeps 
      viewers engaged as the protagonist struggles to correct the timeline and save the future.`,
    coverImgPath: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=400&h=250',
    genre: ['Sci-fi', 'Action'],
    rate: 'PG-13',
    rating: 4.4,
    videoPathOnYoutube: 'https://youtube.com/watch?v=timetraveler_trailer',
    watchingTimes: [
      { day: 'Wednesday', times: ['10:00 am', '08:00 pm'] },
      { day: 'Thursday', times: ['12:00 pm', '09:00 pm'] },
    ],
    runningTime: '125 mins',
    state: 'displayed',
    productionDate: '15 August, 2022',
    director: 'Steven Spielberg',
    certificateAge: '13',
    releasedDate: '20-5-2023',
    starring: ['Tom Cruise', 'Emily Blunt']
  },
  {
    id: 'CI466',
    label: 'Echoes of the Past',
    descriptionOne: `A heart-wrenching drama about the struggles of a family torn apart by war and loss.`,
    descriptionTwo: `Echoes of the Past is a deeply emotional drama that explores the impact of war on a single family. 
      The film moves between the present and past, showing the lingering effects of trauma on generations. 
      The performances are raw and powerful, making this film a poignant exploration of grief, love, and survival.`,
    coverImgPath: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=400&h=250',
    genre: ['Drama', 'War'],
    rate: 'PG',
    rating: 4.9,
    videoPathOnYoutube: 'https://youtube.com/watch?v=echoesofpast_trailer',
    watchingTimes: [
      { day: 'Sunday', times: ['01:00 pm', '08:00 pm'] },
      { day: 'Monday', times: ['03:00 pm', '09:00 pm'] },
    ],
    runningTime: '135 mins',
    state: 'comming soon',
    productionDate: '25 April, 2021',
    director: 'Ken Loach',
    certificateAge: '13',
    releasedDate: '15-11-2022',
    starring: ['Mark Ruffalo', 'Rachel McAdams']
  },
  {
    id: 'CI467',
    label: 'The Code',
    descriptionOne: `A fast-paced thriller about a hacker who uncovers a conspiracy to control the world’s information.`,
    descriptionTwo: `The Code is a high-stakes thriller that pulls you into the world of cyber warfare and espionage. 
      The film follows a young hacker who discovers a plot to control global information. With pulse-pounding sequences and an intricate plot, 
      it keeps viewers on edge as the protagonist navigates a dangerous web of deceit and betrayal.`,
    coverImgPath: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=400&h=250',
    genre: ['Thriller', 'Action'],
    rate: 'PG-13',
    rating: 4.5,
    videoPathOnYoutube: 'https://youtube.com/watch?v=thecode_trailer',
    watchingTimes: [
      { day: 'Thursday', times: ['11:00 am', '10:00 pm'] },
      { day: 'Friday', times: ['12:00 pm', '11:00 pm'] },
    ],
    runningTime: '130 mins',
    state: 'displayed',
    productionDate: '12 December, 2020',
    director: 'Denis Villeneuve',
    certificateAge: '13',
    releasedDate: '20-6-2021',
    starring: ['Robert Pattinson', 'Ana de Armas']
  }
];
