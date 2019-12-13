import { ADD_MOVIE, DELETE, STARFILTER, SEARCH, EDIT_MOVIE } from "../actions/actionstype";
import uuid from 'uuid'

let films = [
    {
        picture: "https://image.tmdb.org/t/p/w500/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
        title: "El Camino: A Breaking Bad Movie",
        date: "2019-10-11",
        rating: 2,
        id: uuid(),
        description: "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
        generes:"Crime",
        trailer:"https://www.youtube.com/embed/1JLUn2DFW4w",
        
    },
    {
        picture: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
        title: "John Wick: Chapter 3 - Parabellum",
        date: "2019-05-15",
        rating: 4,
        id: uuid(),
        description: "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
        generes:"Action",
        trailer:"https://www.youtube.com/embed/pU8-7BX9uxs",
    },
    {
        picture: "https://image.tmdb.org/t/p/w500/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        title: "It Chapter Two",
        date: "2019-09-04",
        rating: 5,
        id: uuid(),
        description: "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        generes:"Horror",
        trailer:"https://www.youtube.com/embed/xhJ5P7Up3jA",
    },
    {
        picture: "https://image.tmdb.org/t/p/w500/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
        title: "The Dark Knight",
        date: "2008-07-16",
        rating: 3,
        id: uuid(),
        description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        generes:"Drama",
        trailer:"https://www.youtube.com/embed/xGcfBRkJSWQ",
    },
    {
        picture: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        title: "The Lord of the Rings: The Return of the King",
        date: "2003-12-01",
        rating: 5,
        id: uuid(),
        description: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        generes:"Adventure",
        trailer:"https://www.youtube.com/embed/bt1joflBsBo",
    },
    {
        picture: "https://image.tmdb.org/t/p/w500/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg",
        title: "Frozen II",
        date: "2019-11-20",
        rating: 4,
        id: uuid(),
        description: "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
        generes:"Animation",
        trailer:"https://www.youtube.com/embed/gIOyB9ZXn8s",
    },
    {
        picture: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
        title: "The Irishman",
        date: "2019-11-01",
        rating: 4,
        id: uuid(),
        description: "Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.",
        generes:"History",
        trailer:"https://www.youtube.com/embed/WHXxVmeGQUc",
    },
    {
        picture: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        title: "Parasite", 
        date: "2019-05-03",
        rating: 4,
        id: uuid(),
        description: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        generes:"Drama",
        trailer:"https://www.youtube.com/embed/5xH0HfJHsaY",
    },
]

const Reducer = (state = films, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return [
                ...state,
                action.payload
            ]
        case DELETE:
            return (
                state.filter(el => el.id !== action.payload)
            )
        case SEARCH:
            return (
                films.filter(el => el.title.toUpperCase().includes(action.payload.name.toUpperCase().trim()) && el.rating >= action.payload.rating)
            )
        case EDIT_MOVIE:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        default:
            return state;
    }
};

export default Reducer;
