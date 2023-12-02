import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from './../components/Banner';
import Products from "@/components/Products";

const Homepage = () => {
    return (
    <div>
        <header>
            <Header/>
        </header>
<main>
<  Banner/>
<div className="mt-2 5">
<  Products/>
</div>
</main>
      

        <footer>
            <Footer/>
        </footer>
    </div>
    )
}

export default Homepage;