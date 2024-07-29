import { onGetPaymentConnected } from '@/actions/settings'
import Databaseconnect from '@/components/databaseConnect'
import Dbconnectedtable from '@/components/dbconnectedtable'
import InfoBar from '@/components/infobar'
import IntegrationsList from '@/components/integrations'

const IntegrationsPage = async () => {
  const payment = await onGetPaymentConnected()

  const connections = {
    stripe: payment ? true : false,
  }
  // const connectionsDB = {
  //   databse connect
  // }

  return (
    <>
      <InfoBar />
      <div className='pt-[140px] md:pt-[90px]'>
      <div className='flex'>
        
      <Databaseconnect />
      <IntegrationsList connections={connections} />
      </div>
      <div>
        <Dbconnectedtable />
      </div>
      </div>
      
    </>
  )
}

export default IntegrationsPage
