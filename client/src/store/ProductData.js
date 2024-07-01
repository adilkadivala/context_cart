import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

// Making context
export const ItemData = createContext();

// Setting context in a function
export const useItemData = () => useContext(ItemData);

export const ItemStorage = ({ children }) => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // Getting item
  const getItem = async () => {
    try {
      const response = await axios.get("http://localhost:5225/getproduct");
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching item list:", error);
    }
  };

  // auth data for login
  const login = async (email, password) => {
    try {
      const result = await axios.get("http://localhost:5225/getauth");
      const aboutUser = result.data;

      const user = aboutUser.find((u) => {
        return u.email === email.trim() && u.password === password.trim();
      });

      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  // logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // add to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    getItem();

    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <ItemData.Provider
      value={{
        item,
        setItem,
        cart,
        user,
        login,
        logout,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ItemData.Provider>
  );
};
