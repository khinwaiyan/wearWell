// Clothing.js

import React from 'react';

// Dummy data for clothing items
const dummyClothingItems = [
    { id: 1, type: 'T-Shirt', color: 'Red' },
    { id: 2, type: 'Jeans', color: 'Blue' },
    { id: 3, type: 'Sweater', color: 'Green' },
    { id: 4, type: 'Jacket', color: 'Black' },
    { id: 5, type: 'Shorts', color: 'White' },
    { id: 6, type: 'Skirt', color: 'Yellow' },
    { id: 7, type: 'Dress', color: 'Pink' },
    { id: 8, type: 'Blouse', color: 'Grey' },
    { id: 9, type: 'Cardigan', color: 'Purple' },
    { id: 10, type: 'Hoodie', color: 'Orange' },
    { id: 11, type: 'T-Shirt', color: 'Red' },
    { id: 12, type: 'Jeans', color: 'Blue' },
    { id: 13, type: 'Sweater', color: 'Green' },
    { id: 14, type: 'Jacket', color: 'Black' },
    { id: 15, type: 'Shorts', color: 'White' },
    { id: 16, type: 'Skirt', color: 'Yellow' },
    { id: 17, type: 'Dress', color: 'Pink' },
    { id: 18, type: 'Blouse', color: 'Grey' },
    { id: 19, type: 'Cardigan', color: 'Purple' },
    { id: 20, type: 'Hoodie', color: 'Orange' }
    
];

// Styles for the card component
const cardStyle = {
    background: 'pink', // Set the background to pink
    color: '#333', // Darker text color for better contrast
    border: 'none', // Remove the border for a cleaner look
    borderRadius: '10px', // Slightly increased border radius for a softer look
    padding: '20px',
    marginBottom: '20px',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // More pronounced shadow for depth
    transition: 'transform 0.3s ease-in-out', // Smooth transition for hover effect
  };

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const detailStyle = {
  fontSize: '16px',
  color: '#555',
};

// Card component to display individual clothing item
function ClothingItemCard({ type, color }) {
  return (
    <div style={cardStyle}>
      <div style={titleStyle}>Clothing Item</div>
      <div style={detailStyle}>Type: {type}</div>
      <div style={detailStyle}>Color: {color}</div>
    </div>
  );
}

// Component to display a list of clothing items
function Clothing() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {dummyClothingItems.map(item => (
        <ClothingItemCard key={item.id} type={item.type} color={item.color} />
      ))}
    </div>
  );
}

export default Clothing;
