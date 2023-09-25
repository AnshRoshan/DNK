import Layout from "../components/Layout/Layout"

export default function Profile() {
  return (
    <Layout>
       <div className="flex">
      <div className="h-22 w-22 max-h-22 max-w-22">
        <img 
        className=" h-22 w-22 object-cover rounded-full border-2 border-gray-300"
        src="https://i.imgflip.com/29c5xr.jpg" 
        alt=""
      /></div>

      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">
          Margot Foster
        </div>
        <div className="text-sm text-gray-500">
          margotfoster@example.com
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Information
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Margot Foster
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                margotfoster@example.com
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                +91 9898989898
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Recent Orders
          </h3>
        </div>
        <div>
          {/* Order history table */}
        </div>
      </div>

    </div>
    <div className="bg-gray-100 p-4 max-w-55 rounded-md">

      <div className="flex justify-between">
      
        <div>
          <p className="text-sm font-medium text-gray-900">
            '12122001'
          </p>

          <p className="text-xs text-gray-700">
            'Delivered'
          </p>
        
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold text-indigo-600">
            2
          </p>
        
          <p className="text-base font-medium text-gray-900">
            999 
          </p>
        </div>
      
      </div>

    </div>
    </Layout>
  )
}