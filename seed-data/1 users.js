const bcrypt = require('bcryptjs');

module.exports = [
    {
        id: 2,
        first_name: 'Dan',
        last_name: 'Brown',
        password: bcrypt.hashSync('password123', 10),
        alias: 'MenteeAlias',
        street: '456 Second Street',
        city: "Atlanta",
        state: "Georgia",
        zip: "30002",
        country: "United States of America",
        lat: 33.7490,
        long: -84.3880,
        email: 'dan.brown@example.com',
        phone: '123-456-7890',
        can_text: false,
        pic: 'https://hips.hearstapps.com/hmg-prod/images/701/dating-app-photo-mistakes-main-1515525122.jpg',
        social_ig: 'dan_brown_ig',
        social_facebook: 'john.doe.facebook',
        social_soundcloud: 'john_doe_soundcloud',
        social_youtube: null,
        social_linkedin: 'john_doe_linkedin',
        portfolioLink1: null,
        portfolioLink2: null,
        portfolioLink3: null,
        bio: "I am passionate about learning guitar and exploring various genres.",
    },
    {
        id: 3,
        first_name: 'Jerry',
        last_name: 'Cantrell',
        password: bcrypt.hashSync('password123', 10),
        alias: 'Jerry',
        street: '123 Main St',
        city: 'Tacoma',
        state: 'Washington',
        zip: '98001',
        country: 'United States of America',
        lat: 47.2529,
        long: -122.4443,
        email: 'jerry@aliceinchains.com',
        phone: '555-555-5555',
        can_text: false,
        pic: 'https://imageio.forbes.com/specials-images/imageserve/626980c1496065da495a6d82/Jerry-Cantrell-poses-in-Chicago-on-night-two-of-the--Brighten--tour--Saturday--March/960x0.jpg?format=jpg&width=960',
        social_ig: 'jerrycantrell',
        social_facebook: 'JerryCantrell',
        social_soundcloud: 'jerrycantrellsound',
        social_youtube: null,
        social_linkedin: 'jerry-cantrell',
        portfolioLink1: 'https://www.aliceinchains.com',
        portfolioLink2: null,
        portfolioLink3: null,
        bio: 'Lead guitarist in Alice In Chains since the band was formed.',
    },
    {
        id: 4,
        first_name: 'Rabea',
        last_name: 'Massaad',
        password: bcrypt.hashSync('password123', 10),
        alias: 'Rabea',
        street: '456 Oak St',
        city: 'Brighton',
        state: 'England',
        zip: 'BN1 1AB',
        country: 'United Kingdom',
        lat: 50.8225,
        long: -0.1372,
        email: 'rabea@example.com',
        phone: '555-555-5555',
        can_text: false,
        pic: 'https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/02/10124542/980x980-Rabea-Massaad_Profile-Image-490x490.png',
        social_ig: 'rabeaafro',
        social_facebook: null,
        social_soundcloud: null,
        social_youtube: null,
        social_linkedin: 'linkedin.com/in/rabea-massaad-475b1524',
        portfolioLink1: 'https://www.rabeamassaad.com/',
        portfolioLink2: 'https://Instagram.com/rabeaafro',
        portfolioLink3: 'https://www.YouTube.com/rabeaafro',
        bio: "Hey there! I'm Rabea Massaad, a guitarist hailing from Brighton, England. You may know me from my YouTube channel 'rabeaafro,' where I share my love for music and guitar. As a mentor on MentorMe, I'm here to guide you through the intricacies of guitar playing, offering insights from my real-world experience. Let's explore the fretboard, discover new techniques, and unleash the power of music together. Join me on this exciting journey at MentorMe!",
    },
    {
        id: 5,
        first_name: 'Paul',
        last_name: 'Davids',
        password: bcrypt.hashSync('password123', 10),
        alias: 'PaulDavids',
        street: '123 Guitar Street',
        city: 'Rotterdam',
        state: 'South Holland',
        zip: '1234 AB',
        country: 'Netherlands',
        lat: 51.9225,
        long: 4.47917,
        email: 'paul.davids@example.com',
        phone: '555-555-5555',
        can_text: false,
        pic: 'https://maybach-guitars.de/wp-content/uploads/2022/06/Paul-Davids-with-Salmon.jpg',
        social_ig: 'pauldavidsguitar',
        social_facebook: 'https://www.facebook.com/pauldavids',
        social_soundcloud: null,
        social_youtube: 'https://www.youtube.com/@PaulDavids',
        social_linkedin: null,
        portfolioLink1: 'https://www.pauldavids.com/',
        portfolioLink2: null,
        portfolioLink3: null,
        bio: `Hey there, I'm Paul Davids - a passionate guitarist, music educator, and content creator. I've been sharing my love for the guitar on my YouTube channel, where I provide tutorials, gear reviews, and insights into the world of music.
        As a guitarist, I believe in the power of music to inspire and connect people. Join me on a musical journey where we explore techniques, theory, and the joy of playing the guitar. I'm excited to be a mentor on MentorMe, where I can share my knowledge and help fellow guitar enthusiasts reach their musical goals.
        See you in the world of strings and frets! 🎸`,
    },
    {
        id: 6,
        first_name: 'Paul',
        last_name: 'Nieto',
        password: bcrypt.hashSync('password123', 10),
        alias: 'PNieto',
        street: '207 W 14th St',
        city: 'New York City',
        state: 'NY',
        zip: '10011',
        country: 'United States of America',
        lat: 40.7387,
        long: -74.0001,
        email: 'Pnieto10@gmail.com',
        phone: '212-675-3260',
        can_text: false,
        pic: 'https://i.ytimg.com/vi/U58WL9Iu3Oc/hqdefault.jpg',
        social_ig: 'https://instagram.com/guitartech.nyc',
        social_facebook: 'https://www.facebook.com/theRumberos',
        social_soundcloud: null,
        social_youtube: 'https://www.youtube.com/user/LaMarotte2',
        social_linkedin: null,
        portfolioLink1: "https://www.guitartechny.com/Home.html",
        portfolioLink2: null,
        portfolioLink3: null,
        bio: `Hey there, I'm Paul. I'm the owner and master luthier of Guitar Tech NYC. I'm on here to train and connect with some of the best and brightest who want to learn to become master luthiers.`,
    },
    {
        id: 7,
        first_name: 'Rick',
        last_name: 'Beato',
        password: bcrypt.hashSync('password123', 10),
        alias: 'rickbeato',
        street: '123 Music Street',
        city: 'Atlanta',
        state: 'Georgia',
        zip: '30301',
        country: 'United States of America',
        lat: 33.7490,
        long: -84.3880,
        email: 'rick@example.com',
        phone: '555-555-1234',
        can_text: false,
        pic: 'https://cdn.mos.cms.futurecdn.net/XhxC5f5gUgEjcVBt3P3qsi.jpg',
        social_ig: 'https://instagram.com/rickbeato1',
        social_facebook: 'https://facebook.com/rick.beato',
        social_soundcloud: null,
        social_youtube: 'https://www.youtube.com/c/RickBeato',
        social_linkedin: null,
        portfolioLink1: 'https://www.youtube.com/@rickbeato240',
        portfolioLink2: null,
        portfolioLink3: null,
        bio: 'Music producer, educator, and YouTuber known for his insightful breakdowns of songs, music theory lessons, and music production tips. With a wealth of experience in the music industry, Rick Beato shares his knowledge to help musicians and music enthusiasts deepen their understanding of music.',
    },
    {
        id: 8,
        first_name: 'Jonathan',
        last_name: 'Silva',
        password: bcrypt.hashSync('password123', 10),
        alias: 'johnny5ive167',
        street: '123 Bunker Street',
        city: 'Middle Island',
        state: 'New York',
        zip: '11953',
        country: 'United States of America',
        lat: 40.8833,
        long: -72.9450,
        email: 'jonathan.silva167@gmail.com',
        phone: '555-555-1234',
        can_text: false,
        pic: 'https://media.licdn.com/dms/image/C5103AQHC-EnKQk3hbQ/profile-displayphoto-shrink_800_800/0/1517364614311?e=2147483647&v=beta&t=aDsR-1DgZviO019cpRFtY76G4efGIw_DvemvmgFzTpw',
        social_ig: 'https://instagram.com/artbyjs',
        social_facebook: null,
        social_soundcloud: null,
        social_youtube: null,
        social_linkedin: 'https://www.linkedin.com/in/jonathansilva761/',
        portfolioLink1: 'https://intenebrisbyjs.com',
        portfolioLink2: "https://github.com/jon-slva",
        portfolioLink3: "https://jewelrybyjs.com",
        bio: 'Just a guy who does a lot of things and is passinonate about learning.',
    },
    {
        id: 9,
        first_name: 'Elena',
        last_name: 'Ivanova',
        password: bcrypt.hashSync('password123', 10),
        alias: 'elena_ivanova',
        street: '456 Melody Lane',
        city: 'Moscow',
        state: null,
        zip: '101000',
        country: 'Russia',
        lat: 55.7558,
        long: 37.6176,
        email: 'elena@example.com',
        phone: '555-555-5678',
        can_text: true,
        pic: 'public\images\default-profile-img.jpeg',
        social_ig: 'https://instagram.com/elena_ivanova',
        social_facebook: 'https://facebook.com/elena.ivanova',
        social_soundcloud: null,
        social_youtube: 'https://www.youtube.com/c/ElenaIvanovaMusic',
        social_linkedin: null,
        portfolioLink1: 'https://soundcloud.com/elena_ivanova',
        portfolioLink2: 'https://www.behance.net/elena_ivanova',
        portfolioLink3: null,
        bio: 'Classically trained pianist and composer based in Moscow. Elena Ivanova creates emotive and cinematic music, blending classical and modern influences.',
    },
    {
        id: 10,
        first_name: 'Satoshi',
        last_name: 'Yamamoto',
        password: bcrypt.hashSync('password123', 10),
        alias: 'satoshi_yama',
        street: '789 Harmony Street',
        city: 'Tokyo',
        state: null,
        zip: '100-0001',
        country: 'Japan',
        lat: 35.6895,
        long: 139.6917,
        email: 'satoshi@example.com',
        phone: '555-555-9012',
        can_text: true,
        pic: 'public\images\default-profile-img.jpeg',
        social_ig: 'https://instagram.com/satoshi_yama',
        social_facebook: 'https://facebook.com/satoshi.yamamoto',
        social_soundcloud: 'https://soundcloud.com/satoshi_yama',
        social_youtube: 'https://www.youtube.com/c/SatoshiYamamoto',
        social_linkedin: 'https://linkedin.com/in/satoshi-yamamoto',
        portfolioLink1: 'https://satoshiyamamoto.com/portfolio',
        portfolioLink2: 'https://www.behance.net/satoshi_yama',
        portfolioLink3: null,
        bio: 'Electronic music producer and visual artist from Tokyo. Satoshi Yamamoto explores the intersection of sound and visual arts to create immersive experiences.',
    },
    {
        id: 11,
        first_name: 'Isabella',
        last_name: 'Moreno',
        password: bcrypt.hashSync('password123', 10),
        alias: 'isabella_moreno',
        street: '234 Serenade Street',
        city: 'Barcelona',
        state: null,
        zip: '08002',
        country: 'Spain',
        lat: 41.3833,
        long: 2.1834,
        email: 'isabella@example.com',
        phone: '555-555-3456',
        can_text: true,
        pic: 'public\images\default-profile-img.jpeg',
        social_ig: 'https://instagram.com/isabella_moreno',
        social_facebook: 'https://facebook.com/isabella.moreno',
        social_soundcloud: 'https://soundcloud.com/isabella_moreno',
        social_youtube: 'https://www.youtube.com/c/IsabellaMorenoMusic',
        social_linkedin: 'https://linkedin.com/in/isabella-moreno',
        portfolioLink1: 'https://isabellamoreno.com/portfolio',
        portfolioLink2: 'https://www.behance.net/isabella_moreno',
        portfolioLink3: null,
        bio: 'Multidisciplinary artist based in Barcelona, Isabella Moreno expresses her creativity through painting, music, and digital art.',
    },
    {
        id: 12,
        first_name: 'Hiroshi',
        last_name: 'Nakamura',
        password: bcrypt.hashSync('password123', 10),
        alias: 'hiroshi_naka',
        street: '567 Harmony Avenue',
        city: 'Tokyo',
        state: null,
        zip: '105-0011',
        country: 'Japan',
        lat: 35.6544,
        long: 139.7441,
        email: 'hiroshi@example.com',
        phone: '555-555-6789',
        can_text: true,
        pic: 'public\images\default-profile-img.jpeg',
        social_ig: 'https://instagram.com/hiroshi_naka',
        social_facebook: 'https://facebook.com/hiroshi.nakamura',
        social_soundcloud: 'https://soundcloud.com/hiroshi_naka',
        social_youtube: 'https://www.youtube.com/c/HiroshiNakamura',
        social_linkedin: 'https://linkedin.com/in/hiroshi-nakamura',
        portfolioLink1: 'https://hiroshinakamura.com/portfolio',
        portfolioLink2: 'https://www.behance.net/hiroshi_naka',
        portfolioLink3: null,
        bio: 'Architect and visual artist based in Tokyo, Hiroshi Nakamura merges traditional Japanese aesthetics with contemporary design in his architectural and artistic creations.',
    },
    {
        id: 13,
        first_name: 'Lena',
        last_name: 'Kowalski',
        password: bcrypt.hashSync('password123', 10),
        alias: 'lena_kowalski',
        street: '789 Melody Street',
        city: 'Warsaw',
        state: null,
        zip: '00-001',
        country: 'Poland',
        lat: 52.2298,
        long: 21.0118,
        email: 'lena@example.com',
        phone: '555-555-7890',
        can_text: true,
        pic: 'public\images\default-profile-img.jpeg',
        social_ig: 'https://instagram.com/lena_kowalski',
        social_facebook: 'https://facebook.com/lena.kowalski',
        social_soundcloud: 'https://soundcloud.com/lena_kowalski',
        social_youtube: 'https://www.youtube.com/c/LenaKowalskiMusic',
        social_linkedin: 'https://linkedin.com/in/lena-kowalski',
        portfolioLink1: 'https://lenakowalski.com/portfolio',
        portfolioLink2: 'https://www.behance.net/lena_kowalski',
        portfolioLink3: null,
        bio: 'Graphic designer and musician from Warsaw, Lena Kowalski combines her passion for visual arts and music to create captivating and immersive experiences.',
    },
    {
        id: 14,
        first_name: 'Matteo',
        last_name: 'Rossi',
        password: bcrypt.hashSync('password123', 10),
        alias: 'matteo_rossi',
        street: '123 Sonata Lane',
        city: 'Rome',
        state: null,
        zip: '00100',
        country: 'Italy',
        lat: 41.9028,
        long: 12.4964,
        email: 'matteo@example.com',
        phone: '555-555-8901',
        can_text: true,
        pic: 'public\images\default-profile-img.jpeg',
        social_ig: 'https://instagram.com/matteo_rossi',
        social_facebook: 'https://facebook.com/matteo.rossi',
        social_soundcloud: 'https://soundcloud.com/matteo_rossi',
        social_youtube: 'https://www.youtube.com/c/MatteoRossiMusic',
        social_linkedin: 'https://linkedin.com/in/matteo-rossi',
        portfolioLink1: 'https://matteorossi.com/portfolio',
        portfolioLink2: 'https://www.behance.net/matteo_rossi',
        portfolioLink3: null,
        bio: 'Photographer and musician based in Rome, Matteo Rossi captures the essence of moments through his lens and creates emotive music that complements his visual storytelling.',
    },
];