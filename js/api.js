async function getRandomCatAndFact() {
    try {
        
        const catResponse = await fetch('https://cataas.com/cat');
        const catUrl = catResponse.url;
        document.getElementById('cat-image').src = catUrl;

        
        const factResponse = await fetch('https://meowfacts.herokuapp.com/');
        const factData = await factResponse.json();
        const randomFact = factData.data[Math.floor(Math.random() * factData.data.length)];
        document.getElementById('cat-fact').textContent = randomFact;
    } catch (error) {
        console.error('Error fetching cat data:', error);
    }
}