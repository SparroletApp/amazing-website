import Certifications from "./home/certifications/page";
import CertifiedProducts from "./home/certified-products/page";
import CertifiedStandard from "./home/certified-standard/page";
import ExploreAbout from "./home/explore-about/page";
import Feedback from "./home/feedback/page";
import LandingPage from "./home/landingpage/page";
import ManufactureTour from "./home/manufacturetour/page";
import SustainableGrowth from "./home/sustainable-growth/page";


export default function Home() {
  return (
    <>
    <LandingPage/>
    <CertifiedStandard/>
    <Certifications/>
    <CertifiedProducts/>
    <ManufactureTour/>
    <ExploreAbout/>
    <SustainableGrowth/>
    <Feedback/>
    </>
  );
}
