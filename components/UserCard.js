import React, { Component } from 'react';

export default function UserCard({ user, deleteUser, updateUser }) {
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
        <span>
          <img
            onClick={deleteUser}
            className="user-card__delete__img"
            src={'https://cdn-icons-png.flaticon.com/512/3405/3405244.png'}
            id={user.username}
            alt={name}
          />
        </span>
        <span>
          <img
            onClick={updateUser}
            className="user-card__edit__img"
            src={'https://cdn-icons-png.flaticon.com/512/6065/6065488.png'}
            id={user.username}
            alt={name}
          />
        </span>
      </div>
    </div>
  );
}
