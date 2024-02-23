import urls from '../constants/urls.js'

export default function Footer() {
  return (
    <footer className='bg-black text-white fs-5 p-3 d-flex justify-content-center'>
      <a href={urls.mail}>
        <i className='bi bi-envelope-fill pe-4'></i>
      </a>
      <a href={urls.web}>
        <i className='bi bi-globe pe-4'></i>
      </a>
      <a href={urls.linkedin}>
        <i className='bi bi-linkedin pe-4'></i>
      </a>
      <a href={urls.github}>
        <i className='bi bi-github'></i>
      </a>
    </footer>
  )
}
