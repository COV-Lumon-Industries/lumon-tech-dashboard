import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import CreditScoreCard from '@/features/credit-score'
import { createFileRoute } from '@tanstack/react-router'
import { CreditCardIcon } from 'lucide-react'

export const Route = createFileRoute('/_main/dashboard/loans')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className=' w-full h-screen'>
<div className="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8">
  <div className="h-32 rounded bg-gray-300 lg:col-span-2"></div>
  <div className="h-fit grid grid-cols-1 grid-rows-2 gap-1 ">
<div>
<Card className='h-64 bg-green-gray-gradient flex flex-col justify-between  p-5 text-white'>
  <CardTitle className='w-full flex flex-row justify-between '>
<div>

  <Label className='text-sm text-neutral-300'>Account Balance</Label>
  <p className='text-2xl font-semibold font-raleway'>Ghc 9000.00</p>
</div>

<CreditCardIcon className='w-6 h-6 text-white'/>

  </CardTitle>
  <CardContent className='p-0'>
  <Label className='text-md text-neutral-200'>Papa Yaw Agyeman-Gyekye</Label>
  <p className='text-xl font-medium font-raleway'>020******8341</p>
  </CardContent>
</Card>
<div className=' grid grid-cols-2 gap-5 mt-5'>
<Button>
Switch Account
</Button>
<Button variant={"outline"}>
Request Loan
</Button>
</div>
  </div>
  <CreditScoreCard/>
  </div>
</div>

  </div>
}
