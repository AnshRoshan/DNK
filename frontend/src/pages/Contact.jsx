import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div class="mx-auto max-w-7xl px-4  ">
        <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-12">
          {/* <div class="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p class="text-center text-xs font-semibold leading-normal md:text-sm">
              Share your thoughts
            </p>
          </div> */}
          <p class="text-center text-3xl font-bold text-sky-950 md:text-5xl md:leading-10">
            Love to hear from you
          </p>
          <p class="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xg">
          We greatly value your opinion and would love to hear your thoughts on our website. Your feedback is essential in helping us improve and provide you with a better online experience. Please take a moment to share your feedback with us.
<p>Thank you for your time and support !</p>
          </p>
        </div>
        <div class="mx-auto max-w-7xl py-6 md:py-20">
          <div class="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div class="flex items-center justify-center">
              <div class="px-2 md:py-8">
                <p class="text-2xl font-bold text-sky-950 md:text-4xl">
                  Get in touch
                </p>
                <p class="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" class="mt-8 space-y-4">
                  <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2 ">
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="first_name"
                      >
                        First Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50    "
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50    "
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                    <label
                      class="text-sm  font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="flex h-10 text-black w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed     "
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                    <label
                      class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50    "
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                    <label
                      class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea 
                      class="flex h-40 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message" 
                      placeholder="Leave us a message"
                      cols="3">
                    </textarea>
                  </div>
                  <button
                    type="button"
                    class="w-full rounded-md  bg-sky-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              class="hidden max-w-s h-full rounded-3xl object-cover lg:block"
              src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=170667a&w=0&k=20&c=ZLI1xDrvNK05PeGDH3Aal-D8xCxYWjZkUnSuhtHYyUk="
            />
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default Contact;