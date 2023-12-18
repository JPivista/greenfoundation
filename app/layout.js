import '../components/Style'

export const metadata = {
  title: 'Agro-biodiversity conservation platform fostering sustainable agriculture',
  description: 'Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}
      </body>
    </html>
  )
}

