/**
 * 1Fi Marketplace API Service
 * Handles data fetching, filtering, sorting, and details retrieval with simulated network latency.
 */

import { PRODUCTS, CATEGORIES, TOP_BRANDS, NEARBY_STORES } from '../data/mockData.js';

const delay = (ms = 250) => new Promise(resolve => setTimeout(resolve, ms));

// Flag to simulate network failure if needed for testing
let shouldSimulateError = false;

export function setSimulateError(value) {
  shouldSimulateError = Boolean(value);
}

export async function getCategories() {
  await delay(80);
  return [...CATEGORIES];
}

export async function getTopBrands() {
  await delay(80);
  return [...TOP_BRANDS];
}

export async function getNearbyStores() {
  await delay(80);
  return [...NEARBY_STORES];
}

export async function getProducts({ category = 'all', search = '', sortBy = 'popular' } = {}) {
  await delay(250);

  if (shouldSimulateError) {
    throw new Error('Network error: Unable to connect to 1Fi Marketplace service.');
  }

  let list = PRODUCTS.filter(p => {
    if (category !== 'all' && p.category !== category) return false;
    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      const mTitle = p.title.toLowerCase().includes(q);
      const mBrand = p.brand.toLowerCase().includes(q);
      const mDesc = p.description.toLowerCase().includes(q);
      if (!mTitle && !mBrand && !mDesc) return false;
    }
    return true;
  });

  switch (sortBy) {
    case 'price-asc':
      list.sort((a, b) => a.basePrice - b.basePrice);
      break;
    case 'price-desc':
      list.sort((a, b) => b.basePrice - a.basePrice);
      break;
    case 'rating-desc':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'emi-asc':
      list.sort((a, b) => {
        const emiA = Math.ceil(a.basePrice / (a.tenurePlans[a.tenurePlans.length - 1] || 12));
        const emiB = Math.ceil(b.basePrice / (b.tenurePlans[b.tenurePlans.length - 1] || 12));
        return emiA - emiB;
      });
      break;
    case 'popular':
    default:
      list.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.rating - a.rating);
      break;
  }

  return list;
}

export async function getProductById(id) {
  await delay(120);
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) {
    throw new Error(`Product with ID "${id}" was not found.`);
  }
  return { ...prod };
}

export const marketplaceApi = {
  getCategories,
  getTopBrands,
  getNearbyStores,
  getProducts,
  getProductById,
  setSimulateError
};

export default marketplaceApi;
