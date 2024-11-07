import Image from "next/image";
import Link from "next/link";
import HeroSecCard from "./HeroSecCard";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to Dil Se Qalam
          </h1>
          <p>
          Dive into the world of captivating love stories and mesmerizing
            afsanay. Explore a collection of heart-touching novels that will
            keep you hooked till the very end. Join us in this journey through
            emotions, romance, and unforgettable tales.
          </p>
          <a href="/novels" className="explore-button">
            Explore Novels
          </a>
        </div>

        <div className="hero-image">
          <Image
            src="/images/home.jpg"
            alt="Hero Section Image"
            height={400}
            width={400}
            className="img"
          />
        </div>
      </div>

      <div className="famous-novels-section">
        <h2 className="famous-novels-title">
          Famous Novels
        </h2>

        <div className="famous-novels">
        <HeroSecCard
            title="Peer-e-Kamil"
            author="Umera Ahmed"
            description="یہ کہانی دو روحوں کی روحانی سفر ہے جو اپنی زندگی کا مقصد تلاش کر رہی ہیں۔"
            image="/images/peer-e-kamil.jpg"
            pdf="https://www.mediafire.com/file/cxrxbemap59etis/Pir_e_Kamil_By_Umera_Ahmed.pdf/file"
            onlineRead="https://drive.google.com/file/d/1Wqdlesxd_bteUF8EKZ9VevTZN6OE7dta/view"
          />

          {/* Jannat K Pattay by Nimra Ahmed */}
          <HeroSecCard
            title="Jannat K Pattay"
            author="Nimra Ahmed"
            description="ایک سنسنی خیز کہانی، جو محبت، مہم جوئی اور خود دریافت کے گرد گھومتی ہے۔"
            image="/images/jannat-k-pattay.jpg"
            pdf="https://www.mediafire.com/file/lxhyw40kblqik2m/Jannat_Ke_Pattay_novel_complete_by_NimraAhmed.pdf/file"
            onlineRead="https://drive.google.com/file/d/1nHC5-qSqao13hQ-89K-nDrzD-1MwywEq/view"
          />

          {/* Rooh-e-Yaram by Areej Shah */}
          <HeroSecCard
            title="Rooh-e-Yaram"
            author="Areej Shah"
            description="ایک پرجوش اور شدت پسند محبت کی کہانی جو جذبات کی گہرائیوں کو تلاش کرتی ہے۔"
            image="/images/rooh-e-yaram.jpg"
            pdf="https://play.google.com/store/apps/details?id=com.kitabnagri.rooh_e_yaram_novel"
            onlineRead="https://drive.google.com/file/d/1JVAICcJlJRTbuTqBKNmdh9pOh1P4t-pW/view"
          />
        </div>

        <div className="explore-more-button">
          <Link href="/novels" className="explore-more-link">
            Explore More Novels
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;