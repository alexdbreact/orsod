import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import { getLocation } from "current-location-geo";
import Axios from "axios";
const api = "https://orsod-alex.vercel.app";
import Navbar from "./navbar";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [date, setDate] = useState("");
  const [mylat, setMylat] = useState("");
  const [mylang, setMylang] = useState("");
  const [mygeo, setMygeo] = useState("");
  const [place, setPlace] = useState("");
  const [sort, setSort] = useState("");
  const [mob, setMob] = useState("");

  const [flag, setFlag] = useState("");
  
  const [image, setImage] = useState("");

  const [showModal, setShowModal] = useState(false);

 const memoizedLocation = useMemo(() => {
    const getLocationCallback = (err, position) => {
      if (err) {
        console.error("Error:", err);
      } else {
        setMygeo(position.address);
        setMylat(position.latitude);
        setMylang(position.longitude);
        setDate(Date());
      }
    };

    // Assuming getLocation is an asynchronous function
    getLocation(getLocationCallback);

    return 
      mygeo ,
      mylang,
      mylat ,
      date 


    // Return a value if needed (this can be null if you don't need a memoized value)
  }, []);
  Axios.defaults.withCredentials = true;
 const createUser = async () => {
    try {
        if (place && sort) {
            const res = await Axios.post(`${api}/createUser`, {
              memoizedLocation,
                date,
                place,
                sort,
                image,
                mylang,
                mylat,
                mygeo,
                mob,
                flag,
            }).then((res) => res.data)
            .then(function(){
              location.reload();
                  alert("تم ارسال المخالفة بنجاح .. شكراً لسيادتكم");
          })   
                           
        } else {
          alert("لم يتم الارسال .. برجاء التأكد من ادخالك البيانات المطلوبة و فتح خدمات الموقع )(Location")
          location.reload(); 
        }
    } catch (error) {
        
        // Handle errors from the server, e.g., show an error message to the user
        alert("لم يتم الارسال .. برجاء التأكد من وجودك في مكان المخالفة و فتح خدمات الموقع ") 
        
    }
};

     

   
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("erro", error);
    };
  }

  return (
    <>
    <Navbar/>
      <div className="isolate -my- bg-white px-6 py-0 sm:py-0 lg:px-8">
        <div
          className="absolute my-0 inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true">
          <div
            className="relative left-1/2 my-0 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className=" relative mx-auto max-w-2xl text-center my-0 ">
          <h2 className=" my-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            أُرصـــــــــــــد
          </h2>
          <p className="mt-1 text-md leading-4 text-gray-600">
            قم بتصوير المخالفة و ارسل لنا تفاصيلها خلال ثواني
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-2 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            <div>
              
              <select
                onChange={(e) => {
                  setPlace(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 font-bold dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center">
                <option className="bg-gray-500">  اختار الحي الواقع به المخالفة *</option>
                <option>شرق</option>
                <option>وسط</option>
                <option>غرب</option>
                <option>المنتزه أول</option>
                <option>المنتزه ثان</option>
                <option>الجمرك</option>
                <option>العامرية أول</option>
                <option>العامرية ثان</option>
                <option>برج العرب</option>
              </select>
            </div>

            <div>
              
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                }}
                className="bg-gray-50 border font-bold  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center">
                <option > اختار نوع المخالفة *   </option>
                <option>نظافة / تراكم قمامة </option>
                <option >هدم / ترميم / بناء مخالف</option>
                <option >كلاب ضالة / مفترسة</option>
                <option >إنارة / كهرباء</option>
                <option >باعة جائلين / إشغال طريق</option>
                <option >تراكم مياه / كسر ماسورة</option>
                <option >ازعاج / مكروفوانات</option>
              </select>
            </div>
           
            <div className="bg-blue-100 p-2 rounded-lg text-right overflow-hidden my-0" style={{ width: "auto" }}>
              تأكد من وجودك في موقع المخالفة ثم اضغط للتصوير او تحميل صورة المخالفة 
              <input
                className="bg-blue-100"
                accept="image/*"
                type="file"
                onChange={convertToBase64}
              />
              {image == "" || image == null ? (
                ""
              ) : (
                <img width={200} height={200} src={image} />
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 bg-blue-100">
                
              </label>
              <div className="mt-2.5">
                <textarea
                  onChange={(e) => {
                    setFlag(e.target.value);
                  }}
                  name="message"
                  id="message"
                  placeholder=" المخالف/ وصف دقيق / علامة مميزة "
                  rows={2}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900 bg-blue-100">
                رقم التليفون للتواصل و المتابعة ( اختياري)
              </label>
              <div className="mt-2.5">
                <input
                  onChange={(e) => {
                    setMob(e.target.value);
                  }}
                  type="Number"
                  name="email"
                  id="email"
                  autoComplete="Number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
       
          <div className="mt-3">
            <div>
              {/* <!-- Button trigger modal --> */}
              <TERipple rippleColor="white">
                <button
                  type="button"
                  className="inline-block mx-8 mb-4 rounded bg-primary px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  onClick={() => setShowModal(true)}>
                  تأكيد البيانات و الإرسال
                </button>
              </TERipple>

              {/* <!-- Modal --> */}
              <TEModal show={showModal} setShow={setShowModal}>
                <TEModalDialog>
                  <TEModalContent>
                    <TEModalHeader>
                      {/* <!--Modal title--> */}
                      <h2 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                        تأكيد البيانات قبل الإرسال
                      </h2>
                      {/* <!--Close button--> */}
                      <button
                        type="button"
                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                        aria-label="Close">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </TEModalHeader>
                    {/* <!--Modal body--> */}
                    <TEModalBody>

                      <p> مكان المخالفة : {place}</p>
                      <p> نوع المخالفة : {sort}</p>
                      <p>إحداثيات مكان المخالفة :  {mylang}  / {mylat}  </p>
                      <p>صورة المخالفة {image}</p>
                      <p>وصف ( إن وجد ):{flag} </p>
                      <p> رقم التليفون ( إن وجد ){mob} </p>
                                     </TEModalBody>
                    <TEModalFooter>
                      <TERipple rippleColor="light">
                        <button
                          type="button"
                          className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                          onClick={() => setShowModal(false)}>
                          رجوع للتعديل
                        </button>
                      </TERipple>
                      <TERipple rippleColor="light">
                        <button
                          onClick={createUser}
                          type="button"
                          className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                          ارسل المخالفة
                        </button>
                      </TERipple>
                    </TEModalFooter>
                  </TEModalContent>
                </TEModalDialog>
              </TEModal>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
