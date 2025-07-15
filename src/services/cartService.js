import axios from 'axios';

const API_BASE = 'https://crudcrud.com/api/e3889fd28ab34065b07113aedf1e800e';

export const addToCart = async (product, userEmail) => {
  try {
    const safeEmail = userEmail.replace(/[@.]/g, '');
    const endpoint = `${API_BASE}/cart${safeEmail}`;
    const response = await axios.post(endpoint, product);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const getCartItems = async (userEmail) => {
  try {
    const safeEmail = userEmail.replace(/[@.]/g, '');
    const endpoint = `${API_BASE}/cart${safeEmail}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return [];
  }
};
