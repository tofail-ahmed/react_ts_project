import React from 'react';
import UserAvatar from '../component/UserAvatar';
import WithBorder from '../component/WithBorder';

const UserWithBorder=WithBorder(UserAvatar)
const GameResult = () => {
      return (
            <div className='flex justify-center gap-4'>
                  <UserAvatar></UserAvatar>
                  <UserWithBorder></UserWithBorder>
                  <UserAvatar></UserAvatar>
                  <UserAvatar></UserAvatar>
            </div>
      );
};

export default GameResult;