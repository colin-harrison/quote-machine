const quotes = [
    {
        quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
        author: 'John Keats',
        color: 'olive',
    },
    {
        quote: 'If you cannot do great things, do small things in a great way.',
        author: 'Napoleon Hill',
        color: 'maroon',
    },
    {
        quote: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
        author: 'Marcus Aurelius',
        color: 'red',
    },
    {
        quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
        author: 'Thomas Edison',
        color: 'blue',
    },
    {
        quote: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
        author: 'Buddha',
        color: 'purple',
    }
];

function shuffle(arr) {
    let counter = arr.length;
    let temp;
    let index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

export default shuffle(quotes);