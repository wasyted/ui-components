import Header from './Header';
import Link from 'next/link';

import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from '@mui/icons-material/Dashboard';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DashboardLink from './Link';

export default function SidePanel(){

  return(
    <nav className='relative left-0 top-0 min-h-screen flex flex-col items-center justify-start md:items-start dark:bg-neutral-950 w-16 md:w-72 z-50'>
      <div className='fixed top-0 left-0 bottom-0'>
        <Header />
        <Link href={'/dashboard/profile'} className='flex items-center justify-center md:justify-start gap-x-2 p-4 mx-auto max-w-4/5'>
          <div className='flex items-center justify-center'>
            <AccountCircleIcon className='md:text-3xl' />
          </div>
          <div className='hidden md:block'>
            <p className='text-sm'>Matías Wasyluk</p>
            <div className='text-xs opacity-50 md:max-w-40'>
              <p className='truncate'>matiaswasyluk@gmail.com</p>
            </div>
          </div>
        </Link>
        <div className='p-4 md:p-8 md:pl-0 md:w-4/5 md:mx-auto flex items-start justify-start border-b border-t border-white/25'>
          <ul className='flex flex-col text-sm gap-3'>
            <li>
              <DashboardLink linkIcon={<Dashboard />} linkName={'Workgroups'} linkTo={'/dashboard'}/>
            </li>
            <li>
              <DashboardLink linkIcon={<BarChartRoundedIcon />} linkName={'Charts'} linkTo={'/dashboard/charts'}/>
            </li>
            <li>
              <DashboardLink linkIcon={<AddTaskRoundedIcon />} linkName={'Activity'} linkTo={'/dashboard/activity'}/>
            </li>
            <li>
              <DashboardLink linkIcon={<PeopleAltRoundedIcon />} linkName={'Users'} linkTo={'/dashboard/users'}/>
            </li>
          </ul>
        </div>
        <div className='p-4 md:p-8 md:pl-0 md:w-4/5 md:mx-auto flex items-start justify-start border-white/25'>
          <ul className='flex flex-col text-sm gap-3'>
            <li>
              <DashboardLink linkIcon={<NotificationsRoundedIcon />} linkName={'Notifications'} linkTo={'/dashboard/notifications'}/>
            </li>
            <li>
              <DashboardLink linkIcon={<QuestionAnswerRoundedIcon />} linkName={'Chats'} linkTo={'/dashboard/chats'}/>
            </li>
            <li>
              <DashboardLink linkIcon={<StarRoundedIcon />} linkName={'Starred'} linkTo={'/dashboard/starred'}/>
            </li>
            <li>
              <DashboardLink linkIcon={<LogoutRoundedIcon />} linkName={'Log out'} linkTo={'/'}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}