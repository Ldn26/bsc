import Appointment from '@/components/Appointment'
import withAuth from '../hoc/withAuth';
import React from 'react'

const AppointmentPage  = function () {
  return (
    <div>
      <Appointment/>
    </div>
  )
}

export default AppointmentPage
