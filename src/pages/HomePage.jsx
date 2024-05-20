import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListings from '../components/JobsListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title="Become a React Dev" subtitle='Find the React kob that fits your skill set'/>
    <HomeCards/>
    <JobsListings isHome={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage
