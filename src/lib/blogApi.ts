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
  
  if (imageUrl && !imageUrl.startsWith('http')) {
    imageUrl = `${IMAGE_BASE_URL}/${imageUrl}`;
  }

  if (imageUrl && imageUrl.includes('via.placeholder.com')) {
    imageUrl = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop';
  }

  return {
    ...post,
    image: imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    readTime: post.read_time || post.readTime || '5 min',
    date: post.publish_date ? new Date(post.publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'March 18, 2026',
    category: post.category?.name || post.category || 'Digital Marketing',
    author: post.author?.name || post.author || 'Nexcan Expert',
    is_featured: post.is_featured === 1 || post.is_featured === true || post.featured === true
  };
};

export const blogApi = {
  getAllBlogs: async (page: number = 1, limit: number = 20, categoryId?: string | number) => {
    try {
      let url = `/all-blogs?page=${page}&limit=${limit}`;
      if (categoryId && categoryId !== "All Posts") {
        url += `&category=${categoryId}`;
      }
      
      const response = await apiClient.get(url);
      const data = response.data.data || response.data;
      const posts = Array.isArray(data) ? data.map(normalizePost) : [];
      
      // API returns { success, count, data }
      // Calculate totalPages from count / limit
      const totalCount = response.data.count || response.data.total || 0;
      const totalPages = totalCount > 0 ? Math.ceil(totalCount / limit) : 1;
      
      return {
        posts,
        pagination: {
          totalPages,
          currentPage: page,
          total: totalCount
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
