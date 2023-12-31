import Layout from "../components/Layout/Layout"

export default function Profile() {
  return (
    <Layout>
      <div className='flex justify-center my-16 bg-slate-200 rounded-xl p-16'>
        <img
          className=' h-96 rounded-full border-2 border-gray-300'
          src='https://i.imgflip.com/29c5xr.jpg'
          alt=''
        />
        <div className='mx-16 p-16'>
          <div className='text-2xl font-medium text-gray-900'>Margot Foster</div>
          <div className='text-xl text-gray-500'>margotfoster@example.com</div>
          <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>User Information</h3>
          </div>
          <div className='border-t border-gray-200'>
            <dl>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 '>
                <dt className='text-sm font-medium text-gray-500'>Full name</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  Margot Foster
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 '>
                <dt className='text-sm font-medium text-gray-500'>Email address</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  margotfoster@example.com
                </dd>
              </div>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 '>
                <dt className='text-sm font-medium text-gray-500'>Phone Number</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  +91 9898989898
                </dd>
              </div>
            </dl>
          </div>
        </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto p-4'>
        <div className='mt-8 bg-white shadow overflow-hidden sm:rounded-lg'>
          <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>Recent Orders</h3>
          </div>
          <div>{/* Order history table */}</div>
      </div>
      </div>
    </Layout>
  )
}
