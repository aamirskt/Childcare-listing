import axiosServices from '@/utils/axios';

// const BASE_URL = 'https://devian.amwaus.com'; // fallback for dev
export const libraries: ("places")[] = ['places'];
export const fetchCityGroup = async () => {
  try {
    const response = await axiosServices.get(`api/search/get_city_group`);
    const data = response.data?.data || {};

    return {
      cityGroup: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      cityGroup: []
    };
  }
};
export const getCenterDetail = async (id: any) => {
  try {
    const response = await axiosServices.get('api/search/get_center_detail/' + id);
    const data = response.data?.data || {};
console.log('Center Detail Data:', data); // Debugging line to check the fetched center data
    return {
      data: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      data: []
    };
  }
};

export const fetchPopularKey = async (_state: any) => {
  try {
    const response = await axiosServices.get(`api/search/popular_key/${_state}`);
    const data = response.data?.data || {};

    return {
      popularData: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      popularData: []
    };
  }
};

export const fetchDaycaresByCity = async (_state: any, _cityName: any) => {
  // console.log('fetchDaycaresByCity called with:', _state, _cityName);
  try {
    const response = await axiosServices.get(`api/search/get_content?city_name=${_state + ', ' + _cityName}`);
    const data = response.data?.data || {};

    return {
      daycaresData: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      daycaresData: []
    };
  }
};

export const fetchAIDataByCategory = async (_cityName: any, _state: any,  _category: any) => {
  // console.log('fetchAIDataByCategory called with:', _cityName, _state, _category);
  try {
    const response = await axiosServices.get(`api/city/get-content/${_category}?state=${_state}&city=${_cityName}`);
    const data = response.data?.data || {};

    return {
      aiData: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      aiData: []
    };
  }
};

export const fetchAIData = async (_state: any, _cityName: any) => {
  try {
    const response = await axiosServices.get(`api/city/get-content/city?state=${_state}&city=${_cityName}`);
    const data = response.data?.data || {};

    return {
      aiData: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      aiData: []
    };
  }
};

export const fetchAllCitiesByState = async (state: any) => {
  try {
    const response = await axiosServices.get(`api/search/get_cities/${state}`);
    const data = response.data?.data || {};

    return {
      allCities: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      allCities: []
    };
  }
};

export const fetchBlogs = async () => {
  try {
    const response = await axiosServices.get(`api/blog/get_blogs`);
    const data = response.data?.data || {};

    return {
      allblogs: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      allblogs: []
    };
  }
};

export const fetchblogById = async (id: any) => {
  try {
    const response = await axiosServices.get(`api/blog/get_blog_content/${id}`);
    const data = response.data?.data || {};

    return {
      blog: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      blog: []
    };
  }
};

export const fetchTopSearches = async () => {
  try {
    const response = await axiosServices.get(`/api/search/top_searches`);
    const data = response.data?.data || {};

    return {
      topCities: data.topCities || [],
      topStates: data.topStates || [],
      topSearches: data.popularSearches || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      topCities: [],
      topStates: [],
      topSearches: [],
    };
  }
};
export const fetchAllStates= async () => {
  try {
    const response = await axiosServices.get(`api/search/all_states`);
    const data = response.data?.data || {};

    return {
      allStates: data || [],
    };
  } catch (error: any) {
    console.error('API Fetch Error:', error?.response?.data || error.message);
    return {
      allStates: []
    };
  }
};
export const fetchBlogById = async (id: any) => {       
 try {
    const response = await axiosServices.get(`/api/blog/get_blog_content/${id}`);
    const blog = response.data.data || null;
  return {
        blog
    };
  } catch (error) {
    console.error('Blog fetch failed:', error);
    return {
        blog: null
    };
  }
};
 
export const fetchCitiesByState = async (state: any) => {       
 try {
    const response = await axiosServices.get(`api/search/get_cities/${state}`);
    const data = response.data.data || null;
  return {
        data
    };
  } catch (error) {
    console.error('Blog fetch failed:', error);
    return {
        blog: null
    };
  }
};

export const getAIData = async (_cityName: any, _state: any, _category?: any) => {       
 try {
    const response = await axiosServices.get(`api/city/get-content/${_category ? _category : 'city'}?state=${_state}&city=${_cityName}`);
    const data = response?.data?.data || null;
  return {
        data
    };
  } catch (error) {
    console.error('Blog fetch failed:', error);
    return {
        blog: null
    };
  }
};
 