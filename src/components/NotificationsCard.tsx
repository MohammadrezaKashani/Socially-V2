import React from 'react'
import Commented from './Commented'
import Liked from './Liked'

function NotificationsCard() {
  return (
    <div className='bg-card  border border-border rounded-xl'>

      <div className=' flex flex-col justify-center' >

        <div className='flex justify-between px-5 mt-7 '>
          <span className='text-primary '>Notifications</span>
          <div className='flex items-center gap-4'>
            <span className='text-muted-foreground'>2 unread</span>
            <button className='p-2 rounded-xl hover:bg-asent/50'> <span className='text-primary '>Mark as read</span></button>
         
        </div>
        </div>
       
      
        <div className='max-h-100 overflow-y-auto pr-2 space-y-4 px-5 py-7 custom-scrollbar'>
          <Commented />
         <Liked/><Commented />
         <Liked/>
        </div>
      </div>
      
    </div>
  )
}

export default NotificationsCard
