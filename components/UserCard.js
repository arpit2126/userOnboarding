import React, { Component } from 'react';

export default function UserCard({ user }) {
  const name = Object.values(user.name).reduce((acc, curr) => acc + ' ' + curr);

  return (
    <div className="user-card">
      <div className="user-card__picture">
        <img
          className="user-card__picture__img"
          src={
            'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'
          }
          alt={name}
        />
      </div>
      <div className="user-card__info">
        <h2 className="user-card__info__name">{name}</h2>
        <span className="user-card__info__phone">{user.phone}</span>
        <span className="user-card__info__phone">{user.email}</span>
      </div>
    </div>
  );
}
