/**
 * 1Fi App Context & Global State Manager
 * Clean, focused state management for the 1Fi Marketplace flow.
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getProducts, getCategories, getTopBrands, getNearbyStores } from '../services/marketplaceApi.js';
import { CATEGORIES } from '../data/mockData.js';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Navigation State
  const [activeTab, setActiveTab] = useState('marketplace');
  const [bottomNav, setBottomNav] = useState('shop');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Data & Lifecycle States
  const [products, setProducts] = useState([]);
  const [topBrands, setTopBrands] = useState([]);
  const [nearbyStores, setNearbyStores] = useState([]);
  const [categories, setCategories] = useState(CATEGORIES);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal & Selection State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTenure, setSelectedTenure] = useState(12);

  // Confirmation Flow State
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 2500) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  // Fetch Products Handler
  const fetchProductsList = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const list = await getProducts({ category, search: searchQuery, sortBy });
      setProducts(list);
    } catch (err) {
      setError(err.message || 'Unable to load products. Please try again.');
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, [category, searchQuery, sortBy]);

  // Load initial static datasets
  useEffect(() => {
    async function loadMeta() {
      try {
        const [cats, brands, stores] = await Promise.all([
          getCategories(),
          getTopBrands(),
          getNearbyStores()
        ]);
        setCategories(cats);
        setTopBrands(brands);
        setNearbyStores(stores);
      } catch {
        // Fallback to local default data
      }
    }
    loadMeta();
  }, []);

  // Reactive product fetching on filter/search change
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);

  // Reset variant/color/tenure when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      setSelectedVariant(selectedProduct.variants?.[0] || null);
      setSelectedColor(selectedProduct.colors?.[0] || null);
      setSelectedTenure(selectedProduct.tenurePlans?.includes(12) ? 12 : selectedProduct.tenurePlans?.[0] || 6);
    }
  }, [selectedProduct]);

  // Confirm EMI Order Action
  const confirmEmiOrder = (orderData) => {
    setConfirmedOrder(orderData);
    setIsConfirmationOpen(true);
    addToast(`${orderData.emiPlan.tenureMonths}-Month EMI selected for ${orderData.product.title}`, 'success');
  };

  const value = {
    activeTab, setActiveTab,
    bottomNav, setBottomNav,
    searchQuery, setSearchQuery,
    category, setCategory,
    sortBy, setSortBy,
    products, topBrands, nearbyStores, categories,
    isLoading, error,
    refetchProducts: fetchProductsList,
    selectedProduct, setSelectedProduct,
    selectedVariant, setSelectedVariant,
    selectedColor, setSelectedColor,
    selectedTenure, setSelectedTenure,
    isConfirmationOpen, setIsConfirmationOpen,
    confirmedOrder, setConfirmedOrder,
    confirmEmiOrder,
    toasts, addToast
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
