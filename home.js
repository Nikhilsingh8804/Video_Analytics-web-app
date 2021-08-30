import React from 'react';

import Navbar from './navbar';
import PeopleCount from './peopleCount';
import HighOccupancyZone from './highOccupancyZone';
import SocialDistanceViolation from './socialDistance';
import SeatOccupancy from './seatOccupancy';
import ObjectDetection from './objectDetection';

import { Card } from 'antd';

const tabListNoTitle = [
  {
    key: 'peoplecount',
    tab: 'People Count'
  },
  {
    key: 'socialDistanceViolation',
    tab: 'Social Distance Violation'
  },
  {
    key: 'highOccupancyZone',
    tab: 'High Occupancy Zone'
  },
  {
    key: 'objectDetection',
    tab: 'Unattended Object Detection'
  },
  {
    key : 'seatOccupancy',
    tab: 'Seat Occupancy'
  },
];

const contentListNoTitle = {
  peoplecount: <PeopleCount />,
  socialDistanceViolation: <SocialDistanceViolation />,
  highOccupancyZone: <HighOccupancyZone />,
  objectDetection : <ObjectDetection />,
  seatOccupancy : <SeatOccupancy />
};
export default class Home extends React.Component {
  // export default function Home() {
  state = {
    noTitleKey: 'peoplecount'
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={this.state.noTitleKey}
        onTabChange={key => {
          this.onTabChange(key, 'noTitleKey');
        }}
      >
        {contentListNoTitle[this.state.noTitleKey]}
      </Card>
    );
  }
  // return (
  //   <div>
  //     <PeopleCount />
  //   </div>
  // );
}
