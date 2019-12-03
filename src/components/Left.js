import React from 'react';
import Card from './Card';

export default function Left() {
  return (
    <div className="left">
      <h1>Popular this month</h1>
      <div className="left-section">
        {[
          {
            title: 'Basecamp Personal',
            subtitle: 'Manage all your small projects for free',
            comments: 126,
            tag: 'Android',
            icon: 'basecamp.jpeg',
            likes: '2525'
          },
          {
            title: 'Growth.Design Case Studies',
            subtitle: 'Product tips in comic book format',
            comments: 215,
            tag: 'User Experiance',
            icon: 'growth.gif',
            likes: '1786'
          },
          {
            title: 'Basecamp Personal',
            subtitle: 'A futuristic electric pickup ruck from Tesla',
            comments: 126,
            tag: 'Cars',
            icon: 'tesla.jpeg',
            likes: '1562'
          }
        ].map(single => (
          <Card {...single} />
        ))}
      </div>
      <h1>Today</h1>
      <div className="left-section">
        {[
          {
            title: 'Coders Rank',
            subtitle: 'The ultimate profile for developers',
            comments: 98,
            tag: 'Education',
            icon: 'coderank.gif',
            likes: '615'
          },
          {
            title: 'Pink-Out Extension',
            subtitle:
              'Un-Pink the web, protect yourself from Trademark Trolls🤦‍♂️',
            comments: 33,
            tag: 'Chrome Extensions',
            icon: 'pink.gif',
            likes: '326'
          },
          {
            title: 'Halfdollor',
            subtitle: 'Free and elaborate spreadheet budgeting',
            comments: 19,
            tag: 'Productivity',
            icon: 'halfdollar.jpeg',
            likes: '143'
          },
          {
            title: 'Ship.com',
            subtitle:
              'A new way to track, ship and share packages from your phone',
            comments: 126,
            tag: 'Promoted',
            icon: 'ship.gif',
            likes: '357'
          }
        ].map(single => (
          <Card {...single} />
        ))}
      </div>
    </div>
  );
}
