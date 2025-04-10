
import React, { createContext, useContext, useState, useEffect } from "react";
import { Accessory } from "@/data/accessories";
import { toast } from "sonner";

interface CartItem extends Accessory {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Accessory) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load items from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("pawscare-cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);
  
  // Save items to localStorage when they change
  useEffect(() => {
    localStorage.setItem("pawscare-cart", JSON.stringify(items));
  }, [items]);
  
  const addToCart = (accessory: Accessory) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === accessory.id);
      
      if (existingItemIndex !== -1) {
        // Item already exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        toast.success(`${accessory.name} quantity increased!`);
        return updatedItems;
      } else {
        // Add new item
        toast.success(`${accessory.name} added to cart!`);
        return [...prevItems, { ...accessory, quantity: 1 }];
      }
    });
  };
  
  const removeFromCart = (itemId: number) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === itemId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} removed from cart`);
      }
      return prevItems.filter(item => item.id !== itemId);
    });
  };
  
  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );
  
  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
