// script.js

const places = [
    {
        name: "Toronto, Canada",
        description: "A diverse and cosmopolitan city, known for its iconic CN Tower.",
        image: "https://static2.tripoto.com/media/filter/tst/img/2192583/TripDocument/1652106806_toronto.png",
        category: "Country"
    },
    {
        name: "Kyoto, Japan",
        description: "Known for its classical Buddhist temples, as well as gardens, imperial palaces, and Shinto shrines.",
        image: "https://www.japanrailpassnow.com/wp-content/uploads/2017/08/Red-Tori-Gate-at-Fushimi-Inari-Shrine-in-Kyoto-Japan.jpg",
        category: "Country"
    },
    {
        name: "Maldives",
        description: "A tropical paradise with white sandy beaches, clear blue water, and beautiful coral reefs.",
        image: "https://cache.marriott.com/content/dam/marriott-renditions/MLEWH/mlewh-wow-oceanhaven-1800-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
        category: "Country"
    },
    {
        name: "Bondi Beach, Australia",
        description: "One of the most famous beaches in Australia, known for its golden sands and surfing waves.",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ4KoxAxsjI4D5GTjFeu5_eykTHOtUBzXztqXgNFzB-LwNclwVwx-vBDawuhpLQBYIsdBzOd2FUVzFoncEJ_vpKrGyCJfCbK-xFplUnoQ",
        category: "Beach"
    },
    {
        name: "Waikiki Beach, Hawaii",
        description: "A world-renowned beach located in Honolulu, known for its breathtaking views and vibrant culture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFp72WBbWm4VC-7bWkfz6KBDQ87LoA1DAlFQ&s",
        category: "Beach"
    },
{
        name: "Angkor Wat, Cambodia",
        description: "A stunning temple complex, and the largest religious monument in the world, known for its intricate carvings and rich history.",
        image: "https://cdn.britannica.com/35/171035-050-8423095A/Angkor-Wat-Siemreab-Cambodia.jpg",
        category: "Temple"
    },
    {
        name: "Wat Arun, Thailand",
        description: "Also known as the Temple of Dawn, this riverside temple is famous for its unique architectural design.",
        image: "https://www.agoda.com/wp-content/uploads/2024/03/Featured-image-Wat-Arun-Bangkok-Thailand.jpg",
        category: "Temple"
    },
];

function displayPlaces(filteredPlaces) {
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = ''; // Clear previous results

    filteredPlaces.forEach(place => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <div class="card-content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
            </div>
        `;

        recommendations.appendChild(card);
    });
}

// Add an event listener for real-time search filtering
document.getElementById('searchInput').addEventListener('input', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(query));
    displayPlaces(filteredPlaces);
});

// Display all places initially
displayPlaces(places);




