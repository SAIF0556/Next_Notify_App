'use client'

import React, { useState, useEffect, useCallback } from 'react'

export default function Home() {
  const sendNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('DiGiLABS', {
        body: 'Hello from DiGiLABS',
        icon:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTix1JUnWAQWXdh2kn7KCdOq_edkWoQlK5LHvN9vb6Pcrg5YwOvAKg2ayCK2w&s',
      })
    }
  }
  // ../../public/icon.jpeg
  const requestNotificationPermission = useCallback(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          console.log('Notification permission granted!!')
        }
      })
    }
  }, [])

  useEffect(() => {
    if ('Notification' in window) {
      requestNotificationPermission()
    }
    return
  }, [requestNotificationPermission])
  return (
    <div className="h-full">
      <div className="flex flex-col m-8  text-center">
        <h1 className="text-white  ">DiGiLABS</h1>
        <p className="text-zinc-500 p-2">
          Click on the button to get the notification
        </p>
      </div>
      <div className="flex  flex-col  items-center mb-0 bottom-0 pt-4">
        <div>
          <img
            className="rounded-full size-80 bg-white"
            src="/images/bell.jpg"
            alt="notification-icon"
          />
        </div>
        <div className="button_div  mt-8 ">
          <button
            onClick={sendNotification}
            className="bottom-0 text-white bg-orange-700  w-full mt-16 mb-0 py-4 px-7 rounded-lg justify-center
             hover:bg-black hover:border-2 hover:border-orange-700"
          >
            Send notification
          </button>
        </div>
      </div>
    </div>
  )
}
