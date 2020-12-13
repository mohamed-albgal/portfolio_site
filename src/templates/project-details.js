import react from react
import Layout from "../components/layout"
import NavBar from "../components/Navbar"

export default () => {
    return (
        <Layout>
            <NavBar />
        
            <div className="bg-blue-900 container w-full">
            <div className="pre"></div>
            </div>
        </Layout>
    );
}