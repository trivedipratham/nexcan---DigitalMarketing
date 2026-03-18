const axios = require('axios');

async function checkApi() {
  try {
    const response = await axios.get('https://phpstack-1490006-6224237.cloudwaysapps.com/api/front/all-blogs', {
      headers: {
        'x-api-key': 'apiKey_pleaseDontHackMe'
      }
    });
    const blogs = response.data.data || response.data;
    console.log('Total blogs:', blogs.length);
    if (blogs.length > 0) {
      console.log('First blog image field:', blogs[0].image);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkApi();
