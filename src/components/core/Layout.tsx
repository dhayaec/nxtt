import Header from '../ui/header/Header'

export interface LayoutProps {
    children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className="bg-blue-50">
            <div className="container mx-auto text-center bg-blue-300 p-2">
                <Header name="Header" />
            </div>
            <main className="container mx-auto bg-white h-screen rounded-lg mt-2 border border-blue-100">
                {children}
            </main>
        </div>
    )
}
