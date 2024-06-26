import '@/app/global.css'

export const metadata = {
    title: 'Todo',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased" data-theme="dracula">{children}</body>
        </html>
    )
}

export default RootLayout
