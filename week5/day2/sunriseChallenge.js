const form=document.getElementById('sunriseForm')
const result=document.getElementById('results')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const lat1 = document.getElementById('lat1').value;
    const lng1 = document.getElementById('lng1').value;
    const lat2 = document.getElementById('lat2').value;
    const lng2 = document.getElementById('lng2').value;
    const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
    const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;
  
    try {
      const [res1, res2] = await Promise.all([
        fetch(url1).then(r => r.json()),
        fetch(url2).then(r => r.json())
      ]);
  
      const sunrise1 = new Date(res1.results.sunrise).toLocaleTimeString('en-US', { timeZone: 'UTC' });
      const sunrise2 = new Date(res2.results.sunrise).toLocaleTimeString('en-US', { timeZone: 'UTC' });
  
      results.innerHTML = `
        <p><strong>City 1 Sunrise:</strong> ${sunrise1} (UTC)</p>
        <p><strong>City 2 Sunrise:</strong> ${sunrise2} (UTC)</p>
      `;
    } catch (error) {
      console.error("Error fetching sunrise times:", error);
      results.innerHTML = `<p style="color: red;">Something went wrong. Please try again.</p>`;
    }
  });