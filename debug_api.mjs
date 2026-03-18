import axios from 'axios';

async function checkApi() {
  try {
    const response = await axios.get('https://phpstack-1490006-6224237.cloudwaysapps.com/api/front/all-blogs', {
      headers: {
        'x-api-key': 'apiKey_pleaseDontHackMe'
      }
    });
    const blogs = response.data.data || response.data;
    if (blogs.length > 0) {
      console.log('Post keys:', Object.keys(blogs[0]));
      console.log('Content of featured_image:', blogs[0].featured_image);
      // Check if there's any other field that looks like a URL
      for (const [key, value] of Object.entries(blogs[0])) {
        if (typeof value === 'string' && (value.includes('http') || value.includes('uploads'))) {
          console.log(`${key}: ${value}`);
        }
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkApi();
