import React, { Component } from 'react';

export default function SearchBar ({handleChange}) {
  return (
    <input 
      type='text'
      onChange={handleChange}
      className='search-bar'
      placeholder='Name, email, phone, etc...'
    />
  );
}