'use client';

import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';

const HeaderAccount = () => {
  return (
    <div className="h-12 bg-[#CCCCCC] pr-14 flex justify-end items-center">
      <MenuTrigger>
        <Button aria-label="Menu" className={`flex`}>
          Hi, Barbara 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </Button>
        <Popover>
          <Menu className={`bg-white p-5 border-2 border-[#D9D9D9] rounded`}>
            <MenuItem onAction={() => alert('clicked "Your profile"')}>Your profile</MenuItem>
            <MenuItem onAction={() => alert('clicked "Settings')}>Settings</MenuItem>
            <MenuItem onAction={() => alert('clicked "Sign out"')}>Sign out</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>   
  )
}

export default HeaderAccount;
