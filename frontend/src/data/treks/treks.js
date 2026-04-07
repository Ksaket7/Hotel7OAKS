export const treksData = [
  {
    id: "chandrashila-trek",
    title: "Chandrashila - Tungnath Trek",

    intro:
      "A beautiful short Himalayan trek starting from Chopta that leads to Tungnath — the highest Shiva temple in the world — and the stunning Chandrashila summit with breathtaking 360° Himalayan views.",

    desc: "The Chandrashila – Tungnath Trek is one of the most rewarding short treks in the Garhwal Himalayas of Uttarakhand. Known for its breathtaking summit views and spiritual significance, the trek takes you to Tungnath Temple, the highest Shiva temple in the world, and further to the Chandrashila summit. Starting from the picturesque village of Chopta, often called the Mini Switzerland of Uttarakhand, the trail passes through lush alpine meadows and offers spectacular views of peaks like Nanda Devi, Trishul, Chaukhamba, Kedarnath, and Bandarpunch.",

    difficulty: "Easy to Moderate",
    days: "4 Days",
    altitude: "4,000 m / 13,123 ft",
    price: "₹9,999",
    tag: "Spiritual & Scenic",
    rating: "4.9",
    reviews: "356",

    region: "Garhwal Himalayas, Uttarakhand",
    startingPoint: "Chopta",
    distance: "10 km",
    bestSeason: "March – June & October – December",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792579/22080340796_b754fb7263_h_nji1rn.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792588/20250103134042_aaay0d.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792588/photo-1547452377-b2ac40e02ed6_qn5clg.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792583/Chandrashila_Trek_wew_vxlrsk.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792583/photo-1522506209496-4536d9020ec4_rtynfd.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792576/Chandrashila_Trek_azhfa6.jpg",
    ],

    // 🆕 NEW: HIGHLIGHT IMAGES (pick best 6 from above or add new later)
    highlightImages: [
      "https://images.pexels.com/photos/16660010/pexels-photo-16660010.jpeg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792588/photo-1547452377-b2ac40e02ed6_qn5clg.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792583/Chandrashila_Trek_wew_vxlrsk.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792583/photo-1522506209496-4536d9020ec4_rtynfd.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792576/Chandrashila_Trek_azhfa6.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1762792588/20250103134042_aaay0d.webp",
    ],

    // ✅ UPDATED STRUCTURE
    highlights: [
      {
        title: "Tungnath Temple Visit",
        desc: "Visit the highest Shiva temple in the world, rich in spiritual significance.",
        image:
          "https://images.pexels.com/photos/16660010/pexels-photo-16660010.jpeg",
      },
      {
        title: "Chandrashila Summit",
        desc: "Experience breathtaking 360° Himalayan views from the summit.",
        image:
          "https://images.pexels.com/photos/14712672/pexels-photo-14712672.jpeg",
      },
      {
        title: "Himalayan Peaks View",
        desc: "Witness Nanda Devi, Trishul, Chaukhamba, Kedarnath & Bandarpunch.",
        image:
          "https://images.pexels.com/photos/5791927/pexels-photo-5791927.jpeg",
      },
      {
        title: "Chopta Meadows",
        desc: "Walk through lush alpine meadows often called Mini Switzerland.",
        image:
          "https://images.pexels.com/photos/1315638/pexels-photo-1315638.jpeg",
      },
      {
        title: "Beginner Friendly Trek",
        desc: "Perfect for first-time trekkers looking for a Himalayan experience.",
        image:
          "https://images.pexels.com/photos/14114690/pexels-photo-14114690.jpeg",
      },
      {
        title: "Snow Trek Experience",
        desc: "Enjoy magical snow-covered trails during winter months.",
        image:
          "https://images.pexels.com/photos/15707935/pexels-photo-15707935.jpeg",
      },
    ],

    included: [
      "Professional trek leader and guides",
      "Accommodation (Camps / Guesthouse)",
      "Meals during the trek",
      "Basic first aid and safety equipment",
      "Camping equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal expenses",
      "Travel insurance",
      "Personal trekking gear",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Delhi to Ukhimath / Chopta",
        details: [
          "Drive Distance: 450 km | 11–12 hrs",
          "Overnight journey via Meerut – Haridwar – Devprayag – Rudraprayag",
          "Arrival at Chopta by morning",
          "Stay: Guesthouse / Campsite",
        ],
      },
      {
        day: "Day 2",
        title: "Arrival and Acclimatization at Chopta",
        details: [
          "Altitude: 2,700 m / 8,888 ft",
          "Check-in to campsite or guesthouse",
          "Local exploration and acclimatization",
          "Evening walk across Chopta meadows with views of Chaukhamba, Trishul & Kedarnath peaks",
          "Trek briefing by guides",
        ],
      },
      {
        day: "Day 3",
        title: "Trek to Tungnath Temple & Chandrashila Summit",
        details: [
          "Trek Distance: 9–10 km | 7–8 hrs",
          "Visit Tungnath Temple (3.5 km)",
          "Climb to Chandrashila Summit (4,000 m)",
          "Enjoy panoramic Himalayan views",
          "Return to Chopta",
          "Bonfire and dinner",
        ],
      },
      {
        day: "Day 4",
        title: "Drive from Chopta to Delhi",
        details: [
          "Drive Distance: 450 km | 11–12 hrs",
          "Breakfast at campsite",
          "Return journey to Delhi",
        ],
      },
    ],

    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13752.916103545795!2d79.2212453!3d30.4862683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39082d0b18f30369%3A0x515da804c989852e!2sChandrashila!5e0!3m2!1sen!2sin!4v1773681638084!5m2!1sen!2sin",

    about:
      "At 7 Oaks Trek and Travels, we organize professionally guided Chandrashila Tungnath trekking experiences with experienced local guides, comfortable stays, and carefully designed itineraries to ensure a safe and memorable Himalayan adventure.",
  },

  {
    id: "deoban-trek",
    title: "Deoban Trek",

    intro:
      "A peaceful forest trek near Chakrata through dense deodar forests, offering stunning Himalayan views of Bandarpoonch and Swargarohini peaks.",

    desc: "The Deoban Trek near Chakrata is a hidden gem in the Garhwal Himalayas, known for its serene forests, panoramic Himalayan views, and peaceful natural surroundings.",

    difficulty: "Easy",
    days: "3 Days",
    altitude: "7,200 ft / 2,200 m",
    price: "₹8,999",
    tag: "Forest Trek",
    rating: "4.6",
    reviews: "164",

    region: "Chakrata, Dehradun District, Uttarakhand",
    startingPoint: "Chakrata",
    distance: "8–10 km",
    bestSeason: "March–June & September–December",

    // ✅ GALLERY / HERO IMAGES
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157231/Kedarkantha-Trek-2_wfadkv.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157230/deoban-trek_lkgkeh.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157230/deoban_7_fileUrl_file_20221011192740-copy_yanhs9.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157230/81570-Deoban-Weekend-Trek-Afreen-Jaffar-Oct-19th-3_l6etdr.avif",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157230/deoban-6967720_wjqwlh.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Dense Forest Trails",
        desc: "Walk through thick deodar and pine forests with fresh mountain air.",
        image:
          "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F278b619d-4e8e-4a75-98d9-b26d35bab7ca_Deoban_Banner_Mrinal.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=70",
      },
      {
        title: "Himalayan Peak Views",
        desc: "Enjoy stunning views of Bandarpoonch and Swargarohini ranges.",
        image:
          "https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/0e95770f-ca88-4627-b46f-7e34a3d59341_Deoban_Mountain+views_Indiahikes.jpg?w=2400&h=1350&q=50&org_if_sml=1",
      },
      {
        title: "Peaceful Nature Escape",
        desc: "Experience calm and less-crowded Himalayan forest trails.",
        image:
          "https://www.alltrails.com/mugen/image/trail-app-router?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtlI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzQzNzk3MTcvYzY4OGZkNzAzZWU0MDhhN2EzM2ViNWJiNTUxZmY4YjEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMTA4MCIsImhlaWdodCI6IjcwMCIsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19&w=3840&q=75",
      },
      {
        title: "Budher Caves Exploration",
        desc: "Visit the mysterious and ancient Budher caves nearby.",
        image:
          "https://hblimg.mmtcdn.com/content/hubble/img/ChakrataImage/mmt/activities/m_budher_caves_chakrata_1_l_480_640.jpg",
      },
      {
        title: "Perfect Weekend Trek",
        desc: "Ideal short getaway from Delhi for a refreshing break.",
        image:
          "https://thecrazymountaineers.com/images/packages/21/gallery/deoban-trek3.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (hotel / guesthouse / campsite)",
      "Meals during the trek",
      "Camping equipment if required",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Delhi to Chakrata",
        details: [
          "Drive Distance: ~320 km",
          "Travel Time: 8–9 hrs",
          "Scenic drive via Dehradun to Chakrata hill station",
          "Stay: Hotel / Guesthouse in Chakrata",
        ],
      },
      {
        day: "Day 2",
        title: "Deoban Forest Trek",
        details: [
          "Trek Distance: 8–10 km",
          "Trek Duration: 4–5 hrs",
          "Altitude: 2,200 m / 7,200 ft",
          "Trek through dense deodar and pine forests",
          "Reach Deoban viewpoint with Himalayan panorama",
          "Return to Chakrata",
        ],
      },
      {
        day: "Day 3",
        title: "Drive from Chakrata to Delhi",
        details: [
          "Drive Distance: ~320 km",
          "Travel Time: 8–9 hrs",
          "Return journey",
        ],
      },
    ],

    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.9988523171132!2d77.84728116122702!3d30.746533734859355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f4bbbe3ceb255%3A0xbd376c7c6ff6ad4f!2sDeoban%2C%20Uttarakhand%20248123!5e0!3m2!1sen!2sin!4v1773681860435!5m2!1sen!2sin",

    about:
      "At 7 Oaks Trek and Travels, we offer well-organized Deoban trekking experiences with experienced local guides and comfortable arrangements.",
  },

  {
    id: "dodital-trek",
    title: "Dodital Trek",

    intro:
      "A peaceful Himalayan trek through dense forests leading to the beautiful Dodital Lake, believed to be the birthplace of Lord Ganesha. The trail offers serene landscapes, alpine forests, and stunning views of Bandarpunch and Swargarohini peaks.",

    desc: "The Dodital Trek is one of the most scenic and serene trekking experiences in the Garhwal Himalayas of Uttarakhand. Located at an altitude of around 3,024 meters, Dodital Lake is a pristine freshwater lake surrounded by dense forests of oak, pine, and rhododendron, creating a tranquil Himalayan paradise. The trek begins from Sangamchatti and gradually ascends through charming Himalayan villages, lush forests, and scenic mountain trails. Dodital is also considered the mythical birthplace of Lord Ganesha, making it a spiritually significant destination. Trekkers can further extend the adventure to Darwa Pass, which offers breathtaking views of majestic Himalayan peaks such as Bandarpunch and Swargarohini. With peaceful forest walks and stunning alpine scenery, Dodital Trek offers an unforgettable Himalayan experience for beginners, nature lovers, and photographers alike.",

    difficulty: "Easy to Moderate",
    days: "7 Days",
    altitude: "13,300 ft / 4,053 m",
    price: "₹12,999",
    tag: "Lake & Forest Trek",
    rating: "4.8",
    reviews: "264",

    region: "Uttarkashi District, Uttarakhand",
    startingPoint: "Sangamchatti",
    distance: "22–24 km",
    bestSeason: "March–June & September–December",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157222/doditallll_lk5fgg.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157222/fabrizio-conti-568771-unsplash_obruim.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157221/dodital-darwa-top-trek-1_vy23wl.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157220/dodital-darwa-top-trek-4_qcb2rf.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157220/dodital-snow-trek1_yktwtc.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Dodital Lake",
        desc: "A pristine freshwater lake surrounded by dense oak and pine forests.",
        image:
          "https://hblimg.mmtcdn.com/content/hubble/img/ttd_img/mmt/activities/m_Uttarkashi_Dodital_Lake_3_l_600_800.jpg",
      },
      {
        title: "Spiritual Significance",
        desc: "Believed to be the mythological birthplace of Lord Ganesha.",
        image:
          "https://vl-prod-static.b-cdn.net/system/images/000/237/975/75b3c3fae5bff8df1db8e15cdb02a531/original/Dodital.jpg",
      },
      {
        title: "Darwa Pass Extension",
        desc: "Optional trek offering panoramic Himalayan summit views.",
        image:
          "https://www.trekkaro.com/treks/62/6538197whatsapp-image-2022-09-17-at-03.11.10.jpeg",
      },
      {
        title: "Himalayan Peak Views",
        desc: "Witness Bandarpunch and Swargarohini peaks up close.",
        image:
          "https://www.feeltourism.com/assets/images/tour_68616f018a12f.webp",
      },
      {
        title: "Forest Trails",
        desc: "Walk through peaceful rhododendron, oak, and pine forests.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1b/e6/11/dodital-lake.jpg?w=1200&h=1200&s=1",
      },
    ],

    included: [
      "Professional trek leader and local guides",
      "Accommodation (hotel & campsite)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Delhi to Uttarkashi",
        details: [
          "Drive Distance: 420 km | 10–11 hrs",
          "Scenic drive through the Himalayan foothills",
          "Stay: Hotel in Uttarkashi",
        ],
      },
      {
        day: "Day 2",
        title: "Uttarkashi to Sangamchatti & Trek to Bebra",
        details: [
          "Altitude: 7,500 ft",
          "Drive Distance: 12 km",
          "Trek Distance: 7 km",
          "Forest trail through villages",
          "Stay: Bebra Campsite",
        ],
      },
      {
        day: "Day 3",
        title: "Bebra to Manjhi",
        details: [
          "Altitude: 9,433 ft",
          "Trek Distance: 9 km",
          "Gradual ascent through forests",
          "Stay: Manjhi Campsite",
        ],
      },
      {
        day: "Day 4",
        title: "Manjhi to Dodital Lake",
        details: [
          "Altitude: 10,900 ft",
          "Trek Distance: 6 km",
          "Arrival at Dodital Lake",
          "Stay: Lakeside campsite",
        ],
      },
      {
        day: "Day 5",
        title: "Dodital to Darwa Pass & return",
        details: [
          "Altitude: 13,300 ft",
          "Trek Distance: 5 km each side",
          "Panoramic Himalayan views",
          "Stay: Dodital Campsite",
        ],
      },
      {
        day: "Day 6",
        title: "Descend to Sangamchatti & drive to Uttarkashi",
        details: ["Trek Distance: 22 km", "Drive to Uttarkashi", "Stay: Hotel"],
      },
      {
        day: "Day 7",
        title: "Return to Delhi",
        details: ["Drive Distance: 420 km", "Drop at Dehradun / Delhi"],
      },
    ],

    map: "https://www.google.com/maps?q=dodital+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we organize professionally guided Dodital trekking experiences with experienced local guides, comfortable camping arrangements, and carefully planned itineraries to ensure a safe and memorable journey through the pristine beauty of the Himalayas.",
  },

  {
    id: "dayara-bugyal-trek",
    title: "Dayara Bugyal Trek",

    intro:
      "A stunning alpine meadow trek in Uttarkashi offering breathtaking views of Bandarpoonch, Srikanth, and Kala Nag peaks. Perfect for beginners and nature lovers.",

    desc: "Dayara Bugyal is one of the most beautiful high-altitude meadows in the Indian Himalayas, located in the Uttarkashi district of Uttarakhand. Sitting at an altitude of around 3,400 meters, this vast alpine grassland stretches across rolling hills and offers breathtaking panoramic views of major Himalayan peaks like Bandarpoonch, Srikanth Peak, and Kala Nag. The trek to Dayara Bugyal passes through dense forests of oak, maple, and rhododendron, charming mountain villages, and wide open meadows that change colors with the seasons. During spring and summer the bugyal is covered with lush green grass and wildflowers, while in winter it transforms into a magical snow-covered landscape ideal for snow trekking. Known for its gentle trails and spectacular scenery, the Dayara Bugyal Trek is one of the best beginner-friendly treks in Uttarakhand and a perfect Himalayan escape for nature lovers and photographers.",

    difficulty: "Easy to Moderate",
    days: "5 Days",
    altitude: "12,000 ft / 3,650 m",
    price: "₹11,999",
    tag: "Alpine Meadow Trek",
    rating: "4.8",
    reviews: "248",

    region: "Uttarkashi District, Uttarakhand",
    startingPoint: "Raithal Village",
    distance: "18–20 km",
    bestSeason: "March–June & September–February",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157232/a5c78251-21ae-4ff9-be29-d0cc1ffd72e0_Dayara-Bugyal-7_dnl2pc.webp",
      "https://storage.googleapis.com/stateless-www-justwravel-com/2024/01/2b2c4242-golden-hour-dayara.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157237/d2bb48da-81fe-48e7-9d14-1ca0f9d06575_Dayara_Bugyal_DB_Sudheer_Hegde-Frozen_Gui_Lake_-_Sunlight_-_EArly_morning_-_trekkers_-_indiahikes_u7jphj.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157260/Dayara-bugyal-scaled_ovqxq1.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157281/Dayara_Bugyal_cohe8m.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157317/hpqs1msm2xm2onxkbxjyerdnzoxy_shutterstock_1340520197_yr1vrm.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Alpine Meadows",
        desc: "One of the most beautiful high-altitude bugyals in India.",
        image:
          "https://himalayandaredevils.com/storage/uploads/69393fc933256.jpg",
      },
      {
        title: "Himalayan Views",
        desc: "Panoramic views of Bandarpoonch, Srikanth, and Kala Nag peaks.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/39/Dayara_Bugyal.jpg",
      },
      {
        title: "Forest Trails",
        desc: "Walk through oak, maple, and rhododendron forests.",
        image:
          "https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/87c9cee7-1898-477a-bdd1-d3ff576a5308_Dayara+Bugyal-Indiahikes-Venkat-meadows.jpg?auto=format,compress&&func=crop&q=70&org_if_sml=1",
      },
      {
        title: "Sunrise & Sunset",
        desc: "Experience magical golden-hour views from Dayara top.",
        image:
          "https://storage.googleapis.com/stateless-www-justwravel-com/2024/01/2b2c4242-golden-hour-dayara.jpg",
      },

      {
        title: "Snow Trek Experience",
        desc: "Transforms into a winter wonderland during snowfall.",
        image:
          "https://himalayandreamtreks.in/wp-content/uploads/Dayara/Gangotri-ranges-visible-from-Dayara-Bugyal.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced local guides",
      "Accommodation in guesthouses and tents",
      "All meals during the trek",
      "Camping equipment",
      "First aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Raithal",
        details: [
          "Altitude: 2,150 m",
          "Drive Distance: 180 km",
          "Stay: Guesthouse / Homestay",
        ],
      },
      {
        day: "Day 2",
        title: "Raithal to Gui / Barnala",
        details: ["Trek Distance: 4–5 km", "Forest trail", "Stay: Campsite"],
      },
      {
        day: "Day 3",
        title: "Dayara Bugyal Summit",
        details: [
          "Trek Distance: 8 km round trip",
          "Open meadow trekking",
          "Return to campsite",
        ],
      },
      {
        day: "Day 4",
        title: "Descend to Raithal",
        details: ["Trek Distance: 4–5 km", "Stay: Guesthouse"],
      },
      {
        day: "Day 5",
        title: "Return to Dehradun",
        details: ["Drive Distance: 180 km", "Trip ends"],
      },
    ],

    map: "https://www.google.com/maps?q=dayara+bugyal+Uttarakhand&output=embed",

    about:
      "7 Oaks Trek and Travels ensures a well-organized trekking experience with experienced guides, comfortable camping, and complete safety support, allowing trekkers to fully immerse themselves in the natural beauty of the Garhwal Himalayas.",
  },

  {
    id: "gaumukh-tapovan-trek",
    title: "Gaumukh Tapovan Trek",

    intro:
      "A legendary Himalayan trek to the source of the Ganga River, featuring glacier walks, alpine meadows, and breathtaking views of Mt. Shivling and the Bhagirathi peaks.",

    desc: "The Gaumukh Tapovan Trek is one of the most iconic high-altitude treks in the Indian Himalayas, located in Gangotri National Park in Uttarakhand. The trek takes adventurers to Gaumukh, the sacred source of the River Ganga, and further to the stunning alpine meadows of Tapovan situated beneath the majestic Mt. Shivling. The journey passes through dramatic landscapes including pine forests, glacial valleys, rugged moraines, and breathtaking Himalayan viewpoints. Trekkers experience close views of towering peaks such as Shivling, Meru, and the Bhagirathi group. Known for its spiritual significance and raw Himalayan beauty, this trek offers a perfect blend of adventure, nature, and spirituality.",

    difficulty: "Moderate to Difficult",
    days: "7 Days",
    altitude: "14,600 ft / 4,450 m",
    price: "₹19,999",
    tag: "Glacier Expedition",
    rating: "4.9",
    reviews: "286",

    region: "Gangotri National Park, Uttarkashi, Uttarakhand",
    startingPoint: "Gangotri",
    distance: "~40 km",
    bestSeason: "May–June & September–October",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157327/gaumukh_tapovan_gallery_9-optimized_hozvto.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157323/9Trekyaari-Gaumukh-Tapovan_9_9eKJeIsGcy_oblre7.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157323/672dab75a03b5_k8er8g.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157323/66432568_10157943580956874_3675994652458090496_n_tdafb2.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157326/Gaumukh-Tapovan-1-min_svaxuu.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157327/Gaumukh-Tapovan-9_jwuf2e.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157327/images_fhspom.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157327/tapovan_mbhwbr.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Gaumukh Glacier",
        desc: "Visit the sacred source of the Ganga River.",
        image:
          "https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2Fd50921e6-039a-4251-9190-221239a46d8a_Gaumukh%2BTapovan_Sooraj%2BKumar_View%2Bof%2BMount%2BShivling%2Bat%2BTapovan.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C97%2C1600%2C767%26w%3D1600%26h%3D767&w=3840&q=70",
      },
      {
        title: "Mt. Shivling Views",
        desc: "Witness the iconic Shivling peak up close.",
        image:
          "https://himalayandreamtreks.in/wp-content/uploads/2023/10/Shivling-Parvat-min.jpg",
      },
      {
        title: "Tapovan Meadows",
        desc: "High-altitude alpine meadows with surreal landscapes.",
        image:
          "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1350x300/Blog_20250417-473949939-1744891415.png",
      },
      {
        title: "Glacier Walk",
        desc: "Thrilling walk across rugged Himalayan glacier terrain.",
        image:
          "https://www.brahmandtour.com/img/slider/gaumukh-tapovan-trek-2.webp",
      },
      {
        title: "Himalayan Peaks",
        desc: "Views of Bhagirathi peaks and Mt. Meru.",
        image:
          "https://raftingcampingrishikesh.com/images/vasukitaal-trek-himalaya.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation in guesthouses and tents",
      "Meals during the trek",
      "Camping equipment",
      "First aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Forest permits and entry fees",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Gangotri",
        details: ["Drive Distance: 280 km", "Stay: Guesthouse"],
      },
      {
        day: "Day 2",
        title: "Gangotri to Chirbasa",
        details: ["Trek Distance: 10 km", "Views of Bhagirathi peaks"],
      },
      {
        day: "Day 3",
        title: "Chirbasa to Bhojbasa",
        details: ["Trek Distance: 5 km", "Glacial valley trail"],
      },
      {
        day: "Day 4",
        title: "Bhojbasa to Tapovan via Gaumukh",
        details: ["Visit Gaumukh glacier", "Steep climb to Tapovan"],
      },
      {
        day: "Day 5",
        title: "Tapovan to Bhojbasa",
        details: ["Descend glacier trail"],
      },
      {
        day: "Day 6",
        title: "Bhojbasa to Gangotri",
        details: ["Long descent"],
      },
      {
        day: "Day 7",
        title: "Return to Dehradun",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=gaumukh+tapovan+trek+Uttarakhand&output=embed",

    about:
      "With 7 Oaks Trek and Travels, explore the legendary Gaumukh Tapovan trek with experienced guides, safe glacier navigation, and well-planned camping arrangements. This expedition offers an unforgettable journey to the sacred source of the Ganga and the stunning high-altitude meadows of Tapovan.",
  },

  {
    id: "gulabi-kantha-trek",
    title: "Gulabi Kantha Trek",

    intro:
      "A scenic Himalayan meadow trek in the Garhwal region offering panoramic views of Bandarpoonch, Swargarohini, and the Gangotri range along with beautiful alpine campsites.",

    desc: "The Gulabi Kantha Trek is a hidden Himalayan gem located near Barkot in the Uttarkashi district of Uttarakhand. The trek passes through dense forest trails, mountain villages, and vast alpine meadows before reaching the beautiful summit of Gulabi Kantha. From the top, trekkers are rewarded with breathtaking views of prominent Himalayan peaks such as Bandarpoonch, Black Peak, Chaukhambha, Swargarohini, and the Gangotri range. The journey offers a mix of forest trekking, scenic campsites, and high-altitude meadows covered with wildflowers in summer and snow in winter. This trek is considered easy to moderate, making it suitable for beginners as well as experienced trekkers seeking a peaceful Himalayan adventure away from crowded trails.",

    difficulty: "Easy to Moderate",
    days: "5 Days",
    altitude: "13,200 ft / 4,000 m",
    price: "₹8,999",
    tag: "Alpine Meadow Trek",
    rating: "4.7",
    reviews: "142",

    region: "Barkot, Uttarkashi, Uttarakhand",
    startingPoint: "Barkot / Hanuman Chatti",
    distance: "26 km",
    bestSeason: "December–March (Snow), April–June, October–November",

    // ✅ HERO + GALLERY
    images: [
      "https://t.eucdn.in/tourism/lg/gulabikantha-trek-2265614.webp",
      "https://t.eucdn.in/tourism/lg-jpg/gulabikantha-trek-6872428.jpg",
      "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/66f74117-4241-4a2e-935c-9ad1379c9655.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Himalayan Peak Views",
        desc: "Panoramic views of Bandarpoonch, Black Peak, Chaukhambha and Swargarohini.",
        image:
          "https://montaxe.com/wp-content/uploads/2024/07/Best-time-to-visit-Gulabi-kantha-trek.webp",
      },
      {
        title: "Alpine Meadows",
        desc: "Beautiful high-altitude meadows and scenic forest trails.",
        image:
          "https://t.eucdn.in/tourism/lg-jpg/gulabikantha-trek-6872428.jpg",
      },
      {
        title: "Campsite Experience",
        desc: "Stay at stunning camps like Kandola and Seema Thatch.",
        image:
          "https://www.trekkaro.com/treks/62/6538197whatsapp-image-2022-09-17-at-03.11.10.jpeg",
      },
      {
        title: "Wildflower Trails",
        desc: "Spot rare Himalayan flowers like Blue Poppy and Rain Lily.",
        image:
          "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/66f74117-4241-4a2e-935c-9ad1379c9655.webp",
      },
      {
        title: "Offbeat Trail",
        desc: "Peaceful and less crowded trekking experience.",
        image:
          "https://travelchardham.com/sites/default/files/2025-09/Gulabi%20Kantha%20Trek%20route.jpg",
      },
    ],

    included: [
      "Professional trek leader and guides",
      "Transportation (as per itinerary)",
      "Accommodation (hotel & campsite)",
      "Meals (tea, breakfast, lunch, dinner)",
      "Basic first aid and safety support",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Barkot",
        details: [
          "Drive Distance: 120–140 km",
          "Route via Mussoorie and Nainbagh",
          "Stay: Hotel",
        ],
      },
      {
        day: "Day 2",
        title: "Barkot to Kandola Campsite",
        details: [
          "Drive to Hanuman Chatti",
          "Trek Distance: 5 km",
          "Forest trail via Nishni village",
        ],
      },
      {
        day: "Day 3",
        title: "Kandola to Seema Thatch",
        details: ["Trek Distance: 6–7 km", "Alpine meadow trail"],
      },
      {
        day: "Day 4",
        title: "Summit Day",
        details: ["Climb to Gulabi Kantha summit", "Return to campsite"],
      },
      {
        day: "Day 5",
        title: "Return to Dehradun",
        details: ["Descend and drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=gulabi+kantha+Uttarakhand&output=embed",

    about:
      "7 Oaks Trek and Travels offers well-organized trekking experiences with professional guides, comfortable camping arrangements, and carefully planned itineraries to ensure a safe and memorable Himalayan adventure.",
  },

  {
    id: "har-ki-dun-trek",
    title: "Har Ki Dun Valley Trek",

    intro:
      "A breathtaking Himalayan trek through the legendary Valley of Gods, passing ancient villages, alpine meadows, and pine forests with spectacular views of Swargarohini and Black Peak.",

    desc: "The Har Ki Dun Valley Trek is one of the most scenic and culturally rich treks in the Garhwal Himalayas of Uttarakhand. Located in the remote Govind Wildlife Sanctuary of Uttarkashi district, this stunning valley lies at an altitude of around 3,566 meters and is surrounded by majestic Himalayan peaks including Swargarohini, Hata Peak, and Black Peak. Known as the 'Valley of Gods', Har Ki Dun offers a perfect combination of breathtaking landscapes, traditional Himalayan villages, and rich cultural heritage. The trail passes through beautiful settlements like Sankri and Osla, dense pine and deodar forests, alpine meadows, glacial rivers, and stunning mountain scenery.",

    difficulty: "Moderate",
    days: "7 Days",
    altitude: "11,800 ft / 3,600 m",
    price: "₹14,999",
    tag: "Valley Trek",
    rating: "4.8",
    reviews: "254",

    region: "Govind Wildlife Sanctuary, Uttarkashi, Uttarakhand",
    startingPoint: "Sankri",
    distance: "40–45 km",
    bestSeason: "March–June & September–December",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157747/har-ki-dun-valley_mmkicv.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157225/harikidun_1440x700_ay3irr.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157225/harkidoon_lsjy3h.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157224/Har-ki-dun-view_yuvo0y.jpg",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Valley of Gods",
        desc: "Explore the legendary Har Ki Dun valley surrounded by majestic peaks.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157225/harikidun_1440x700_ay3irr.jpg",
      },
      {
        title: "Himalayan Views",
        desc: "Witness Swargarohini, Black Peak, and Hata Peak.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157225/harkidoon_lsjy3h.webp",
      },
      {
        title: "Ancient Villages",
        desc: "Experience traditional life in villages like Osla.",
        image:
          "https://himalayandreamtreks.in/wp-content/uploads/2025/08/Har_ki_Dun_Valley_in_Summer.webp",
      },
      {
        title: "Forest Trails",
        desc: "Walk through pine, deodar, and rhododendron forests.",
        image:
          "https://discoveryhike.in/wp-content/uploads/2024/12/438CBF9B-33B8-44B0-9B23-A77A031E5D97-1024x683.jpeg",
      },
      {
        title: "Cultural Experience",
        desc: "Discover wooden architecture and Himalayan heritage.",
        image:
          "https://himtrek.co.in/wp-content/uploads/2025/09/Swargarohini-Peak-from-Har-Ki-Dun.webp",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (guesthouse and camps)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        details: ["Drive Distance: 220 km", "Stay: Guesthouse"],
      },
      {
        day: "Day 2",
        title: "Sankri to Osla",
        details: ["Drive + short trek", "Stay: Homestay / Campsite"],
      },
      {
        day: "Day 3",
        title: "Osla to Seematra",
        details: ["Trek Distance: 7 km"],
      },
      {
        day: "Day 4",
        title: "Har Ki Dun Exploration",
        details: ["Valley exploration"],
      },
      {
        day: "Day 5",
        title: "Seematra to Pauni Gharat",
        details: ["Descent trek"],
      },
      {
        day: "Day 6",
        title: "Return to Sankri",
        details: ["Drive back"],
      },
      {
        day: "Day 7",
        title: "Return to Dehradun",
        details: ["Trip ends"],
      },
    ],

    map: "https://www.google.com/maps?q=har+ki+dun+Uttarakhand&output=embed",

    about:
      "With 7 Oaks Trek and Travels, embark on a professionally organized journey to the enchanting Har Ki Dun Valley with expert guides and well-planned trekking arrangements for a safe and memorable experience.",
  },

  {
    id: "kedarkantha-trek",
    title: "Kedarkantha Trek",

    intro:
      "One of the most famous winter treks in Uttarakhand offering magical snow trails, dense pine forests, and breathtaking sunrise views from the Kedarkantha summit.",

    desc: "The Kedarkantha Trek is one of the most popular winter treks in the Garhwal Himalayas of Uttarakhand. Situated at an altitude of about 3,810 meters, the trek is known for its snow-covered landscapes, scenic forest trails, and breathtaking panoramic views of Himalayan peaks like Bandarpoonch, Swargarohini, and Black Peak. The journey begins from Sankri and passes through dense pine forests, frozen lakes, alpine meadows, and picturesque campsites. The highlight is the summit climb at sunrise, offering one of the most spectacular Himalayan views.",

    difficulty: "Easy to Moderate",
    days: "6 Days",
    altitude: "12,500 ft / 3,810 m",
    price: "₹12,999",
    tag: "Winter Snow Trek",
    rating: "4.9",
    reviews: "412",

    region: "Sankri, Uttarkashi, Uttarakhand",
    startingPoint: "Sankri",
    distance: "~20 km",
    bestSeason: "December–March (Snow), April–June, October–November",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157317/46350706971_f5f0c6b569_k_dcgvds.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157318/Kedarkantha-Trek-Details-and-Best-time-to-Visit-Kedarkantha-Trek-4-1024x922_a72qb1.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157318/kedarkantha_at8fjr.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157319/photo-1585986217770-f25e4fd55ed9_zekn7b.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157319/Sunrise-at-the-Kedarkantha-Summit-820x1024_hra1hx.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157319/pexels-arefin-shamsul-5121327-mi_cbjmv3.jpg",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Winter Snow Trek",
        desc: "One of the most famous snow treks in India.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157318/kedarkantha_at8fjr.webp",
      },
      {
        title: "Snow Forest Trails",
        desc: "Walk through dense pine and deodar forests covered in snow.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157319/pexels-arefin-shamsul-5121327-mi_cbjmv3.jpg",
      },
      {
        title: "Juda Ka Talab",
        desc: "Frozen alpine lake surrounded by forests.",
        image:
          "https://montaxe.com/wp-content/uploads/2024/09/Kedarkantha-Winter-Trek-Montaxe-22.webp",
      },
      {
        title: "Summit Sunrise",
        desc: "Experience breathtaking sunrise from Kedarkantha peak.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157319/Sunrise-at-the-Kedarkantha-Summit-820x1024_hra1hx.webp",
      },
      {
        title: "Himalayan Views",
        desc: "Panoramic views of Swargarohini, Bandarpoonch, and Black Peak.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157317/46350706971_f5f0c6b569_k_dcgvds.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation in guesthouses and tents",
      "Meals during the trek",
      "Camping equipment",
      "First aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        details: ["Drive Distance: 220 km", "Stay: Guesthouse"],
      },
      {
        day: "Day 2",
        title: "Sankri to Juda Ka Talab",
        details: ["Trek Distance: 4–5 km", "Forest trail"],
      },
      {
        day: "Day 3",
        title: "Juda Ka Talab to Base Camp",
        details: ["Gradual ascent"],
      },
      {
        day: "Day 4",
        title: "Summit Day",
        details: ["Early morning climb", "360° views"],
      },
      {
        day: "Day 5",
        title: "Return to Sankri",
        details: ["Descend through forest"],
      },
      {
        day: "Day 6",
        title: "Return to Dehradun",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Kedarkantha+Uttarakhand&output=embed",

    about:
      "With 7 Oaks Trek and Travels, experience a professionally organized Kedarkantha Trek with expert guides, comfortable camping, and complete safety support for an unforgettable Himalayan snow adventure.",
  },

  {
    id: "nag-tibba-trek",
    title: "Nag Tibba Trek",

    intro:
      "A perfect weekend Himalayan trek near Mussoorie offering stunning views of Bandarpoonch, Swargarohini, and the Gangotri ranges. Ideal for beginners and first-time trekkers.",

    desc: "The Nag Tibba Trek is one of the most popular short Himalayan treks in the Garhwal region of Uttarakhand. Standing at an altitude of about 3,022 meters, Nag Tibba is the highest peak in the Nag Tibba range and offers spectacular panoramic views of Bandarpoonch, Kedarnath Peak, and the Gangotri Group. The trek begins from Pantwari village and passes through dense oak and rhododendron forests, scenic meadows, and mountain trails before reaching the summit ridge where the ancient Nag Tibba Temple is located.",

    difficulty: "Easy to Moderate",
    days: "3 Days",
    altitude: "9,918 ft / 3,022 m",
    price: "₹6,999",
    tag: "Weekend Trek",
    rating: "4.7",
    reviews: "210",

    region: "Garhwal Himalayas, Uttarakhand",
    startingPoint: "Pantwari Village",
    distance: "10–12 km",
    bestSeason: "March–June & October–February",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157226/nag-tibba-trek-2_eeyztg.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157226/nag-tibba-trek-3_iwoaos.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157226/nag-tibba-range_rkspyn.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157227/nag-tibba-trek-route_ryivik.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157228/nagtibba_rpzjwe.avif",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157746/20241014_070421_lg86sd.jpg",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Weekend Trek",
        desc: "Perfect short Himalayan escape near Delhi.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157226/nag-tibba-trek-2_eeyztg.jpg",
      },
      {
        title: "Himalayan Views",
        desc: "Views of Bandarpoonch, Swargarohini, Kala Nag, and Gangotri peaks.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157226/nag-tibba-range_rkspyn.jpg",
      },
      {
        title: "Nag Tibba Temple",
        desc: "Visit the ancient temple dedicated to Nag Devta.",
        image:
          "https://www.shikhar.com/images/gallery/tours/180/2031696398.jpg",
      },
      {
        title: "Forest Trails",
        desc: "Walk through oak and rhododendron forests.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157226/nag-tibba-trek-3_iwoaos.jpg",
      },
      {
        title: "Winter Snow Trek",
        desc: "Experience snow-covered trails during winter.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157227/nag-tibba-trek-route_ryivik.jpg",
      },
    ],

    included: [
      "Professional trek leader and guides",
      "Accommodation in tents",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Pantwari + Trek",
        details: ["Drive + short trek to base camp"],
      },
      {
        day: "Day 2",
        title: "Summit Day",
        details: ["Sunrise summit trek", "Return to base camp"],
      },
      {
        day: "Day 3",
        title: "Return to Dehradun",
        details: ["Descend and drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=nag+tibba+Uttarakhand&output=embed",

    about:
      "With 7 Oaks Trek and Travels, experience the Nag Tibba Trek with expert guides, comfortable camping, and well-planned itineraries ensuring a safe and memorable Himalayan adventure.",
  },

  {
    id: "roopkund-trek",
    title: "Roopkund Trek",

    intro:
      "A thrilling high-altitude trek famous for the mysterious Skeleton Lake, alpine meadows of Bedni Bugyal, and breathtaking Himalayan views.",

    desc: "The Roopkund Trek is one of the most famous and mysterious treks in the Indian Himalayas. Located in Chamoli district, this trek leads to the legendary Roopkund Lake (Skeleton Lake) at 15,755 ft. Known for ancient human skeletons visible after snow melt, the trek passes through forests, villages, and vast alpine meadows like Ali Bugyal and Bedni Bugyal. It offers a perfect mix of adventure, mystery, and breathtaking Himalayan landscapes.",

    difficulty: "Moderate to Difficult",
    days: "8 Days",
    altitude: "15,755 ft / 4,800 m",
    price: "₹21,999",
    tag: "Mystery Lake Trek",
    rating: "4.8",
    reviews: "325",

    region: "Chamoli District, Uttarakhand",
    startingPoint: "Kathgodam",
    distance: "~53 km",
    bestSeason: "April–June & September–October",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157333/RoopKoond_Trek4_viohb8.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157333/22_A_mysterious_lake-2048x1536_s5cgeu.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157334/BlogspotImageUrl40686_vw8smw.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157352/Roopkundskeletons1-660x440_huzyfd.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157353/yhqt4zuzhpng5votft9oe1m9e6uu_dsc_0444-scaled_bgisu6.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Skeleton Lake",
        desc: "Visit the mysterious Roopkund Lake with ancient human remains.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157352/Roopkundskeletons1-660x440_huzyfd.jpg",
      },
      {
        title: "Ali & Bedni Bugyal",
        desc: "Walk across some of the most beautiful alpine meadows in India.",
        image:
          "https://discoveryhike.in/wp-content/uploads/2021/06/Bedini_Bugyal_Uttarakhand_India.jpg",
      },
      {
        title: "Himalayan Views",
        desc: "Views of Trishul, Nanda Ghunti, and surrounding peaks.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157333/RoopKoond_Trek4_viohb8.webp",
      },
      {
        title: "High Altitude Trek",
        desc: "Experience glacier terrain and extreme Himalayan landscapes.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157353/yhqt4zuzhpng5votft9oe1m9e6uu_dsc_0444-scaled_bgisu6.webp",
      },
      {
        title: "Summit Challenge",
        desc: "Challenging climb to Roopkund at 15,755 ft.",
        image:
          "https://i0.wp.com/chalotravellers.com/wp-content/uploads/2024/07/Roop-Kund-Trek-View.jpg?resize=636%2C426&ssl=1",
      },
      {
        title: "Iconic Expedition",
        desc: "One of the most legendary treks in the Indian Himalayas.",
        image:
          "https://altitudeadventureindia.com/wp-content/uploads/2019/01/Roopkund_Trekking.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation in guesthouses and tents",
      "All meals during the trek",
      "Camping equipment",
      "First aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Lohajung",
        details: ["Drive Distance: 210 km", "Stay: Guesthouse"],
      },
      {
        day: "Day 2",
        title: "Lohajung to Didna",
        details: ["Trek via village trails"],
      },
      {
        day: "Day 3",
        title: "Didna to Ali Bugyal",
        details: ["Forest to meadow transition"],
      },
      {
        day: "Day 4",
        title: "Ali Bugyal to Patar Nachauni",
        details: ["High altitude meadow trek"],
      },
      {
        day: "Day 5",
        title: "Patar Nachauni to Bhagwabasa",
        details: ["Steep ascent"],
      },
      {
        day: "Day 6",
        title: "Roopkund Summit",
        details: ["Visit Skeleton Lake"],
      },
      {
        day: "Day 7",
        title: "Return to Lohajung",
        details: ["Descent trek"],
      },
      {
        day: "Day 8",
        title: "Return to Kathgodam",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=roopkund+Uttarakhand&output=embed",

    about:
      "With 7 Oaks Trek and Travels, experience the legendary Roopkund Trek with expert guides, safe trekking practices, and well-organized expeditions. This trek offers a rare blend of mystery, adventure, and breathtaking Himalayan beauty.",
  },

  {
    id: "valley-of-flowers-trek",
    title: "Valley of Flowers Trek",

    intro:
      "A UNESCO World Heritage alpine valley famous for thousands of rare Himalayan flowers, scenic mountain landscapes, and the spiritual Hemkund Sahib trek.",

    desc: "The Valley of Flowers Trek is one of the most beautiful treks in the Indian Himalayas. Located in Chamoli district within the Nanda Devi Biosphere Reserve, this UNESCO site is known for vibrant alpine meadows filled with rare Himalayan flowers. During monsoon, the valley blooms into a colorful landscape featuring Blue Poppy, Himalayan Rose, and more. The trek also includes a visit to Hemkund Sahib, one of the highest Sikh shrines in the world.",

    difficulty: "Easy to Moderate",
    days: "6 Days",
    altitude: "4,300 m / 14,100 ft",
    price: "₹17,999",
    tag: "UNESCO Trek",
    rating: "4.9",
    reviews: "410",

    region: "Chamoli District, Uttarakhand",
    startingPoint: "Rishikesh",
    distance: "~38 km",
    bestSeason: "July–September",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157538/sdasdadsa_ffjylv.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157538/images_pdbeoo.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157537/images_1_uk0jic.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157537/20250424051745_2_jaemuh.avif",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157538/uttrakhand-valley-of-flowers-trek_u3ljal.webp",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157743/zjh9smyb4jwm1g4u19kyyqz402v5_shutterstock_2327763641_b22wob.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "UNESCO Heritage Site",
        desc: "Explore the world-famous Valley of Flowers.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157538/uttrakhand-valley-of-flowers-trek_u3ljal.webp",
      },
      {
        title: "Rare Himalayan Flowers",
        desc: "See Blue Poppy, Himalayan Rose, and alpine flora.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157743/zjh9smyb4jwm1g4u19kyyqz402v5_shutterstock_2327763641_b22wob.webp",
      },
      {
        title: "Hemkund Sahib",
        desc: "Visit one of the highest Sikh pilgrimage sites.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157537/20250424051745_2_jaemuh.avif",
      },
      {
        title: "Scenic Landscapes",
        desc: "Glaciers, waterfalls, and alpine meadows.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157538/sdasdadsa_ffjylv.jpg",
      },
      {
        title: "Nature Photography",
        desc: "Perfect for capturing vibrant Himalayan beauty.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157538/images_pdbeoo.jpg",
      },
      {
        title: "Easy Adventure",
        desc: "Ideal trek for beginners and nature lovers.",
        image:
          "https://hikerwolf.com/wp-content/uploads/2020/03/Valley-of-flowers-Route-e1584436278997.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation in guesthouses and camps",
      "All meals during the trek",
      "Camping equipment",
      "First aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Entry fee for Valley of Flowers National Park",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh to Pipalkoti",
        details: ["Drive along Alaknanda River"],
      },
      {
        day: "Day 2",
        title: "Govindghat to Ghangaria",
        details: ["Drive + trek"],
      },
      {
        day: "Day 3",
        title: "Valley of Flowers",
        details: ["Explore the national park"],
      },
      {
        day: "Day 4",
        title: "Hemkund Sahib",
        details: ["High altitude trek"],
      },
      {
        day: "Day 5",
        title: "Return to Pipalkoti",
        details: ["Trek + drive"],
      },
      {
        day: "Day 6",
        title: "Return to Rishikesh",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=valley+of+flowers&output=embed",

    about:
      "With 7 Oaks Trek and Travels, experience the Valley of Flowers Trek with expert guides, comfortable stays, and well-planned itineraries. This journey offers a perfect blend of Himalayan beauty, adventure, and spiritual exploration.",
  },

  {
    id: "vasuki-tal-trek",
    title: "Vasuki Tal Trek",

    intro:
      "A challenging high-altitude Himalayan expedition leading to the sacred glacial lake of Vasuki Tal, surrounded by towering peaks like Shivling, Bhagirathi, and Satopanth.",

    desc: "The Vasuki Tal Trek is a breathtaking high-altitude adventure in the Garhwal Himalayas. Starting from Gangotri, the trail passes through Chirbasa, Bhojbasa, Gaumukh, Tapovan, and Nandanvan before reaching Vasuki Tal. Surrounded by peaks like Shivling, Bhagirathi, Meru, and Thalay Sagar, this trek offers glacier crossings, alpine meadows, and dramatic landscapes.",

    difficulty: "Moderate to Difficult",
    days: "9 Days",
    altitude: "4,800 m / 15,750 ft",
    price: "₹23,999",
    tag: "High-Altitude Expedition",
    rating: "4.9",
    reviews: "178",

    region: "Gangotri National Park, Uttarkashi, Uttarakhand",
    startingPoint: "Dehradun / Gangotri",
    distance: "~60–65 km",
    bestSeason: "May–June & September–October",

    // ✅ HERO + GALLERY
    images: [
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157744/vasuki-tal-trek_duxx50.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157744/vasuki-Tal-1_ajo0y2.jpg",
      "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157744/d55186cf-d60d-420a-a3cb-d1c4d72fcf91_n6t07m.jpg",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Vasuki Tal Lake",
        desc: "Visit the sacred high-altitude glacial lake.",
        image:
          "https://www.trawell.in/admin/images/upload/387998386Kedarnath_Vasuki_Tal_Main.jpg",
      },
      {
        title: "Himalayan Peaks",
        desc: "Views of Shivling, Bhagirathi, Meru, and Thalay Sagar.",
        image:
          "https://danuadventure.in/wp-content/uploads/2024/10/Vasuki-Tal-Trek.jpg",
      },
      {
        title: "Gaumukh Glacier",
        desc: "Walk across the source of the Ganga River.",
        image:
          "https://www.nomadadventures.co.in/wp-content/uploads/2022/05/Vasuki-Tal-Trek-1.jpg",
      },
      {
        title: "Tapovan & Nandanvan",
        desc: "High-altitude alpine meadows with surreal landscapes.",
        image:
          "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157744/vasuki-tal-trek_duxx50.jpg",
      },

      {
        title: "Advanced Trek",
        desc: "Perfect for experienced trekkers seeking adventure.",
        image:
          "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/df91c81f-7b5a-44ec-9785-f03fca62c29b.webp",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation in camps and guesthouses",
      "All meals during the trek",
      "Camping equipment",
      "First aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Gangotri National Park permits",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Gangotri",
        details: ["Drive through Uttarkashi"],
      },
      {
        day: "Day 2",
        title: "Acclimatization",
        details: ["Explore Gangotri"],
      },
      {
        day: "Day 3",
        title: "Gangotri to Bhojbasa",
        details: ["Trek via Chirbasa"],
      },
      {
        day: "Day 4",
        title: "Bhojbasa to Tapovan",
        details: ["Via Gaumukh glacier"],
      },
      {
        day: "Day 5",
        title: "Tapovan to Nandanvan",
        details: ["Glacier crossing"],
      },
      {
        day: "Day 6",
        title: "Vasuki Tal Summit",
        details: ["Visit glacial lake"],
      },
      {
        day: "Day 7",
        title: "Return to Chirbasa",
        details: ["Descent"],
      },
      {
        day: "Day 8",
        title: "Return to Gangotri",
        details: ["Trek back"],
      },
      {
        day: "Day 9",
        title: "Return to Dehradun",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=vasuki+tal+Uttarakhand&output=embed",

    about:
      "With 7 Oaks Trek and Travels, explore the remote beauty of Vasuki Tal with expert guides, safe high-altitude planning, and well-organized expeditions for a truly unforgettable Himalayan adventure.",
  },

  {
    id: "kuari-pass-trek",
    title: "Kuari Pass Trek",

    intro:
      "A spectacular Himalayan trek known as the Lord Curzon Trail, offering breathtaking views of Nanda Devi, Dronagiri, Kamet, and Trishul peaks.",

    desc: "The Kuari Pass Trek is one of the most scenic treks in the Garhwal Himalayas. Known as the Lord Curzon Trail, it offers panoramic views of Nanda Devi, Dronagiri, Kamet, and Trishul. The trail passes through dense oak forests, alpine meadows, and charming villages near Joshimath, making it perfect for both beginners and experienced trekkers.",

    difficulty: "Easy to Moderate",
    days: "6 Days",
    altitude: "3,814 m / 12,516 ft",
    price: "₹12,999",
    tag: "Scenic Himalayan Trek",
    rating: "4.8",
    reviews: "287",

    region: "Garhwal Himalayas, Chamoli District, Uttarakhand",
    startingPoint: "Joshimath",
    distance: "33 km",
    bestSeason: "March – June & September – December",

    // ✅ HERO + GALLERY
    images: [
      "https://images.unsplash.com/photo-1641669600410-1c43f32ae6b8?q=80&w=1170",
      "https://images.unsplash.com/photo-1716573249423-f2ade6ce0098?q=80&w=1074",
      "https://images.unsplash.com/photo-1729185207145-e46a8c45b35a?q=80&w=1332",
      "https://images.unsplash.com/photo-1716573263049-bb901a972ce1?q=80&w=1358",
      "https://images.unsplash.com/photo-1716573252390-3cf229264e90?q=80&w=1346",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Himalayan Views",
        desc: "Views of Nanda Devi, Dronagiri, Kamet, and Trishul peaks.",
        image:
          "https://images.unsplash.com/photo-1641669600410-1c43f32ae6b8?q=80&w=1170",
      },
      {
        title: "Lord Curzon Trail",
        desc: "Historic trekking route through Garhwal Himalayas.",
        image:
          "https://images.unsplash.com/photo-1716573249423-f2ade6ce0098?q=80&w=1074",
      },
      {
        title: "Alpine Meadows",
        desc: "Beautiful bugyals and scenic landscapes.",
        image:
          "https://images.unsplash.com/photo-1729185207145-e46a8c45b35a?q=80&w=1332",
      },
      {
        title: "Forest Trails",
        desc: "Walk through oak and rhododendron forests.",
        image:
          "https://images.unsplash.com/photo-1716573263049-bb901a972ce1?q=80&w=1358",
      },
      {
        title: "Winter Trek",
        desc: "Experience snow trekking during winter months.",
        image:
          "https://images.unsplash.com/photo-1716573252390-3cf229264e90?q=80&w=1346",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh to Joshimath",
        details: ["Scenic Himalayan drive"],
      },
      {
        day: "Day 2",
        title: "Joshimath to Gulling",
        details: ["Drive + trek"],
      },
      {
        day: "Day 3",
        title: "Gulling to Khullara",
        details: ["Forest trail"],
      },
      {
        day: "Day 4",
        title: "Kuari Pass Summit",
        details: ["Panoramic views"],
      },
      {
        day: "Day 5",
        title: "Return to Joshimath",
        details: ["Descent trek"],
      },
      {
        day: "Day 6",
        title: "Return to Rishikesh",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Kuari+Pass+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we provide professionally guided Kuari Pass treks with expert planning, experienced guides, and comfortable stays to ensure a safe and memorable Himalayan adventure.",
  },

  {
    id: "ali-bedni-bugyal-trek",
    title: "Ali Bedni Bugyal Trek",

    intro:
      "One of the most beautiful alpine meadow treks in Uttarakhand offering vast rolling grasslands and stunning views of Mt. Trishul and Nanda Ghunti peaks.",

    desc: "The Ali Bedni Bugyal Trek is one of the most scenic meadow treks in the Garhwal Himalayas. The trail passes through oak and rhododendron forests before opening into the vast meadows of Ali Bugyal and Bedni Bugyal. These high-altitude grasslands offer breathtaking views of Mt. Trishul and Nanda Ghunti. The trek is ideal for beginners as well as experienced trekkers looking to explore Himalayan bugyals.",

    difficulty: "Moderate",
    days: "6 Days",
    altitude: "3,650 m / 11,975 ft",
    price: "₹12,499",
    tag: "Alpine Meadow Trek",
    rating: "4.8",
    reviews: "242",

    region: "Garhwal Himalayas, Chamoli District, Uttarakhand",
    startingPoint: "Lohajung",
    distance: "31 km",
    bestSeason: "May – June & September – October",

    // ✅ HERO + GALLERY
    images: [
      "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyalmedow.webp",
      "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyaltrekmedow.webp",
      "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyaltrek.webp",
      "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyaltrekpeake.webp",
      "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyalkund.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Ali & Bedni Bugyal",
        desc: "Vast rolling alpine meadows in the Himalayas.",
        image:
          "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyalmedow.webp",
      },
      {
        title: "Himalayan Views",
        desc: "Stunning views of Mt. Trishul and Nanda Ghunti.",
        image:
          "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyaltrekpeake.webp",
      },
      {
        title: "Forest Trails",
        desc: "Walk through oak and rhododendron forests.",
        image:
          "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyaltrekmedow.webp",
      },
      {
        title: "Camping Experience",
        desc: "Beautiful high-altitude campsites in meadows.",
        image:
          "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyaltrek.webp",
      },
      {
        title: "Seasonal Beauty",
        desc: "Golden meadows in autumn and snow in winter.",
        image:
          "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_gallery/alibednibugyalkund.webp",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh to Lohajung",
        details: ["Scenic Himalayan drive"],
      },
      {
        day: "Day 2",
        title: "Lohajung to Didna",
        details: ["Village and forest trail"],
      },
      {
        day: "Day 3",
        title: "Didna to Ali Bugyal",
        details: ["Forest to meadow transition"],
      },
      {
        day: "Day 4",
        title: "Ali to Bedni Bugyal",
        details: ["Meadow walk with peak views"],
      },
      {
        day: "Day 5",
        title: "Return to Lohajung",
        details: ["Descent trek"],
      },
      {
        day: "Day 6",
        title: "Return to Rishikesh",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Ali+Bedni+Bugyal+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we provide professionally guided Ali Bedni Bugyal treks with experienced guides, comfortable camping, and well-planned itineraries for a safe and memorable Himalayan adventure.",
  },

  {
    id: "brahmatal-trek",
    title: "Brahmatal Trek",

    intro:
      "One of the most popular winter treks in Uttarakhand, known for its frozen lake, snow-covered forests, and stunning Himalayan summit views.",

    desc: "The Brahmatal Trek is a spectacular winter trek in the Garhwal Himalayas. Famous for its frozen alpine lake and panoramic summit views, it offers breathtaking sights of Mt. Trishul and Nanda Ghunti. The trail passes through oak and rhododendron forests, snow-covered meadows, and peaceful campsites, making it perfect for beginners wanting a snow trekking experience.",

    difficulty: "Moderate",
    days: "6 Days",
    altitude: "3,718 m / 12,198 ft",
    price: "₹11,999",
    tag: "Winter Trek",
    rating: "4.8",
    reviews: "312",

    region: "Garhwal Himalayas, Chamoli District, Uttarakhand",
    startingPoint: "Lohajung",
    distance: "24 km",
    bestSeason: "December – March",

    // ✅ HERO + GALLERY
    images: [
      "https://adventurebreaks.in/wp-content/uploads/2022/03/Brahmatal-1_-768x580.jpg",
      "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-brahmatal-trek2071-Bikat-Adventures.jpg",
      "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-brahmatal-trek2080-Bikat-Adventures.jpg",
      "https://www.bikatadventures.com/images/BlogspotContents/BlogspotImageUrl42521-Bikat-Adventures.JPG",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Frozen Brahmatal Lake",
        desc: "Witness the beautiful frozen alpine lake in winter.",
        image:
          "https://adventurebreaks.in/wp-content/uploads/2022/03/Brahmatal-1_-768x580.jpg",
      },
      {
        title: "Himalayan Views",
        desc: "Views of Mt. Trishul and Nanda Ghunti.",
        image:
          "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-brahmatal-trek2071-Bikat-Adventures.jpg",
      },
      {
        title: "Snow Landscapes",
        desc: "Snow-covered forests and alpine meadows.",
        image:
          "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-brahmatal-trek2080-Bikat-Adventures.jpg",
      },
      {
        title: "Winter Trek Experience",
        desc: "One of the best snow treks in India.",
        image: "https://t.eucdn.in/tourism/lg-jpg/brahmatal-9542625.jpg",
      },
      {
        title: "Scenic Campsites",
        desc: "Camp in peaceful Himalayan surroundings.",
        image:
          "https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Brahmatal_Trek_efa1802517.webp",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh to Lohajung",
        details: ["Scenic drive"],
      },
      {
        day: "Day 2",
        title: "Lohajung to Bekaltal",
        details: ["Forest trek"],
      },
      {
        day: "Day 3",
        title: "Bekaltal to Brahmatal",
        details: ["Meadow and forest trail"],
      },
      {
        day: "Day 4",
        title: "Summit Day",
        details: ["Panoramic Himalayan views"],
      },
      {
        day: "Day 5",
        title: "Return to Lohajung",
        details: ["Descent trek"],
      },
      {
        day: "Day 6",
        title: "Return to Rishikesh",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Brahmatal+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we provide professionally guided Brahmatal treks with expert planning, comfortable camping, and experienced guides to ensure a safe and memorable winter trekking experience.",
  },

  {
    id: "pangarchulla-peak-trek",
    title: "Pangarchulla Peak Trek",

    intro:
      "An exciting summit trek in the Garhwal Himalayas offering thrilling snow climbs and spectacular views of Nanda Devi, Dronagiri, and Hathi-Ghoda peaks.",

    desc: "The Pangarchulla Peak Trek is a thrilling Himalayan summit trek located in Chamoli, Uttarakhand. Following a section of the Kuari Pass trail, it leads to the challenging Pangarchulla summit. The trek offers breathtaking views of Nanda Devi, Dronagiri, Kamet, Chaukhamba, and Hathi-Ghoda peaks. With forest trails, alpine meadows, and snowy ridgelines, it’s perfect for trekkers seeking their first real summit experience.",

    difficulty: "Moderate to Difficult",
    days: "6 Days",
    altitude: "4,590 m / 15,059 ft",
    price: "₹13,499",
    tag: "Summit Trek",
    rating: "4.7",
    reviews: "188",

    region: "Garhwal Himalayas, Chamoli District, Uttarakhand",
    startingPoint: "Joshimath",
    distance: "36 km",
    bestSeason: "April – June & September – November",

    // ✅ HERO + GALLERY
    images: [
      "https://images.prismic.io/indiahike/d32b4e81-390f-48b4-a0da-6e0b254d3e8e_Pangarchulla_PC_Satyen+Dasgupta_trailwithtrekkers_winter_snow_routes_.jpg?auto=compress,format",
      "https://danuadventure.in/wp-content/uploads/2024/10/Pangarchulla-Peak-Trek.jpg",
      "https://madtrek.com/wp-content/uploads/2025/09/Snow-Draped-Himalayan-Ridge-Near-Pangarchulla-Peak-scaled.jpeg",
      "https://trekupindia.com/_next/image?url=https%3A%2F%2Fcdn.trekupindia.com%2Fmedia%2F1769082277936-pangarchulla.webp&w=1920&q=65",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Summit Climb",
        desc: "Climb to the challenging Pangarchulla Peak.",
        image:
          "https://trekupindia.com/_next/image?url=https%3A%2F%2Fcdn.trekupindia.com%2Fmedia%2F1769082277936-pangarchulla.webp&w=1920&q=65",
      },
      {
        title: "Himalayan Views",
        desc: "Views of Nanda Devi, Dronagiri, Kamet, and Chaukhamba.",
        image:
          "https://www.bontravelindia.com/wp-content/uploads/2023/12/Pangarchulla-Peak-Trek-Uttarakhand.jpg",
      },
      {
        title: "Snow Trek Experience",
        desc: "Exciting snow trekking during spring season.",
        image:
          "https://trekupindia.com/_next/image?url=https%3A%2F%2Fcdn.trekupindia.com%2Fmedia%2F1769082277936-pangarchulla.webp&w=1920&q=65",
      },
      {
        title: "Ridge Climb",
        desc: "Adventure ridge walk with stunning exposure.",
        image:
          "https://trekupindia.com/_next/image?url=https%3A%2F%2Fcdn.trekupindia.com%2Fmedia%2F1769082277936-pangarchulla.webp&w=1920&q=65",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh to Joshimath",
        details: ["Scenic drive"],
      },
      {
        day: "Day 2",
        title: "Joshimath to Gulling",
        details: ["Drive + trek"],
      },
      {
        day: "Day 3",
        title: "Gulling to Khullara",
        details: ["Forest trail"],
      },
      {
        day: "Day 4",
        title: "Acclimatization",
        details: ["Preparation for summit"],
      },
      {
        day: "Day 5",
        title: "Summit Day",
        details: ["Peak climb and return"],
      },
      {
        day: "Day 6",
        title: "Return to Joshimath",
        details: ["Descent and drive"],
      },
    ],

    map: "https://www.google.com/maps?q=Pangarchulla+Peak+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we provide professionally guided Pangarchulla treks with trained mountain guides, proper safety gear, and well-planned itineraries to ensure a safe and thrilling summit experience.",
  },

  {
    id: "satopanth-lake-trek",
    title: "Satopanth Lake Trek",

    intro:
      "A high-altitude Himalayan trek leading to the sacred Satopanth Lake, surrounded by peaks like Chaukhamba, Neelkanth, and Balakun.",

    desc: "The Satopanth Lake Trek is a breathtaking high-altitude trek near Badrinath in Uttarakhand. The trek leads to the mystical Satopanth Lake, a triangular glacial lake situated above 4,600 meters. According to mythology, Brahma, Vishnu, and Shiva are believed to visit this lake. The trail follows the Alaknanda valley and passes through glaciers, moraines, and rugged Himalayan terrain, offering stunning views of Chaukhamba, Neelkanth, Balakun, and Parvati Peak.",

    difficulty: "Difficult",
    days: "7 Days",
    altitude: "4,600 m / 15,092 ft",
    price: "₹15,999",
    tag: "High Altitude Trek",
    rating: "4.7",
    reviews: "128",

    region: "Garhwal Himalayas, Chamoli District, Uttarakhand",
    startingPoint: "Badrinath",
    distance: "25 km",
    bestSeason: "May – June & September – October",

    // ✅ HERO + GALLERY
    images: [
      "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SatopanthTalTrek/satopanth-tal.jpg",
      "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SatopanthTalTrek/way-to-vasudhara-fall.jpg",
      "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SatopanthTalTrek/bheem-pul.jpg",
      "https://danuadventure.in/wp-content/uploads/2024/10/Satopanth-Lake-Trek-Itinerary.jpg",
      "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-satopanth-lake-trek2130-Bikat-Adventures.JPG",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Satopanth Lake",
        desc: "Sacred triangular glacial lake in the Himalayas.",
        image:
          "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SatopanthTalTrek/satopanth-tal.jpg",
      },
      {
        title: "Himalayan Peaks",
        desc: "Views of Chaukhamba, Neelkanth, and Balakun.",
        image:
          "https://www.merakitriangle.com/wp-content/uploads/2020/09/satopanth-lake.jpg",
      },
      {
        title: "Glacier Terrain",
        desc: "Experience moraine and glacier trekking.",
        image:
          "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SatopanthTalTrek/way-to-vasudhara-fall.jpg",
      },
      {
        title: "Spiritual Significance",
        desc: "Associated with Brahma, Vishnu, and Shiva.",
        image:
          "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SatopanthTalTrek/bheem-pul.jpg",
      },
      {
        title: "High Altitude Adventure",
        desc: "Challenging trek in pristine Himalayan terrain.",
        image:
          "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-satopanth-lake-trek2135-Bikat-Adventures.JPG",
      },
      {
        title: "Remote Wilderness",
        desc: "Explore untouched and peaceful landscapes.",
        image:
          "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-satopanth-lake-trek2130-Bikat-Adventures.JPG",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh to Badrinath",
        details: ["Scenic Himalayan drive"],
      },
      {
        day: "Day 2",
        title: "Badrinath to Lakshmi Van",
        details: ["Drive + trek via Mana village"],
      },
      {
        day: "Day 3",
        title: "Lakshmi Van to Chakrateerth",
        details: ["Glacier and moraine trail"],
      },
      {
        day: "Day 4",
        title: "Satopanth Lake",
        details: ["Explore sacred lake"],
      },
      {
        day: "Day 5",
        title: "Return to Chakrateerth",
        details: ["Descent"],
      },
      {
        day: "Day 6",
        title: "Return to Badrinath",
        details: ["Trek back"],
      },
      {
        day: "Day 7",
        title: "Return to Rishikesh",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Satopanth+Lake+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we offer professionally guided Satopanth Lake treks with expert planning, experienced guides, and safe high-altitude arrangements for a truly unforgettable Himalayan expedition.",
  },

  {
    id: "rupin-pass-trek",
    title: "Rupin Pass Trek",

    intro:
      "A spectacular cross-over Himalayan trek connecting Uttarakhand and Himachal Pradesh, known for waterfalls, snow bridges, and dramatic landscapes.",

    desc: "The Rupin Pass Trek is one of the most diverse and adventurous cross-over treks in the Indian Himalayas. Starting from Dhaula in Uttarakhand and ending in Sangla Valley in Himachal Pradesh, the trail offers forests, villages, hanging bridges, alpine meadows, and massive waterfalls. The iconic climb beside the Rupin waterfall and the high-altitude Rupin Pass crossing make it one of the most thrilling trekking experiences in India.",

    difficulty: "Difficult",
    days: "8 Days",
    altitude: "4,650 m / 15,255 ft",
    price: "₹17,999",
    tag: "Cross-Over Trek",
    rating: "4.8",
    reviews: "154",

    region: "Uttarakhand – Himachal Pradesh Himalayas",
    startingPoint: "Dhaula",
    distance: "52 km",
    bestSeason: "May – June & September – October",

    // ✅ HERO + GALLERY
    images: [
      "https://nohradhar.com/wp-content/uploads/2025/06/Rupin_pass_1-1536x862.png",
      "https://nohradhar.com/wp-content/uploads/2025/06/rupin_pass_3-1536x1024.jpg",
      "https://nohradhar.com/wp-content/uploads/2025/06/rupin_pass_4.jpg",
      "https://images.ctfassets.net/ir2dv14cagbr/6609B6bqm8zO22BkoK1khJ/94b752913ba6263890b57e2cd266a55c/rupin-banner.jpg",
      "https://himtrek.co.in/wp-content/uploads/2025/11/Rupin-pass-trek-1200x700.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Cross-Over Trek",
        desc: "Journey from Uttarakhand to Himachal Pradesh.",
        image:
          "https://nohradhar.com/wp-content/uploads/2025/06/Rupin_pass_1-1536x862.png",
      },
      {
        title: "Rupin Waterfall",
        desc: "Climb beside the iconic multi-tier waterfall.",
        image:
          "https://images.ctfassets.net/ir2dv14cagbr/6609B6bqm8zO22BkoK1khJ/94b752913ba6263890b57e2cd266a55c/rupin-banner.jpg",
      },
      {
        title: "Rupin Pass Summit",
        desc: "Cross the high-altitude pass with panoramic views.",
        image:
          "https://nohradhar.com/wp-content/uploads/2025/06/rupin_pass_3-1536x1024.jpg",
      },
      {
        title: "Snow Bridges",
        desc: "Walk across thrilling snow bridges and ridges.",
        image:
          "https://nohradhar.com/wp-content/uploads/2025/06/rupin_pass_4.jpg",
      },
      {
        title: "Himalayan Villages",
        desc: "Experience remote mountain culture and settlements.",
        image:
          "https://nohradhar.com/wp-content/uploads/2025/06/rupin_pass_3-1536x1024.jpg",
      },
      {
        title: "Diverse Landscapes",
        desc: "Forests, meadows, glaciers, and waterfalls in one trek.",
        image:
          "https://images.ctfassets.net/ir2dv14cagbr/6609B6bqm8zO22BkoK1khJ/94b752913ba6263890b57e2cd266a55c/rupin-banner.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Dhaula",
        details: ["Drive through Tons valley"],
      },
      {
        day: "Day 2",
        title: "Dhaula to Sewa",
        details: ["Village and forest trail"],
      },
      {
        day: "Day 3",
        title: "Sewa to Jhaka",
        details: ["Hanging village trek"],
      },
      {
        day: "Day 4",
        title: "Jhaka to Saruwas Thatch",
        details: ["Alpine transition"],
      },
      {
        day: "Day 5",
        title: "Waterfall Camp",
        details: ["Climb beside Rupin waterfall"],
      },
      {
        day: "Day 6",
        title: "Rupin Pass Summit",
        details: ["Cross pass and descend"],
      },
      {
        day: "Day 7",
        title: "Ronti Gad to Sangla",
        details: ["Descend into valley"],
      },
      {
        day: "Day 8",
        title: "Sangla to Shimla",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Rupin+Pass+Trek&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we offer professionally guided Rupin Pass treks with expert planning, experienced guides, and high-quality camping arrangements for a safe and unforgettable Himalayan expedition.",
  },

  {
    id: "bali-pass-trek",
    title: "Bali Pass Trek",

    intro:
      "A challenging high-altitude Himalayan trek connecting Har Ki Dun valley to Yamunotri, offering breathtaking views of Swargarohini and Bandarpoonch peaks.",

    desc: "The Bali Pass Trek is one of the most adventurous high-altitude treks in Uttarakhand. Connecting the Har Ki Dun valley with the Yamunotri region, the trail offers forests, alpine meadows, glaciers, and rugged mountain terrain. Trekkers witness stunning views of Swargarohini, Bandarpoonch, and Kala Nag while crossing the high-altitude Bali Pass at nearly 5,000 meters.",

    difficulty: "Difficult",
    days: "8 Days",
    altitude: "4,950 m / 16,240 ft",
    price: "₹18,499",
    tag: "High Altitude Expedition",
    rating: "4.7",
    reviews: "132",

    region: "Garhwal Himalayas, Uttarkashi District, Uttarakhand",
    startingPoint: "Sankri",
    distance: "60 km",
    bestSeason: "May – June & September – October",

    // ✅ HERO + GALLERY
    images: [
      "https://thinairexpedition.com/static/images/20260127_125018_balipasstrek.jpg",
      "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/RupinPassBestSeason/rupin-waterfall.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcWvsgOZWrKpaA7Js1EqLfXK8FArtR_KghA&s",
      "https://trekonindia.com/wp-content/uploads/2023/08/trekonindia-bali-pass-terk-5.jpg",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Bali Pass Summit",
        desc: "Cross the high-altitude Bali Pass at nearly 5,000 meters.",
        image:
          "https://thinairexpedition.com/static/images/20260127_125018_balipasstrek.jpg",
      },
      {
        title: "Himalayan Views",
        desc: "Views of Swargarohini, Bandarpoonch, and Kala Nag.",
        image:
          "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/RupinPassBestSeason/rupin-waterfall.jpg",
      },
      {
        title: "Har Ki Dun Valley",
        desc: "Trek through one of the most beautiful Himalayan valleys.",
        image:
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/3d/37/3c.jpg",
      },
      {
        title: "Glacier Crossings",
        desc: "Experience glacier and moraine terrain.",
        image:
          "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_images/68d8ebf5b1b71.jpg",
      },
      {
        title: "Remote Villages",
        desc: "Explore traditional Himalayan settlements.",
        image:
          "https://www.potala-himalaya.com/uploads/potala_himalaya/gallery/main/5ce674cbc6a96d889f48dd6cd80ccdb6_har_ki_dun_2.jpg",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        details: ["Drive through Tons valley"],
      },
      {
        day: "Day 2",
        title: "Sankri to Seema",
        details: ["Drive + trek"],
      },
      {
        day: "Day 3",
        title: "Seema to Har Ki Dun",
        details: ["Valley trek"],
      },
      {
        day: "Day 4",
        title: "Har Ki Dun to Ruinsara Tal",
        details: ["Meadow and lake trek"],
      },
      {
        day: "Day 5",
        title: "Ruinsara to Odari",
        details: ["High altitude trail"],
      },
      {
        day: "Day 6",
        title: "Bali Pass Summit",
        details: ["Pass crossing and descent"],
      },
      {
        day: "Day 7",
        title: "To Yamunotri",
        details: ["Descend to temple"],
      },
      {
        day: "Day 8",
        title: "Return to Dehradun",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Bali+Pass+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we offer professionally guided Bali Pass expeditions with expert planning, experienced guides, and high-altitude support for a safe and thrilling Himalayan adventure.",
  },

  {
    id: "deoria-tal-trek",
    title: "Deoria Tal Trek",

    intro:
      "A short and scenic Himalayan trek leading to the beautiful Deoria Tal lake, famous for its reflection of the Chaukhamba peaks.",

    desc: "The Deoria Tal Trek is a beautiful and beginner-friendly trek in the Garhwal Himalayas. Starting from Sari village, the trail leads to Deoria Tal, a serene high-altitude lake known for reflecting the Chaukhamba peaks. Surrounded by oak and rhododendron forests, this trek offers a peaceful and rewarding Himalayan experience perfect for beginners and weekend travelers.",

    difficulty: "Easy",
    days: "2 Days",
    altitude: "2,438 m / 7,999 ft",
    price: "₹4,999",
    tag: "Lake Trek",
    rating: "4.7",
    reviews: "198",

    region: "Garhwal Himalayas, Rudraprayag District, Uttarakhand",
    startingPoint: "Sari Village",
    distance: "5 km",
    bestSeason: "March – June & September – December",

    // ✅ HERO + GALLERY
    images: [
      "https://himtrek.co.in/wp-content/uploads/2025/10/Deoria-Tal-Trek-2.webp",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/75/d5/1a/white-hills-adventure.jpg?w=1400&h=-1&s=1",
      "https://travellingslacker.com/wp-content/uploads/2018/12/13936301868_4bb3434a77_o-1024x680.jpg",
      "https://choptaresort.com/wp-content/uploads/2018/04/Deoriatal-Lake-1920x800.png",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Deoria Tal Lake",
        desc: "Crystal clear alpine lake in the Himalayas.",
        image:
          "https://himtrek.co.in/wp-content/uploads/2025/10/Deoria-Tal-Trek-2.webp",
      },
      {
        title: "Chaukhamba Reflection",
        desc: "Perfect reflection of Himalayan peaks on the lake.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/75/d5/1a/white-hills-adventure.jpg?w=1400&h=-1&s=1",
      },
      {
        title: "Forest Trails",
        desc: "Walk through oak and rhododendron forests.",
        image:
          "https://travellingslacker.com/wp-content/uploads/2018/12/13936301868_4bb3434a77_o-1024x680.jpg",
      },
      {
        title: "Peaceful Campsite",
        desc: "Camp beside a serene Himalayan lake.",
        image: "https://t.eucdn.in/tourism/lg/deoriyatal-4316102.webp",
      },
    ],

    included: [
      "Professional trek leader and guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh to Sari + Trek",
        details: ["Drive + short trek to campsite"],
      },
      {
        day: "Day 2",
        title: "Return",
        details: ["Sunrise view and descend"],
      },
    ],

    map: "https://www.google.com/maps?q=Deoria+Tal+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we offer guided Deoria Tal treks with comfortable camping, experienced guides, and well-planned itineraries for a peaceful and memorable Himalayan experience.",
  },

  {
    id: "pindari-glacier-trek",
    title: "Pindari Glacier Trek",

    intro:
      "A classic Himalayan glacier trek in Uttarakhand that takes you to the majestic Pindari Glacier, surrounded by towering snow-covered peaks.",

    desc: "The Pindari Glacier Trek is a famous glacier trek in the Kumaon Himalayas. Located in Bageshwar district, the trail leads to the stunning Pindari Glacier at the base of Nanda Devi and Nanda Kot. The route passes through forests, villages, and river valleys along the Pindar River, offering breathtaking Himalayan views and a classic trekking experience.",

    difficulty: "Moderate",
    days: "7 Days",
    altitude: "3,660 m / 12,008 ft",
    price: "₹13,999",
    tag: "Glacier Trek",
    rating: "4.7",
    reviews: "176",

    region: "Kumaon Himalayas, Bageshwar District, Uttarakhand",
    startingPoint: "Khati Village",
    distance: "45 km",
    bestSeason: "April – June & September – October",

    // ✅ HERO + GALLERY
    images: [
      "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/2265f2c4-2297-452f-8c79-a0ca98ebb7e6.webp",
      "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/5c28f07b-5a04-460d-85b9-db2687ec2464.webp",
      "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/8171928a-4273-4dfb-9fa7-b3b474f17eeb.webp",
      "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/31b260d5-aded-4b66-8ab2-ccfa94b7e3f5.webp",
    ],

    // ✅ STRUCTURED HIGHLIGHTS
    highlights: [
      {
        title: "Pindari Glacier",
        desc: "Visit the stunning Himalayan glacier.",
        image:
          "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/2265f2c4-2297-452f-8c79-a0ca98ebb7e6.webp",
      },
      {
        title: "Himalayan Peaks",
        desc: "Views of Nanda Devi and Nanda Kot.",
        image:
          "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/5c28f07b-5a04-460d-85b9-db2687ec2464.webp",
      },
      {
        title: "River Valley Trails",
        desc: "Trek along the scenic Pindar river.",
        image:
          "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/31b260d5-aded-4b66-8ab2-ccfa94b7e3f5.webp",
      },
      {
        title: "Mountain Villages",
        desc: "Experience life in villages like Khati.",
        image: "https://footloosedev.com/wp-content/uploads/khati-village.jpg",
      },
      {
        title: "Forest Landscapes",
        desc: "Walk through dense forests and alpine terrain.",
        image:
          "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/8171928a-4273-4dfb-9fa7-b3b474f17eeb.webp",
      },
    ],

    included: [
      "Professional trek leader and experienced guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Khati",
        details: ["Drive through Kumaon hills"],
      },
      {
        day: "Day 2",
        title: "Khati to Dwali",
        details: ["River valley trek"],
      },
      {
        day: "Day 3",
        title: "Dwali to Phurkia",
        details: ["Gradual ascent"],
      },
      {
        day: "Day 4",
        title: "Pindari Glacier Visit",
        details: ["Glacier viewpoint trek"],
      },
      {
        day: "Day 5",
        title: "Return to Dwali",
        details: ["Descent"],
      },
      {
        day: "Day 6",
        title: "Return to Khati",
        details: ["Forest trail"],
      },
      {
        day: "Day 7",
        title: "Return to Kathgodam",
        details: ["Drive back"],
      },
    ],

    map: "https://www.google.com/maps?q=Pindari+Glacier+Uttarakhand&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we provide professionally guided Pindari Glacier treks with experienced guides, comfortable stays, and well-planned itineraries for a safe and memorable Himalayan adventure.",
  },

  {
    id: "kafni-glacier-trek",
    title: "Kafni Glacier Trek",

    intro:
      "A scenic Himalayan glacier trek in the Kumaon region leading to the pristine Kafni Glacier surrounded by majestic mountain peaks.",

    desc: "The Kafni Glacier Trek is a peaceful and less-crowded trek in the Kumaon Himalayas. The trail follows the Kafni river valley through forests and alpine landscapes, leading to the stunning Kafni Glacier. Trekkers enjoy views of Nanda Kot, Nanda Devi East, and Maiktoli peaks while exploring pristine Himalayan wilderness.",

    difficulty: "Moderate",
    days: "7 Days",
    altitude: "3,860 m / 12,664 ft",
    price: "₹14,499",
    tag: "Glacier Trek",
    rating: "4.6",
    reviews: "118",

    region: "Kumaon Himalayas, Bageshwar District, Uttarakhand",
    startingPoint: "Khati Village",
    distance: "40 km",
    bestSeason: "April – June & September – October",

    images: [
      "https://www.peakadventuretour.com/assets/images/kafni-glacier-trek2.webp",
      "https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/kafni-glacier-trek1.jpg",
      "https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/kafni-glacier-trek6.jpg",
      "https://www.peakadventuretour.com/assets/images/kafni-glacier-trek1.webp",
      "https://uttarakhandtriptrek.com/wp-content/uploads/2019/07/Pindari-2.jpg",
    ],

    highlights: [
      {
        title: "Kafni Glacier",
        desc: "Visit the pristine Himalayan glacier.",
        image:
          "https://www.peakadventuretour.com/assets/images/kafni-glacier-trek2.webp",
      },
      {
        title: "Peak Views",
        desc: "Views of Nanda Kot and Nanda Devi East.",
        image:
          "https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/kafni-glacier-trek6.jpg",
      },
      {
        title: "River Valley",
        desc: "Trek along the scenic Kafni valley.",
        image:
          "https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/kafni-glacier-trek1.jpg",
      },
      {
        title: "Peaceful Trails",
        desc: "Less crowded Himalayan trekking route.",
        image:
          "https://www.peakadventuretour.com/assets/images/kafni-glacier-trek1.webp",
      },
      {
        title: "Mountain Villages",
        desc: "Experience traditional Kumaon culture.",
        image:
          "https://uttarakhandtriptrek.com/wp-content/uploads/2019/07/Pindari-2.jpg",
      },
      {
        title: "Alpine Landscapes",
        desc: "Forests, meadows, and glacier terrain.",
        image:
          "https://www.peakadventuretour.com/assets/images/kafni-glacier-trek2.webp",
      },
    ],

    included: [
      "Professional trek leader and guides",
      "Accommodation (camps / guesthouse)",
      "Meals during the trek",
      "Camping equipment",
      "Basic first aid",
      "Trekking Gear",
    ],

    excluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
    ],

    itinerary: [
      { day: "Day 1", title: "Kathgodam to Khati", details: ["Drive"] },
      { day: "Day 2", title: "Khati to Dwali", details: ["Forest trek"] },
      { day: "Day 3", title: "Dwali to Kafni", details: ["Valley trail"] },
      { day: "Day 4", title: "Glacier Visit", details: ["Explore glacier"] },
      { day: "Day 5", title: "Return to Dwali", details: ["Descend"] },
      { day: "Day 6", title: "Return to Khati", details: ["Village trail"] },
      { day: "Day 7", title: "Return to Kathgodam", details: ["Drive"] },
    ],

    map: "https://www.google.com/maps?q=Kafni+Glacier+Uttarakhand&output=embed",

    about:
      "7 Oaks Trek and Travels offers guided Kafni Glacier treks with expert planning and comfortable arrangements for a peaceful Himalayan experience.",
  },

  {
    id: "hampta-pass-trek",
    title: "Hampta Pass Trek",

    intro:
      "A dramatic crossover trek connecting lush Kullu Valley to the stark Spiti landscapes.",

    desc: "The Hampta Pass Trek offers a unique transition from green valleys of Kullu to the barren mountains of Spiti. Starting near Manali, the trail crosses rivers, glaciers, and alpine meadows before reaching the high-altitude pass and descending into the cold desert of Spiti.",

    difficulty: "Moderate",
    days: "5 Days",
    altitude: "4,270 m / 14,010 ft",
    price: "₹11,999",
    tag: "Cross-over Trek",
    rating: "4.8",
    reviews: "420",

    region: "Pir Panjal Range, Himachal Pradesh",
    startingPoint: "Jobra (Manali)",
    distance: "26 km",
    bestSeason: "June – September",

    images: [
      "https://himalayandaredevils.com/storage/uploads/67e2a588dadee.jpg",
      "https://blogs.tripzygo.in/wp-content/uploads/2025/06/hampta-pass-trek-1-1536x737.jpg",
      "https://blogs.tripzygo.in/wp-content/uploads/2025/06/Post-Monsoon-Season-mid-September-to-October-1536x737.jpg",
      "https://himtrek.co.in/wp-content/uploads/2023/09/IMG_20210929_165034.jpg",
      "https://miro.medium.com/1*9dXM83s3raW7jibaqxuz6w.jpeg",
    ],

    highlights: [
      {
        title: "Crossover Trek",
        desc: "Rare transition from green Kullu to barren Spiti.",
        image: "https://miro.medium.com/1*9dXM83s3raW7jibaqxuz6w.jpeg",
      },
      {
        title: "Hampta Pass",
        desc: "High altitude pass with dramatic landscapes.",
        image:
          "https://blogs.tripzygo.in/wp-content/uploads/2025/06/hampta-pass-trek-1-1536x737.jpg",
      },
      {
        title: "River Crossings",
        desc: "Thrilling crossings of Himalayan streams.",
        image:
          "https://blogs.tripzygo.in/wp-content/uploads/2025/06/Post-Monsoon-Season-mid-September-to-October-1536x737.jpg",
      },
      {
        title: "Alpine Meadows",
        desc: "Beautiful green valleys and campsites.",
        image:
          "https://himalayandaredevils.com/storage/uploads/67e2a588dadee.jpg",
      },
      {
        title: "Chandratal Lake",
        desc: "Optional visit to the stunning moon lake.",
        image:
          "https://himtrek.co.in/wp-content/uploads/2023/09/IMG_20210929_165034.jpg",
      },
    ],

    included: [
      "Professional trek leader and guides",
      "Accommodation (tents during trek)",
      "All meals during trek",
      "Camping equipment (tents, sleeping bags, mats)",
      "Permits and forest fees",
      "First aid and safety equipment",
      "Trekking Gear",
    ],

    excluded: [
      "Transport to/from Manali",
      "Personal trekking gear",
      "Travel insurance",
      "Porter or mule charges",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Manali to Jobra to Chika",
        details: [
          "Drive from Manali to Jobra",
          "Trek through forests to Chika campsite",
        ],
      },
      {
        day: "Day 2",
        title: "Chika to Balu Ka Ghera",
        details: ["Trek along river valley", "Views of snow-clad peaks"],
      },
      {
        day: "Day 3",
        title: "Balu Ka Ghera to Hampta Pass to Shea Goru",
        details: ["Climb to Hampta Pass", "Descend into Spiti valley"],
      },
      {
        day: "Day 4",
        title: "Shea Goru to Chatru",
        details: ["Descend through rocky terrain", "Follow river trail"],
      },
      {
        day: "Day 5",
        title: "Chatru to Chandratal (optional) to Manali",
        details: ["Visit Chandratal Lake", "Drive back to Manali"],
      },
    ],

    map: "https://www.google.com/maps?q=Hampta+Pass&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we offer expertly guided Hampta Pass treks with well-planned itineraries, experienced trek leaders, and safe camping arrangements. This trek is perfect for those looking to experience both lush Himalayan valleys and the stark beauty of Spiti in one journey.",
  },

  {
    id: "beas-kund-trek",
    title: "Beas Kund Trek",

    intro:
      "A short glacier trek near Manali leading to the origin of the Beas River.",

    desc: "The Beas Kund Trek is a beginner-friendly Himalayan trek that takes you to the glacial source of the Beas River. Surrounded by towering peaks like Hanuman Tibba and Friendship Peak, it offers a perfect mix of adventure and scenic beauty in a short duration.",

    difficulty: "Easy to Moderate",
    days: "3 Days",
    altitude: "3,700 m",
    price: "₹6,999",
    tag: "Glacier Trek",
    rating: "4.7",
    reviews: "290",

    region: "Pir Panjal Range, Himachal Pradesh",
    startingPoint: "Solang Valley (Manali)",
    distance: "16 km",
    bestSeason: "May – October",

    images: [
      "https://res.cloudinary.com/dyiffrkzh/image/upload/v1700289195/bbj/fiytvtsirqsomej1b2j8.jpg",
      "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20240923-893941706-1727088830.jpg",
      "https://www.bikatadventures.com/images/BlogspotContents/BlogspotImageUrl48511-Bikat-Adventures.JPG",
      "https://raftaaradventure.in/wp-content/uploads/2021/02/beas_kund_day3.jpeg",
    ],

    highlights: [
      {
        title: "Beas Kund Glacier",
        desc: "Origin point of the Beas River.",
        image:
          "https://static.india.com/wp-content/uploads/2019/01/Beas-Kund-Trek.jpg",
      },
      {
        title: "Mountain Peaks",
        desc: "Views of Hanuman Tibba & Friendship Peak.",
        image:
          "https://raftaaradventure.in/wp-content/uploads/2021/02/beas_kund_day3.jpeg",
      },
      {
        title: "Alpine Meadows",
        desc: "Lush green landscapes and campsites.",
        image:
          "https://www.bikatadventures.com/images/BlogspotContents/BlogspotImageUrl48511-Bikat-Adventures.JPG",
      },
      {
        title: "Short Duration",
        desc: "Perfect quick Himalayan getaway.",
        image:
          "https://res.cloudinary.com/dyiffrkzh/image/upload/v1700289195/bbj/fiytvtsirqsomej1b2j8.jpg",
      },
      {
        title: "Beginner Friendly",
        desc: "Ideal for first-time trekkers.",
        image:
          "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20240923-893941706-1727088830.jpg",
      },
    ],

    included: [
      "Professional trek leader and guides",
      "Accommodation (tents)",
      "All meals during trek",
      "Camping equipment",
      "Permits and forest fees",
      "Basic first aid kit",
      "Trekking Gear",
    ],

    excluded: [
      "Transport to/from Manali",
      "Personal trekking gear",
      "Travel insurance",
      "Porter charges",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Manali to Solang Valley to Dhundi",
        details: ["Drive to Solang Valley", "Trek to Dhundi campsite"],
      },
      {
        day: "Day 2",
        title: "Dhundi to Beas Kund and back",
        details: ["Trek to Beas Kund glacier", "Return to campsite"],
      },
      {
        day: "Day 3",
        title: "Dhundi to Solang to Manali",
        details: ["Descend to Solang Valley", "Drive back to Manali"],
      },
    ],

    map: "https://www.google.com/maps?q=Beas+Kund&output=embed",

    about:
      "At 7 Oaks Trek and Travels, we provide safe and well-organized Beas Kund treks ideal for beginners and families. With experienced guides and comfortable camping, this trek offers a perfect introduction to the Himalayan trekking experience.",
  },
];
