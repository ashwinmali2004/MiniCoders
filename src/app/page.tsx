// import { onGetBlogPosts } from '@/actions/landing'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/constants/landing-page'
import { blogPosts } from '@/constants/blog-posts'

import clsx from 'clsx'
import { ArrowRightCircleIcon, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import { getMonthName } from '@/lib/utils'
import Stripe from 'stripe'
import Contact from '@/components/contact'
import Team from '@/components/team'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2024-04-10',
})
export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  })
  // const posts:
  //   | {
  //       id: string
  //       title: string
  //       image: string
  //       content: string
  //       createdAt: Date
  //     }[]
  //   | undefined = await onGetBlogPosts()
  // console.log(posts)
  return (
    <main>

      <NavBar />
      <section id="home">
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span className="text-white font-bold bg-purple-800 px-4 py-2  shadow-lg rounded-full text-lg ml-2 mr-2">
            An AI powered Data Query chatbot & Business AI
          </span>
          <div className="animate-text bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent font-black">
          <h1 className=" text-6xl sm:text-7xl md:text-9xl lg:text-[150px] xl:text-[200px] font-bold text-center mt-10">
          DataQueryAI
          </h1>
        </div>
          <p className="text-center max-w-[300px] md:max-w-[500px] mb-10">
            Your AI powered Database assistant! Embed <span className='text-red-800 font-bold'>DataQueryAI</span> AI into any Database
            with just a step
          </p>
         
          <Image
            src="/images/dataquery-demo.png"
            width={1000}
            height={400}
            alt="Logo"
            className="max-w-xs md:max-w-2xl object-contain "
          />
      
        </div>
        <div className='flex items-center justify-center flex-col gap-4 mt-4'>
        <div className='md:flex md:items-center md:justify-center md:flex-row'> 
          <div className='flex items-center justify-center flex-col text-center p-6'>
            <Image src="/images/plug.png" width={40} height={40} alt='logo' />
             <h1 className='font-bold text-xl pt-4'>Easy Connection</h1>
             <p className='text-sm'> connect to various databases with minimal setup </p>
          </div>
          <div className='flex items-center justify-center flex-col text-center p-6'>
            <Image src="/images/search.png" width={40} height={40} alt='logo' />
             <h1 className='font-bold text-xl pt-4'>Intelligent Querying</h1>
             <p className='text-sm'> Leverage Ai to craft complex queries effortlessly </p>
          </div>
          <div className='flex items-center justify-center flex-col text-center p-6'>
            <Image src="/images/dashboard.png" width={40} height={40} alt='logo' />
             <h1 className='font-bold text-xl pt-4'>Visualize Data</h1>
             <p className='text-sm'> Generate insightful Chart and report</p>
          </div>
        </div>

        <Link href="/dashboard">
          <Button className="bg-red-600 hover:bg-red-400 font-bold text-white px-4 hover:shadow-xl hover:shadow-red-600">
           Start The Work
          </Button>
          </Link>
        </div>
      </section>
{/* this is project Featuers page */}
      <section className="features-section py-20 mt-10" id='features'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                  <Image src="/features/AI-Powered.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2"> AI-Powered Data Queries</h3>
              <p className="text-gray-600">Leverage advanced AI algorithms to simplify complex data queries and gain deeper insights.
              </p>
            </div>
           
          
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl min-h-[400]">
                               <Image src="/features/Interactive.jpg" height={100} width={250} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Interactive Data Visualization</h3>
              <p className="text-gray-600">Transform your data into stunning visualizations for easier analysis and interpretation.</p>
            </div>
            
           
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Seamless-Database-Connectivity.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Seamless Database Connectivity</h3>
              <p className="text-gray-600">Connect to your databases effortlessly with secure and straightforward authentication.</p>
            </div>
         
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Secure-Data-Handling.png" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Secure Data Handling</h3>
              <p className="text-gray-600">Ensure your data is protected with robust security measures and encryption.</p>
            </div>
         
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Real-Time-Collaboration.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Real-Time Collaboration</h3>
              <p className="text-gray-600">Collaborate with your team in real-time, sharing insights and working on data together.</p>
            </div>
        
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Customizable-Dashboards.png" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Customizable Dashboards </h3>
              <p className="text-gray-600">Create personalized dashboards to monitor key metrics and track performance at a glance.</p>
            </div>
           
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Advanced-Search-Capabilities.avif" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Advanced Search Capabilities</h3>
              <p className="text-gray-600">Utilize powerful search tools to find relevant data and insights quickly and efficiently.</p>
            </div>
            
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Automated-Reporting.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Automated Reporting</h3>
              <p className="text-gray-600">Generate comprehensive reports automatically, saving time and ensuring accuracy.</p>
            </div>
           
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/User-Friendly-Interface.avif" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">User-Friendly Interface</h3>
              <p className="text-gray-600">Enjoy an intuitive and responsive interface designed for both novice and expert users.</p>
            </div>
        
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Integration-Tools1.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Integration with Popular Tools</h3>
              <p className="text-gray-600">Integrate seamlessly with other popular tools and platforms to enhance your workflow.</p>
            </div>
            
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Comprehensive-Documentation.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Comprehensive Documentation</h3>
              <p className="text-gray-600">Access detailed guides and documentation to help you get the most out of DataQueryAI.</p>
            </div>
          
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Responsive.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Responsive Support</h3>
              <p className="text-gray-600">Get timely assistance from our dedicated support team, available to help you with any issues.</p>
            </div>
          
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Scalable-Infrastructure1.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-600">Scale effortlessly with our cloud-based infrastructure, handling large datasets with ease.</p>
            </div>
           
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Notifications.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Email Marketing</h3>
              <p className="text-gray-600">This subheading emphasizes the transformative impact of integrating AI into email marketing strategies.</p>
            </div>
            
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Blogging.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">SEO Optimized Blogging</h3>
              <p className="text-gray-600">Improve your site&apos;s search engine ranking with SEO-friendly blog posts.</p>
            </div>
            
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Improved-Architecture.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Improved Architecture</h3>
              <p className="text-gray-600">Efficient and scalable backend structure.</p>
            </div>
          
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/Pricing-Plans.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">Flexible Pricing Plans</h3>
              <p className="text-gray-600">Choose from a range of pricing plans tailored to fit different needs and budgets.</p>
            </div>
            
            <div className="feature-card bg-white p-6 rounded-xl shadow-md md:flex md:items-center md:justify-center md:flex-col text-center hover:border-cyan-500 hover:border-2 hover:shadow-cyan-500/50 hover:shadow-xl">
                               <Image src="/features/FAQ-Section1.jpg" height={150} width={300} alt='icons' />
              <h3 className="text-2xl font-semibold mb-2">FAQ Section</h3>
              <p className="text-gray-600">Provide quick answers to frequently asked questions.</p>
            </div>
           

          </div>
        </div>
      </section>
      {/* this is project document page */}
      <section className='text-center' id="doc">
        <div className='md:h-[80vh] shadow-xl rounded-2xl md:flex md:flex-row md:mr-20 md:ml-20'>
        <div className='md:w-[60vw] flex flex-row justify-center md:mt-40'>
          <div className='text-center md:w-[800px] p-6'>
          <h1 className='font-bold text-5xl'>Welcome to DataQueryAI Documentation</h1>
          <p className=' text-lg pt-6 font-serif'>Your go-to resource for everything you need to know about using DataQueryAI. From getting started guides to in-depth tutorials, our comprehensive documentation will help you maximize the potential of our AI-powered data query and analysis platform.</p>
        <Button className='bg-red-600 text-white rounded-lg mt-12 mb-6'>Go Document Page</Button>
        </div>
        </div>
        <div className='flex flex-row justify-center'>
          <div>
          <Image src="/images/document-go.png" height={800} width={350} alt="image" /> 
       
          </div> </div>
        </div>
        

      </section>

{/* project princing page */}
      <section className="flex justify-center items-center flex-col gap-4 mt-20" id='pricing'>
        <h2 className="text-4xl text-center max-w-[300px] md:max-w-[500px] animate-text bg-gradient-to-r from-purple-600 via- to-cyan-500 bg-clip-text text-transparent font-black p-2"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </section>
      <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between  hover:shadow-2xl cursor-pointer', {
              'border-2 border-cyan-500   hover:shadow-cyan-400': card.title === 'Standard',
              'border-2 border-red-500  hover:shadow-red-500': card.title === 'Ultimate',
              'border-2 border-purple-500  hover:shadow-purple-500': card.title === 'Pro',

            })}
          >
            <CardHeader>
              <CardTitle className={clsx("font-bold",{
              'text-cyan-600': card.title === 'Standard',
              'text-red-600': card.title === 'Ultimate',
              'text-purple-700': card.title === 'Pro',

            })}>{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <div>
              <Link href="#"><Button className={clsx("w-[250px] border-2 hover:shadow-2xl",{
              'bg-cyan-600 hover:shadow-cyan-500': card.title === 'Standard',
              'bg-red-600 hover:shadow-red-500': card.title === 'Ultimate',
              'bg-purple-700 hover:shadow-purple-500': card.title === 'Pro',})}>Get Start</Button></Link>
             </div>
             
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* News Blogogs Pages  */}
      <section className="flex justify-center items-center flex-col gap-4 mt-28" id='news'>
        <h2 className="text-4xl font-bold">News Room</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and optimizing your business.
        </p>
      </section>
      <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {blogPosts &&
          blogPosts.map((post) => (
            <Link href={`${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image}
                    alt="post featured image"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(new Date(post.createdAt).getMonth())}{' '}
                    {new Date(post.createdAt).getDate()}{' '}
                    {new Date(post.createdAt).getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100) + '...')}
                </div>
              </Card>
            </Link>
          ))}
      </section>

    {/* project team section */}
      <Team  />

        {/* project Contact section */}
      <Contact />

        {/* project Footer section */}
      <Footer />
    </main>
  )
}
