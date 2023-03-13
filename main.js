const mySuggestion = {
    greeting: ['Hello!', 'What\'s up?', 'Yo!', 'Good day.', 'Nice to see you!', 'Buenos Dias!' ],
    activity1: ['go for a bike ride through the city', 'go for a walk by the river', 'read a book in the library', 'play baseball at the park', 'do a puzzle at home', 'play video games with a friend'],
    activity2: ['get tacos for lunch', 'go for a drive in the country', 'go to happy hour with some friends', 'see a movie at the theater', 'take an art class', 'go thrift shopping', 'go to an art gallary'],

};

const getSuggestion = () => {
    return mySuggestion.greeting[Math.floor(Math.random() * 6)] + ' Today would be a great day to ' + mySuggestion.activity1[Math.floor(Math.random() * 6)] + ', or maybe ' + mySuggestion.activity2[Math.floor(Math.random() * 7)] + '.';
};

console.log(getSuggestion()); 