import urls from '../constants/urls.js'

export default function Information() {
  return (
    <div className='information'>
      <img
        className='w-100'
        src='https://avatars.githubusercontent.com/u/75494437?v=4'
      />
      <h1 className='mt-4 text-center my-2'>Louis Gustavo</h1>
      <h5 className='text-center my-2'>Software Engineer</h5>
      <a
        href={urls.web}
        className='d-flex justify-content-center link-light link-underline-opacity-0 link-underline-opacity-75-hover'
      >
        leejhlouis.github.io
      </a>
      <div className='d-flex justify-content-between gap-3 mt-4 mx-3'>
        <a
          href={urls.mail}
          className='btn btn-light w-100'
        >
          <i className='bi bi-envelope-fill pe-2'></i>Email
        </a>
        <a
          href={urls.linkedin}
          className='btn btn-linkedin w-100 text-white'
        >
          <i className='bi bi-linkedin pe-2'></i>LinkedIn
        </a>
      </div>
    </div>
  )
}
