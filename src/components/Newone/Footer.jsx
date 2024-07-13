import React from 'react'

const Footer = () => {
  return (
    <footer className='  p-4 sm:p-6 shadow-md shadow-black border-t border-slate-100 border-opacity-30 flex items-center sm:flex-row flex-col justify-between container mx-auto text-white font-semibold bg-transparent fixed bottom-0 left-0 right-0'>
    <p>
      &copy; 2023 GitFinder. All rights reserved.
    </p>
    <p className=' flex justify-between gap-4 items-center'>
        <span> Terms</span>
        <span> Privacy</span>
        <span> FAQ</span>
    </p>
  </footer>
  )
}

export default Footer