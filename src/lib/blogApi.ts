import axios from 'axios';

const API_BASE_URL = 'https://phpstack-1490006-6224237.cloudwaysapps.com/api/front';
const API_KEY = 'apiKey_pleaseDontHackMe';
const IMAGE_BASE_URL = 'https://phpstack-1490006-6224237.cloudwaysapps.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
});

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  is_featured: boolean;
}

const normalizePost = (post: any): BlogPost => {
  let imageUrl = post.featured_image || post.image;
  
  // If it's a relative path starting with uploads/
  if (imageUrl && !imageUrl.startsWith('http')) {
    imageUrl = `${IMAGE_BASE_URL}/${imageUrl}`;
  }

  // Handle broken placeholder services
  if (imageUrl && imageUrl.includes('via.placeholder.com')) {
    imageUrl = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop';
  }

  return {
    ...post,
    image: imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', // fallback
    readTime: post.read_time || post.readTime || '5 min',
    date: post.publish_date ? new Date(post.publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'March 17, 2026',
    category: post.category?.name || post.category || 'Digital Marketing',
    author: post.author?.name || post.author || 'Nexcan Expert',
    is_featured: post.is_featured === 1 || post.is_featured === true || post.featured === true
  };
};

export const blogApi = {
  getAllBlogs: async (page: number = 1) => {
    try {
      const response = await apiClient.get(`/all-blogs?page=${page}`);
      const data = response.data.data || response.data;
      const posts = Array.isArray(data) ? data.map(normalizePost) : [];
      
      return {
        posts,
        pagination: {
          totalPages: response.data.totalPages || 1,
          currentPage: page,
          total: response.data.total || posts.length
        }
      };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  getCategoriesWithIds: async () => {
    try {
      const response = await apiClient.get('/categories/blog-ids');
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching categories with IDs:', error);
      throw error;
    }
  },

  getTrendingCategories: async () => {
    try {
      const response = await apiClient.get('/categories/trending');
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching trending categories:', error);
      throw error;
    }
  },

  getBlogById: async (id: string | number) => {
    try {
      const response = await apiClient.get(`/blogs/${id}`);
      const post = response.data.data || response.data;
      return post ? normalizePost(post) : null;
    } catch (error) {
      console.error(`Error fetching blog with id ${id}:`, error);
      throw error;
    }
  },
};
