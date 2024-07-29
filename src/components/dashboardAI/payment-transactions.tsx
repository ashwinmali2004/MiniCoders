import { getUserAppointments } from '@/actions/appointment'
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from '@/actions/dashboard'
import DashboardCard from '@/components/dashboard/cards'
import { PlanUsage } from '@/components/dashboard/plan-usage'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import CalIcon from '@/icons/cal-icon'
import EmailIcon from '@/icons/email-icon'
import PersonIcon from '@/icons/person-icon'
import { TransactionsIcon } from '@/icons/transactions-icon'
import { IndianRupee } from 'lucide-react'
import React from 'react'
import DashboardAi from '@/components/dashboardAI/dashboardAI'

type Props = {}

const PaymentTrans = async (props: Props) => {
  const clients = await getUserClients()
  const sales = await getUserBalance()
  const bookings = await getUserAppointments()
  const plan = await getUserPlanInfo()
  const transactions = await getUserTransactions()
  const products = await getUserTotalProductPrices()

  return (
   
    <div className="flex flex-col bg-gradient-to-r from-cyan-300 via to-red-300 p-5 rounded-md mt-5">
    <div className="w-full flex justify-between items-start mb-5 ">
      <div className="flex gap-3 items-center">
        <TransactionsIcon />
        <p className="font-bold">Recent Transactions</p>
      </div>
      <p className="text-sm cursor-pointer pl-5">See more</p>
    </div>
    
    <div className='overflow-y-scroll h-[30vh] pr-4'>
    {transactions &&
      transactions.data.map((transaction) => (
        <div
          className="flex flex-col sm:flex-row gap-3 w-full justify-between items-center border-b-2 py-5"
          key={transaction.id}
        >
          <p className="font-bold text-sm text-center sm:text-left">
            {transaction.calculated_statement_descriptor}
          </p>
          <p className="font-bold text-sm text-center sm:text-right">
          ₹{transaction.amount / 100}
          </p>
        </div>
      ))}
      </div>
  </div>
      
    
   
     
   
  )
}

export default PaymentTrans
