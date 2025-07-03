export async function fetchCityData(city) {
  // Simulating fake API call for city
  return [
    { Name: "Connaught Place", Population: "100K", FamousFor: "Shopping" },
    { Name: "Chandni Chowk", Population: "200K", FamousFor: "Street Food" },
    { Name: "Karol Bagh", Population: "150K", FamousFor: "Markets" },
    { Name: "Hauz Khas", Population: "80K", FamousFor: "Nightlife" },
    { Name: "Lajpat Nagar", Population: "120K", FamousFor: "Clothing Markets" },
    { Name: "Saket", Population: "90K", FamousFor: "Malls" },
    { Name: "Dwarka", Population: "300K", FamousFor: "Residential Area" },
    { Name: "Greater Kailash", Population: "70K", FamousFor: "High-end Living" },
  ];
}

export async function fetchCountryData(country) {
  // Simulating fake API call for country
  return [
    { State: "Delhi", Population: "20 Million", Capital: "Delhi" },
    { State: "Maharashtra", Population: "120 Million", Capital: "Mumbai" },
    { State: "Uttar Pradesh", Population: "230 Million", Capital: "Lucknow" },
    { State: "Karnataka", Population: "70 Million", Capital: "Bengaluru" },
    { State: "Gujarat", Population: "63 Million", Capital: "Gandhinagar" },
    { State: "Tamil Nadu", Population: "78 Million", Capital: "Chennai" },
    { State: "Punjab", Population: "30 Million", Capital: "Chandigarh" },
    { State: "Rajasthan", Population: "80 Million", Capital: "Jaipur" },
  ];
}
