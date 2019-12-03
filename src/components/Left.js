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
            icon: 'basecamp.jpeg'
          },
          {
            title: 'Growth.Design Case Studies',
            subtitle: 'Product tips in comic book format',
            comments: 215,
            tag: 'User Experiance',
            icon: 'growth.gif'
          },
          {
            title: 'Basecamp Personal',
            subtitle: 'Manage all your small projects for free',
            comments: 126,
            tag: 'Android',
            icon: 'tesla.jpeg'
          },
          {
            title: 'Basecamp Personal',
            subtitle: 'Manage all your small projects for free',
            comments: 126,
            tag: 'Android',
            icon: 'tesla.jpeg'
          }
        ].map(single => (
          <Card {...single} />
        ))}
      </div>
    </div>
  );
}
