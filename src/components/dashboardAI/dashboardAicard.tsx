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
import CalIcon1 from '@/icons/cal-icon-1'
import TotalQuery from '@/icons/totalQuery'
type Props = {}

const InfodashCard = async (props: Props) => {
  const clients = await getUserClients()
  const sales = await getUserBalance()
  const bookings = await getUserAppointments()
  const products = await getUserTotalProductPrices()

  return (
    <div>
      <div className="flex flex-wrap gap-5">
        <DashboardCard
          value={clients || 0}
          title="Potential Clients"
          icon={<PersonIcon />}
          backgroundColor="linear-gradient(to right, #fbc2eb, #d946ef)" // Custom background color
        />
        <DashboardCard
          value={products! * clients! || 0}
          sales
          title="Pipeline Value"
          icon={<h1 className='text-white text-xl '>₹</h1>}
          backgroundColor="linear-gradient(to right, #f6d365, #fda085)" // Custom background color
        />
        <DashboardCard
          value={bookings || 0}
          title="Appointments"
          icon={<CalIcon1 />}
          backgroundColor="linear-gradient(to right, #a1c4fd, #22d3ee)" // Custom background color
        />
        <DashboardCard
          value={sales || 0}
          sales
          testing
          title="Total Sales"
          icon={<h1 className='text-white text-xl '>₹</h1>}
          backgroundColor="linear-gradient(to right, #667eea, #764ba2)" // Custom background color
        />
        <DashboardCard
          value={7}
          title="Total Query"
          icon={<TotalQuery />}
          backgroundColor="linear-gradient(to right, #ff9a9e, #f43f5e)" // Custom background color
        />
      </div>
    </div>
  )
}

export default InfodashCard
