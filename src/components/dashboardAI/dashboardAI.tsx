import React from 'react'
import Dashboardpay from '../settings/dashboardpay';
import DashboardAppointment from './appointmentToday';

import DashDatabaseConnect from '../databaseConnect/dashboardDbconnect';
import Dashchatbot from './dashboardchat';
import Welcomecard from './welcomecard';
import InfodashCard from './dashboardAicard';
import Planused from './planUses';
import PaymentTrans from './payment-transactions';
import Docdiv from './documentdiv';

const DashboardAi = () => {
    return (
        <div className=' w-full bg-purple-100 flex flex-col lg:flex-row mt-4 mr-4'>
            <div className='min-w-[85%] min-h-[60vh] lg:min-w-[65vw] lg:h-[85vh] bg-white ml-3 mt-3  rounded-lg '>
              <div> <Welcomecard /> </div>
              <div className='ml-4'><InfodashCard /></div>
              <div className='md:flex '>
                <div>
                <Planused />
                </div>
                <div>
                  <PaymentTrans />
                </div>
                <div>
                  
                    <Docdiv />
                  
                </div>
               
                </div>
            </div>
            <div className='hidden lg:block'>
            <div className='lg:min-w-[28vw] lg:h-[85vh] bg-white m-3 rounded-lg flex flex-col items-center '>
              <Dashboardpay />
              <div>
              <DashboardAppointment />
              </div>
              <div>
              <DashDatabaseConnect />
              </div>
              <div>
                <Dashchatbot />
              </div>
            </div>
            </div>
        </div>
    );
}
 
export default DashboardAi;