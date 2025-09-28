/*   STEP 1   */
export const leagueID = "1219816671624048640"; // your league ID
export const leagueName = "The Badger Bowl"; // your league name
export const dues = 20; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Badger Fantasy Association!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "manager_id" : "467473802377293824",
       "name": "Riley Powers",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/6cb03328ef3be222539031a57244ec1a.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1945, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "PG", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "484028099923537920",
       "name": "Sam Silv",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/0e294c12350baaca7b64b24595f55b44.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2126, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "PG", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "634559250462490624",
       "name": "Sam Silv",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/a2ead30f57599fb75b9c5b409a5b8480.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1613, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "C", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "manager_id" : "634559363893256192",
       "name": "Jarm",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/a2ead30f57599fb75b9c5b409a5b8480.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1511, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "C", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "634559707352240128",
       "name": "Small",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/6ac2b2b31821d9a2a8ee8e5766109d51.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1380, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "PF", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "634559778902835200",
       "name": "JFK",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/62d8b4172e7621efc5d49dd70791410f.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2455, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "C", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "634567757295345664",
       "name": "Teo",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/7be0e350c30dd9dbfd926ceaff06d088.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1957, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "SG", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "634817565398466560",
       "name": "Kybes",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/22d28bf8e52bd8aaec0050a08dd776c1.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2133, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "SG", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "858530547834679296",
       "name": "Will",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/b0d753cdf635cca7a1e9d0265e5737d5.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4760, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "SF", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "858938559627935744",
       "name": "Webb",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/b0d753cdf635cca7a1e9d0265e5737d5.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2713, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "SG", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "859152628993601536",
       "name": "Zamt",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/02cb4ce2df231debbe43fa811ca39cff.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1970, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "SG", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "859152628993601536",
       "name": "Sherm",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/95e2bed9e9df59eade66afbb5e530942.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1872, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "SG", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "manager_id" : "1131322207256494080",
       "name": "Pratt",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Haddonfield", // (optional)
       "bio": "King Shizz",
       "photo": "https://sleepercdn.com/uploads/83ec7bf0f4258ee3ef70e397ac82c263.jpg",  // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty ", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2577, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "C", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
