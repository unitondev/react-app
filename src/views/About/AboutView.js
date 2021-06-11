import logo from "./../../logo.svg";
import NavBarView from "./../../views/Navbar/NavBarView";

function AboutView(props) {
    return (
        <>
            <NavBarView />
            <div className="about-block container">
                <div className="about-text-block">
                    <div className="about-description-block">
                        <p className="about-description-text">
                            Google LLC is an American multinational technology
                            company that specializes in Internet-related
                            services and products, which include online
                            advertising technologies, a search engine, cloud
                            computing, software, and hardware. It is considered
                            one of the five Big Tech companies along with
                            Amazon, Facebook, Apple, and Microsoft.
                        </p>
                    </div>
                </div>

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        </>
    );
}

export default AboutView;
