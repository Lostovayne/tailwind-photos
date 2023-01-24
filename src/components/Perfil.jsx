
const Perfil = () => {
  return (
      <section className='flex flex-col items-center relative '>
          <img
              src='https://i.ibb.co/g3Yqb0R/joey-nicotra-2-Fh-RTB11-FGg-unsplash.jpg'
              alt=''
              className='h-60 w-60 object-cover rounded-full  bg-white p-2 top-6 absolute shadow-md shadow-gray-100 '
          />
          <div className='h-[21rem] w-full bg-white shadow-md shadow-gray-200 mt-40 rounded-md '>
              <div className=' h-full flex flex-col items-center mt-[110px]'>
                  <span className='text-2xl font-bold text-gray-600 '>
                      Deus the Vult
                  </span>
                  <p className='w-2/3 mt-2 text-gray-600 mx-auto'>
                      Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Dolorum porro impedit dolorem
                      aspernatur ab vero voluptatum esse veritatis,
                      cumque temporibus alias, quia obcaecati nihil
                      totam voluptas deserunt dolor necessitatibus
                      quas?
                  </p>

                  <div className='datos w-1/3'>
                      <div className='flex justify-between   mt-12'>
                          <div className='flex  flex-col items-center gap-1'>
                              <span className='font-bold text-gray-600 text-xl '>
                                  600
                              </span>
                              <span className='font-medium text-gray-400 text-sm'>
                                  Works
                              </span>
                          </div>

                          <div className='flex  flex-col items-center gap-1'>
                              <span className='font-bold text-gray-600 text-xl '>
                                  2400
                              </span>
                              <span className='font-medium text-gray-400 text-sm'>
                                  Followers
                              </span>
                          </div>

                          <div className='flex  flex-col items-center gap-1'>
                              <span className='font-bold text-gray-600 text-xl '>
                                  4785
                              </span>
                              <span className='font-medium text-gray-400 text-sm'>
                                  Following
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Perfil