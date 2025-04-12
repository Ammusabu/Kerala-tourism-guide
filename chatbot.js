// Kerala tourism data with Wikipedia links
const keralaData = {
    "thiruvananthapuram": {
        name: "Thiruvananthapuram",
        description: "Kerala's capital with rich history, beaches, and the famous Padmanabhaswamy Temple.",
        highlights: [
            {name: "Kovalam Beach", wiki: "https://en.wikipedia.org/wiki/Kovalam",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/01KovalamBeach%26Kerala.jpg/462px-01KovalamBeach%26Kerala.jpg.jpg"},
            {name: "Padmanabhaswamy Temple", wiki: "https://en.wikipedia.org/wiki/Padmanabhaswamy_Temple",image: "images/padmanabha.jpg"},
            {name: "Napier Museum", wiki: "https://en.wikipedia.org/wiki/Napier_Museum",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Napier_Museum_TVM.jpg/500px-Napier_Museum_TVM.jpg"},
            {name: "Ponmudi Hills", wiki: "https://en.wikipedia.org/wiki/Ponmudi",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Morning_at_Ponmudi.jpg/500px-Morning_at_Ponmudi.jpg"}
        ],
        bestTime: "October to March",
        image: "images/thiruvan.jpg"
    },
    "kollam": {
        name: "Kollam",
        description: "Known as the 'Cashew Capital' with beautiful backwaters and beaches.",
        highlights: [
            {name: "Ashtamudi Lake", wiki: "https://en.wikipedia.org/wiki/Ashtamudi_Lake",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ashtamudi-lake.jpg/500px-Ashtamudi-lake.jpg"},
            {name: "Thenmala Eco-tourism", wiki: "https://en.wikipedia.org/wiki/Thenmala",image:"https://upload.wikimedia.org/wikipedia/commons/8/82/13_kannara_bridge_near_shencottah.jpeg"},
            {name: "Munroe Island", wiki: "https://en.wikipedia.org/wiki/Munroe_Island",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Beautiful_Munroe_Island_%2C_kollam_district_%2C_kerala.jpg/500px-Beautiful_Munroe_Island_%2C_kollam_district_%2C_kerala.jpg"},
            {name: "Jatayu Earth's Center", wiki: "https://en.wikipedia.org/wiki/Jatayu_Earth%27s_Center_Nature_Park",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jatayu_Earth_Centre.jpg/500px-Jatayu_Earth_Centre.jpg"},
        ],
        bestTime: "September to May",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jatayu_Earth_Centre.jpg/500px-Jatayu_Earth_Centre.jpg"
    },
    "pathanamthitta": {
        name: "Pathanamthitta",
        description: "Pilgrim center with the famous Sabarimala Temple and lush forests.",
        highlights: [
            {name: "Sabarimala Temple", wiki: "https://en.wikipedia.org/wiki/Sabarimala",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sabarimala_2.jpg/330px-Sabarimala_2.jpg"},
            {name: "Perunthenaruvi Waterfalls", wiki: "https://en.wikipedia.org/wiki/Perunthenaruvi_Falls",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Perunthenaruvi01.jpg/330px-Perunthenaruvi01.jpg"},
            {name: "Gavi Eco-tourism", wiki: "https://en.wikipedia.org/wiki/Gavi,_Kerala",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gavi%2C_Kerala.jpg/500px-Gavi%2C_Kerala.jpg"},
            {name: "Konni Elephant Training Center", wiki: "https://en.wikipedia.org/wiki/Konni,_Kerala",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Konni_Elephant_Training_Centre_Cage03.jpg/300px-Konni_Elephant_Training_Centre_Cage03.jpg"}
        ],
        bestTime: "November to February",
        image: "images/kollam.jpg"
    },
    "alappuzha": {
        name: "Alappuzha",
        description: "The 'Venice of the East' famous for its backwaters and houseboats.",
        highlights: [
            {name: "Alleppey Backwaters", wiki: "https://en.wikipedia.org/wiki/Alappuzha",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/500px-Alappuzha_Boat_Beauty_W.jpg"},
            {name: "Marari Beach", wiki: "https://en.wikipedia.org/wiki/Marari_Beach",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Marari_Beach_Sunset_01.JPG/500px-Marari_Beach_Sunset_01.JPG"},
            {name: "Krishnapuram Palace", wiki: "https://en.wikipedia.org/wiki/Krishnapuram_Palace",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Krishnapuram_Palace_in_2021.jpeg/500px-Krishnapuram_Palace_in_2021.jpeg"},
            {name: "Vembanad Lake", wiki: "https://en.wikipedia.org/wiki/Punnamada",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kumarkom.jpg/500px-Kumarkom.jpg"}
        ],
        bestTime: "August to March",
        image: "images/backwater1.png"
    },
    "kottayam": {
        name: "Kottayam",
        description: "Land of letters, lakes, and latex with beautiful churches and rubber plantations.",
        highlights: [
            {name: "Kumarakom Bird Sanctuary", wiki: "https://en.wikipedia.org/wiki/Kumarakom_Bird_Sanctuary",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Keralaboats.jpg/330px-Keralaboats.jpg"},
            {name: "Vagamon Hills", wiki: "https://en.wikipedia.org/wiki/Vagamon",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Vagamon_meadows.JPG/432px-Vagamon_meadows.JPG"},
            {name: "Ilaveezhapoonchira", wiki: "https://en.wikipedia.org/wiki/Ilaveezha_Poonchira",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ilaveezhapoonchira.jpg/330px-Ilaveezhapoonchira.jpg"},
            {name: "Thirunakkara Temple", wiki: "https://en.wikipedia.org/wiki/Thirunakkara_Mahadeva_Temple",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thirunakkara_Mahadeva_temple.jpg/330px-Thirunakkara_Mahadeva_temple.jpg"}
        ],
        bestTime: "September to March",
        image: "images/kollam.jpg"
    },
    "idukki": {
        name: "Idukki",
        description: "Mountainous terrain with wildlife sanctuaries and spice plantations.",
        highlights: [
            {name: "Munnar Tea Gardens", wiki: "https://en.wikipedia.org/wiki/Munnar",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Munnar_hill_station_.JPG/500px-Munnar_hill_station_.JPG"},
            {name: "Eravikulam National Park", wiki: "https://en.wikipedia.org/wiki/Eravikulam_National_Park",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Kurunji._..jpg/426px-Kurunji._..jpg"},
            {name: "Idukki Arch Dam", wiki: "https://en.wikipedia.org/wiki/Idukki_Dam",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Idukki013.jpg/330px-Idukki013.jpg"},
            {name: "Thekkady Wildlife Sanctuary", wiki: "https://en.wikipedia.org/wiki/Periyar_National_Park",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/LAKE_AT_PERIYAR_NATIONAL_PARK_AND_WILDLIFE_SANCTUARY.jpg/330px-LAKE_AT_PERIYAR_NATIONAL_PARK_AND_WILDLIFE_SANCTUARY.jpg"}
        ],
        bestTime: "September to May",
        image: "images/idukki.jpg"
    },
    "ernakulam": {
        name: "Ernakulam",
        description: "Commercial capital with a mix of modern and traditional Kerala culture.",
        highlights: [
            {name: "Fort Kochi", wiki: "https://en.wikipedia.org/wiki/Fort_Kochi",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg/1920px-Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg"},
            {name: "Marine Drive", wiki: "https://en.wikipedia.org/wiki/Marine_Drive,_Kochi",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Musical-walkway.jpg/390px-Musical-walkway.jpg"},
            {name: "Hill Palace Museum", wiki: "https://en.wikipedia.org/wiki/Hill_Palace,_Tripunithura",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hill_Palace_Cochin_%2824176740822%29.jpg/500px-Hill_Palace_Cochin_%2824176740822%29.jpg"},
            {name: "Cherai Beach", wiki: "https://en.wikipedia.org/wiki/Cherai_Beach",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sunrise_at_Cherai_Beach.jpg/375px-Sunrise_at_Cherai_Beach.jpg"}
        ],
        bestTime: "August to March",
        image: "images/ernakulam.jpg"
    },
    "thrissur": {
        name: "Thrissur",
        description: "Cultural capital known for Thrissur Pooram festival and ancient temples.",
        highlights: [
            {name: "Vadakkumnathan Temple", wiki: "https://en.wikipedia.org/wiki/Vadakkunnathan_Temple",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/%E0%B4%B5%E0%B4%9F%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%82%E0%B4%A8%E0%B4%BE%E0%B4%A5%E0%B4%95%E0%B5%8D%E0%B4%B7%E0%B5%87%E0%B4%A4%E0%B5%8D%E0%B4%B0%E0%B4%82-%E0%B4%A4%E0%B5%86%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%87%E0%B4%97%E0%B5%8B%E0%B4%AA%E0%B5%81%E0%B4%B0%E0%B4%82.jpg/330px-%E0%B4%B5%E0%B4%9F%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%82%E0%B4%A8%E0%B4%BE%E0%B4%A5%E0%B4%95%E0%B5%8D%E0%B4%B7%E0%B5%87%E0%B4%A4%E0%B5%8D%E0%B4%B0%E0%B4%82-%E0%B4%A4%E0%B5%86%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%87%E0%B4%97%E0%B5%8B%E0%B4%AA%E0%B5%81%E0%B4%B0%E0%B4%82.jpg"},
            {name: "Athirappilly Waterfalls", wiki: "https://en.wikipedia.org/wiki/Athirappilly_Falls",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Athirapally_Waterfalls_after_the_Monsoons.jpg/330px-Athirapally_Waterfalls_after_the_Monsoons.jpg"},
            {name: "Guruvayur Temple", wiki: "https://en.wikipedia.org/wiki/Guruvayur_Temple",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/330px-Guruvayoor_Temple_1.jpg"},
            {name: "Kerala Kalamandalam", wiki: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Koothambalam_at_Kerala_Kalamandalam.jpg/330px-Koothambalam_at_Kerala_Kalamandalam.jpg"}
        ],
        bestTime: "October to March",
        image: "images/thrissur.jpg"
    },
    "palakkad": {
        name: "Palakkad",
        description: "Gateway to Kerala with forts, dams, and lush paddy fields.",
        highlights: [
            {name: "Palakkad Fort", wiki: "https://en.wikipedia.org/wiki/Palakkad_Fort",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Palakkad_Tipu_Fort.jpg/375px-Palakkad_Tipu_Fort.jpg"},
            {name: "Malampuzha Dam", wiki: "https://en.wikipedia.org/wiki/Malampuzha_Dam",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/MALAMPUZHA_DAM_OUTLET_WATER_CANAL.jpg/330px-MALAMPUZHA_DAM_OUTLET_WATER_CANAL.jpg"},
            {name: "Silent Valley National Park", wiki: "https://en.wikipedia.org/wiki/Silent_Valley_National_Park",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/SAN_BIRDS_48.jpg/500px-SAN_BIRDS_48.jpg"},
            {name: "Nelliyampathy Hills", wiki: "https://en.wikipedia.org/wiki/Nelliyampathy",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Western_Ghats003.jpg/500px-The_Western_Ghats003.jpg"}
        ],
        bestTime: "July to March",
        image: "images/pala.jpg"
    },
    "malappuram": {
        name: "Malappuram",
        description: "Land of hills, rivers, and Islamic culture with historic significance.",
        highlights: [
            {name: "Kadalundi Bird Sanctuary", wiki: "https://en.wikipedia.org/wiki/Kadalundi_Bird_Sanctuary",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Ichthyaetus_ichthyaetus_Kadalundi.jpg/330px-Ichthyaetus_ichthyaetus_Kadalundi.jpg"},
            {name: "Nilambur Teak Museum", wiki: "https://en.wikipedia.org/wiki/Nilambur",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Great_Horn_Bill_1.jpg/500px-Great_Horn_Bill_1.jpg"},
            {name: "Adyanpara Waterfalls", wiki: "https://en.wikipedia.org/wiki/Adyanpara_Falls",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Adyanpara_126.JPG/180px-Adyanpara_126.JPG"},
            {name: "Kottakkunnu Park", wiki: "https://en.wikipedia.org/wiki/Kottakkunnu",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kottakunnu_Hill%2C_Malapuram_-_panoramio_%281%29.jpg/282px-Kottakunnu_Hill%2C_Malapuram_-_panoramio_%281%29.jpg"}
        ],
        bestTime: "August to February",
        image: "images/malappu.jpg"
    },
    "kozhikode": {
        name: "Kozhikode",
        description: "Historic port city famous for its beaches and culinary tradition.",
        highlights: [
            {name: "Kappad Beach", wiki: "https://en.wikipedia.org/wiki/Kappad",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kappad_Beach.jpg/375px-Kappad_Beach.jpg"},
            {name: "Mananchira Square", wiki: "https://en.wikipedia.org/wiki/Mananchira",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Mananachira_Pond_Gardens%2C_Kozhikode2.jpg/396px-Mananachira_Pond_Gardens%2C_Kozhikode2.jpg"},
            {name: "Beypore Port", wiki: "https://en.wikipedia.org/wiki/Beypore",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Uru.jpg/330px-Uru.jpg"},
            {name: "Thusharagiri Waterfalls", wiki: "https://en.wikipedia.org/wiki/Thusharagiri_Falls",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Thusharagiri_bridge_1.jpg/330px-Thusharagiri_bridge_1.jpg"}
        ],
        bestTime: "September to March",
        image: "images/kollam.jpg"
    },
    "wayanad": {
        name: "Wayanad",
        description: "Misty mountains, wildlife sanctuaries, and spice plantations.",
        highlights: [
            {name: "Banasura Sagar Dam", wiki: "https://en.wikipedia.org/wiki/Banasura_Sagar_Dam",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Banasurasagar_Main_Dam.jpg/330px-Banasurasagar_Main_Dam.jpg"},
            {name: "Edakkal Caves", wiki: "https://en.wikipedia.org/wiki/Edakkal_Caves",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Edakkal_Cave.jpg/330px-Edakkal_Cave.jpg"},
            {name: "Chembra Peak", wiki: "https://en.wikipedia.org/wiki/Chembra_Peak",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chembra_Peak.JPG/500px-Chembra_Peak.JPG"},
            {name: "Wayanad Wildlife Sanctuary", wiki: "https://en.wikipedia.org/wiki/Wayanad_Wildlife_Sanctuary",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Indian_Peacock_in_Tholpetty_Wildlife_Sanctuary_02.JPG/330px-Indian_Peacock_in_Tholpetty_Wildlife_Sanctuary_02.JPG"}],
        bestTime: "October to May",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chembra_Peak.JPG/500px-Chembra_Peak.JPG"
    },
    "kannur": {
        name: "Kannur",
        description: "Land of looms and lore with beautiful beaches and folk arts.",
        highlights: [
            {name: "Payyambalam Beach", wiki: "https://en.wikipedia.org/wiki/Payyambalam_Beach",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Payyambalam.JPG/330px-Payyambalam.JPG"},
            {name: "St. Angelo Fort", wiki: "https://en.wikipedia.org/wiki/St._Angelo_Fort",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kannurfort3.JPG/375px-Kannurfort3.JPG"},
            {name: "Muzhappilangad Drive-in Beach", wiki: "https://en.wikipedia.org/wiki/Muzhappilangad_Beach",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Muzhappilangad_Drive-in_Beach_2.jpg/500px-Muzhappilangad_Drive-in_Beach_2.jpg"},
            {name: "Theyyam Performances", wiki: "https://en.wikipedia.org/wiki/Theyyam",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kandanar_Kelan_Theyyam_kannur.jpg/960px-Kandanar_Kelan_Theyyam_kannur.jpg"}
        ],
        bestTime: "August to March",
        image: "images/kannur.jpg"
    },
    "kasaragod": {
        name: "Kasaragod",
        description: "Northernmost district with forts, beaches, and unique culture.",
        highlights: [
            {name: "Bekal Fort", wiki: "https://en.wikipedia.org/wiki/Bekal_Fort",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bakel_Fort_Beach_Kasaragod7.jpg/375px-Bakel_Fort_Beach_Kasaragod7.jpg"},
            {name: "Ananthapura Lake Temple", wiki: "https://en.wikipedia.org/wiki/Ananthapura_Lake_Temple",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Anantapura_Lake_Temple.jpg/330px-Anantapura_Lake_Temple.jpg"},
            {name: "Kavvayi Backwaters", wiki: "https://en.wikipedia.org/wiki/Kavvayi_Backwaters",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kavvayi.jpg/396px-Kavvayi.jpg"},
            {name: "Parappa Wildlife Sanctuary", wiki: "https://en.wikipedia.org/wiki/Parappa_Wildlife_Sanctuary",image:"https://media1.thrillophilia.com/filestore/k2ineyw3bbxxfut81o9qj61aqnzc_1552978939_parappa.png?w=753&h=450&dpr=2.0"}    
        ],  
        bestTime: "October to March",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kavvayi.jpg/396px-Kavvayi.jpg"
    }
};

// Load district tiles when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadDistrictTiles();
    setupChatbot();
    setupSearch();
});

// Function to load all district tiles with name and description inside the image
function loadDistrictTiles() {
    const container = document.getElementById('districts-container');
    container.innerHTML = ''; // Clear existing content
    
    for (const district in keralaData) {
        const data = keralaData[district];
        
        const districtCard = document.createElement('div');
        districtCard.className = 'district-card';
        districtCard.id = `district-${district}`;
        
        districtCard.innerHTML = `
            <div class="district-image-container">
            <img src="${data.image}" alt="${data.name}" class="district-main-image">
            <div class="district-overlay">
            <div class="district-text">
            <h3>${data.name}</h3>
            <p>${data.description}</p>
            </div>
            </div>
            </div>
            <div class="district-best-time">
            <p><strong>Best Time to Visit:</strong> ${data.bestTime}</p>
            </div>
            <div class="destinations-grid" id="${district}-destinations">
            <!-- Destinations will be added here -->
            </div>
        `;

        // Add hover effect to show "View" on destination tiles
        districtCard.addEventListener('mouseover', function() {
            const destinationTiles = districtCard.querySelectorAll('.destination-tile');
            destinationTiles.forEach(tile => {
            const viewText = tile.querySelector('.destination-content p');
            if (viewText) {
                viewText.style.display = 'block';
            }
            });
        });

        districtCard.addEventListener('mouseout', function() {
            const destinationTiles = districtCard.querySelectorAll('.destination-tile');
            destinationTiles.forEach(tile => {
            const viewText = tile.querySelector('.destination-content p');
            if (viewText) {
                viewText.style.display = 'none';
            }
            });
        });

        // Add click event listener to the district card
        districtCard.addEventListener('click', function() {
            const destinationsGrid = document.getElementById(`${district}-destinations`);
            if (destinationsGrid) {
            destinationsGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
        
        container.appendChild(districtCard);
        
        // Add destinations for this district
        const destinationsGrid = document.getElementById(`${district}-destinations`);
        data.highlights.forEach(destination => {
            const tile = document.createElement('a');
            tile.className = 'destination-tile';
            tile.href = destination.wiki;
            tile.target = '_blank';
            
            // Use destination-specific image if available, otherwise use district image
            const imgSrc = destination.image || data.image;
            
            tile.innerHTML = `
                <img src="${imgSrc}" alt="${destination.name}" class="destination-image">
                <div class="destination-content">
                    <h4>${destination.name}</h4>
                    <p>View</p>
                </div>
            `;
            destinationsGrid.appendChild(tile);
        });
    }
}

// Search functionality
function setupSearch() {
    document.getElementById('search-btn').addEventListener('click', performSearch);
    document.getElementById('destination-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    function performSearch() {
        const query = document.getElementById('destination-search').value.trim().toLowerCase();
        const resultsContainer = document.getElementById('search-results');
        const resultsGrid = document.getElementById('results-grid');
        
        resultsGrid.innerHTML = '';
        
        if (!query) {
            resultsContainer.style.display = 'none';
            resetDistrictHighlights();
            return;
        }
        
        let found = false;
        
        // First reset all districts
        resetDistrictHighlights();
        
        // Then search for matches
        for (const district in keralaData) {
            const data = keralaData[district];
            
            // Check district name
            if (district.includes(query) || data.name.toLowerCase().includes(query)) {
                found = true;
                createSearchResultTile(data);
                highlightDistrict(district);
                continue;
            }
            
            // Check individual destinations
            for (const destination of data.highlights) {
                if (destination.name.toLowerCase().includes(query)) {
                    found = true;
                    createSearchResultTile(data);
                    highlightDistrict(district);
                    break;
                }
            }
        }
        
        if (found) {
            resultsContainer.style.display = 'block';
            // Scroll to districts section
            document.querySelector('.destinations-section').scrollIntoView({ behavior: 'smooth' });
        } else {
            resultsGrid.innerHTML = '<p class="no-results">No destinations found. Try "Munnar", "Alleppey", or "Kochi"</p>';
            resultsContainer.style.display = 'block';
        }
    }
    
    function createSearchResultTile(data) {
        const resultsGrid = document.getElementById('results-grid');
        const tile = document.createElement('div');
        tile.className = 'destination-tile';
        tile.innerHTML = `
            <img src="${data.image}" alt="${data.name}" class="tile-image">
            <div class="tile-content">
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                <div class="tile-highlights">
                    ${data.highlights.slice(0, 2).map(d => d.name).join(', ')}...
                </div>
            </div>
        `;
        
        tile.addEventListener('click', function() {
            highlightDistrict(Object.keys(keralaData).find(key => keralaData[key].name === data.name));
            document.getElementById('search-results').style.display = 'none';
        });
        
        resultsGrid.appendChild(tile);
    }
    
    function highlightDistrict(districtId) {
        // Remove any existing highlights
        resetDistrictHighlights();
        
        // Highlight the matching district
        const districtElement = document.getElementById(`district-${districtId}`);
        if (districtElement) {
            districtElement.classList.add('district-highlight');
            
            // Scroll to the highlighted district
            districtElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    function resetDistrictHighlights() {
        document.querySelectorAll('.district-card').forEach(card => {
            card.classList.remove('district-highlight');
        });
    }
    
    // Close search results when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container') && !e.target.closest('.search-results')) {
            document.getElementById('search-results').style.display = 'none';
        }
    });
}

// Chatbot functionality
function setupChatbot() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeChatbot = document.querySelector('.close-chatbot');
    const chatMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    
    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
    });
    
    closeChatbot.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
    });
    
    // Chatbot functionality
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            processUserMessage(message);
        }
    }
    
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    function addBotMessage(text, isHTML = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot-message');
        
        if (isHTML) {
            messageDiv.innerHTML = text;
        } else {
            messageDiv.innerHTML = `<p>${text}</p>`;
        }
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    function processUserMessage(message) {
        const lowerMessage = message.toLowerCase();
        let found = false;
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot-message', 'typing');
        typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        chatMessages.appendChild(typingIndicator);
        scrollToBottom();
        
        setTimeout(() => {
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Check for greetings
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                addBotMessage("Hello! I can help you explore Kerala's beautiful destinations. Try asking about districts like Thiruvananthapuram, Alleppey, or Kottayam!");
                return;
            }if (lowerMessage.includes('Thank you') || lowerMessage.includes('thanks')|| lowerMessage.includes('thank you')) {
                addBotMessage("You're welcome! If you have more questions about Kerala, feel free to ask!");
                return;
            }
            
            // Check for known districts
            for (const district in keralaData) {
                if (lowerMessage.includes(district.toLowerCase())) {
                    const data = keralaData[district];
                    let response = `
                        <div class="district-response">
                            <h4>${data.name} District</h4>
                            <img src="${data.image}" alt="${data.name}" class="district-image">
                            <p>${data.description}</p>
                            <h5>Top Destinations:</h5>
                            <ul>
                                ${data.highlights.map(item => `<li><a href="${item.wiki}" target="_blank">${item.name}</a></li>`).join('')}
                            </ul>
                            <p><strong>Best Time to Visit:</strong> ${data.bestTime}</p>
                        </div>
                    `;
                    addBotMessage(response, true);
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                addBotMessage("I'm not sure about that. Ask me about districts like Thiruvananthapuram, Alleppey, or Kottayam, and I'll give you details about them!");
            }
        }, 1500);
    }
    
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Ensure chatbot container is hidden initially
document.querySelector('.chatbot-container').style.display = 'none';
