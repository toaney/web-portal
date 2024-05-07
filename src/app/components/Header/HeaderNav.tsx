'use client';

import Link from "next/link";
import {useRouter} from 'next/navigation';
import {useState, useRef} from 'react';
import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';

const HeaderNav = () => {
  const [sitAmetActive, setSitAmetActive] = useState(false);
  const [ullamcorperActive, setUllamcorperActive] = useState(false);
  const [morbiRutrumActive, setMorbiRutrumActive] = useState(false);
  const router = useRouter();
  let sitAmetTabRef = useRef(null);
  let ullamcorperTabRef = useRef(null);
  let morbiRutrumTabRef = useRef(null);

  return (
    <nav className="flex">
      <Link href="/">
        <div>Dashboard</div>
      </Link>
      <Link href="/lorem-ipsum">
        <div className={`flex pl-5`}>Lorem Ipsum</div>
      </Link>
      <Link href="/dolor">
        <div className={`flex pl-5`}>Dolor</div>
      </Link>
      <div className={`flex pl-5`}>
        <Button onPress={() =>  setSitAmetActive(!sitAmetActive)} aria-label="Menu" ref={sitAmetTabRef} className={`flex`}>
          Sit Amet
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </Button>
        <Popover triggerRef={sitAmetTabRef} isOpen={sitAmetActive} onOpenChange={() => setSitAmetActive(!sitAmetActive)} className={`bg-white p-5 border-2 border-[#D9D9D9] rounded`}>
          <Button onPress={()=> {
              setSitAmetActive(!sitAmetActive)
              router.push('/sit-amet/a')
            }} aria-label="Menu" className={`flex`}>
              Sit Amet A
          </Button>
          <Button onPress={()=> {
              setSitAmetActive(!sitAmetActive)
              router.push('/sit-amet/b')
            }} aria-label="Menu" className={`flex`}>
              Sit Amet B
          </Button>
        </Popover>
      </div>



      <div className={`flex pl-5`}>
        <Button onPress={() =>  setUllamcorperActive(!ullamcorperActive)} aria-label="Menu" ref={ullamcorperTabRef} className={`flex`}>
          Ullamcorper
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </Button>
        <Popover triggerRef={ullamcorperTabRef} isOpen={ullamcorperActive} onOpenChange={() => setUllamcorperActive(!ullamcorperActive)} className={`bg-white p-5 border-2 border-[#D9D9D9] rounded`}>
          <Button onPress={()=> {
              setUllamcorperActive(!ullamcorperActive)
              router.push('/sit-amet/a')
            }} aria-label="Menu" className={`flex`}>
              Ullamcorper A
          </Button>
          <Button onPress={()=> {
              setUllamcorperActive(!ullamcorperActive)
              router.push('/sit-amet/b')
            }} aria-label="Menu" className={`flex`}>
              Ullamcorper B
          </Button>
        </Popover>
      </div>




      <div className={`flex pl-5`}>
        <Button onPress={() =>  setMorbiRutrumActive(!morbiRutrumActive)} aria-label="Menu" ref={morbiRutrumTabRef} className={`flex`}>
          Morbi Rutrum
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </Button>
        <Popover triggerRef={morbiRutrumTabRef} isOpen={morbiRutrumActive} onOpenChange={() => setMorbiRutrumActive(!morbiRutrumActive)} className={`bg-white p-5 border-2 border-[#D9D9D9] rounded`}>
          <Button onPress={()=> {
              setMorbiRutrumActive(!morbiRutrumActive)
              router.push('/sit-amet/a')
            }} aria-label="Menu" className={`flex`}>
              Sit Amet A
          </Button>
          <Button onPress={()=> {
              setMorbiRutrumActive(!morbiRutrumActive)
              router.push('/sit-amet/b')
            }} aria-label="Menu" className={`flex`}>
              Sit Amet B
          </Button>
        </Popover>
      </div>
    </nav>
  )
}

export default HeaderNav;

