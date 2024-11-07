import NovelCard from "../components/NovelCard";

const novelsData = [
  {
    title: "Peer-e-Kamil",
    author: "Umera Ahmed",
    description:
      "یہ کہانی دو روحوں کی روحانی سفر ہے جو اپنی زندگی کا مقصد تلاش کر رہی ہیں۔",
    image: "/images/peer-e-kamil.jpg",
    pdf: "https://www.mediafire.com/file/cxrxbemap59etis/Pir_e_Kamil_By_Umera_Ahmed.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1Wqdlesxd_bteUF8EKZ9VevTZN6OE7dta/view",
  },
  {
    title: "Namal",
    author: "Nimra Ahmed",
    description: "ایک شاندار داستان جو محبت اور دشمنی کے گرد گھومتی ہے۔",
    image: "/images/namal.jpg",
    pdf: "https://www.mediafire.com/file/ooebt7qbmp43h07/Namal_novel_by_Nimra_Ahmad.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1_c35wzJGJ5fYnpizqMk5n1pZRC0gwbC8/view",
  },
  {
    title: "Mala",
    author: "Nimra Ahmed",
    description: "محبت اور احساسات کی ایک خوبصورت کہانی۔",
    image: "/images/mala.jpg",
    pdf: "https://www.mediafire.com/file/sswt873ovyym786/Maala_by_Nimrah_Ahmed_1_to_15_Episodes.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1KworIGhU687b68cZ2PPZN7FQsbzUJevt/view",
  },
  {
    title: "Rooh-e-Yaram",
    author: "Areej Shah",
    description: "ایک پرجوش اور شدت پسند محبت کی کہانی۔",
    image: "/images/rooh-e-yaram.jpg",
    pdf: "https://play.google.com/store/apps/details?id=com.kitabnagri.rooh_e_yaram_novel",
    onlineRead:
      "https://drive.google.com/file/d/1JVAICcJlJRTbuTqBKNmdh9pOh1P4t-pW/view",
  },
  {
    title: "Aabe Hayat",
    author: "Umera Ahmed",
    description: "زندگی کی مشکلات اور خوشیوں کے بارے میں ایک عمیق بصیرت۔",
    image: "/images/aabe-hayat.jpg",
    pdf: "https://www.mediafire.com/file/ugxlmpujsx29s03/Umera+Ahmed+-+Aab+e+Hayat.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1LZonEf-MPBPlvrzi6IDqZSYrtY1NDMIG/view",
  },
  {
    title: "Ishq-e-Yaram",
    author: "Areej Shah",
    description: "محبت کی ایک سنجیدہ کہانی جو دل کو چھو جائے۔",
    image: "/images/ishq-e-yaram.jpg",
    pdf: "https://www.mediafire.com/file/tekbugsvhcdg8s0/Ishq_e_yaram_season_2_by_Areej_shah_Complete.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1TkcuFdr4lhYETMg8cKFaM03cVXALXDw2/view",
  },
  {
    title: "Jannat K Pattay",
    author: "Nimra Ahmed",
    description:
      "ایک سنسنی خیز کہانی، جو محبت، مہم جوئی اور خود دریافت کے گرد گھومتی ہے۔",
    image: "/images/jannat-k-pattay.jpg",
    pdf: "https://www.mediafire.com/file/lxhyw40kblqik2m/Jannat_Ke_Pattay_novel_complete_by_NimraAhmed.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1nHC5-qSqao13hQ-89K-nDrzD-1MwywEq/view",
  },
  {
    title: "Haalim",
    author: "Nimra Ahmed",
    description:
      "ایک خاص کہانی جو انسان کی زندگی کے مختلف پہلوؤں کو اجاگر کرتی ہے۔",
    image: "/images/haalim.jpg",
    pdf: "https://www.mediafire.com/file/oqi2cwh4mbd2o6x/Haalim_novel.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1NX2J-tiAhNg6wcCwtnQnNlChlEkpXhnV/view",
  },
  {
    title: "Mansahaf",
    author: "Nimra Ahmed",
    description: "کہانیوں کی دنیا میں گم ہونے کا موقع فراہم کرتا ہے۔",
    image: "/images/mansahaf.jpg",
    pdf: "https://www.mediafire.com/file/5hc1zhmgp6r2i5v/Mushaf_Novel_By_Nimra_Ahmad.pdf/file",
    onlineRead:
      "https://drive.google.com/file/d/1eH_qGUivzntBTa6PUzKyuA9MLuUm0nEq/view",
  },
  {
    title: "Amar Bail",
    author: "Umera Ahmed",
    description: "ایک دلچسپ کہانی جو زندگی کی حقیقی حقیقتوں کو بیان کرتی ہے۔",
    image: "/images/amar-bail.jpg",
    pdf: "https://www.mediafire.com/file/kbwueh3pf63tzqo/Amarbail_By_Umera_Ahmed.pdf/file",
    onlineRead: "https://drive.google.com/file/d/1YkDa0JbJsiRgUryNQALSiuXGjpHX1a6P/view",
  },
  {
    title: "Mano Salwa",
    author: "Umera Ahmed",
    description: "محبت اور قربانی کی ایک لازوال داستان۔",
    image: "/images/mano-salwa.jpg",
    pdf: "https://www.mediafire.com/file/6cuqtr2wm26epyb/Man_o_salwa_novel_by_Umera_Ahmed.pdf/file",
    onlineRead: "https://drive.google.com/file/d/1dmVAUTGhz9lrG506NqB_R8oIIgJD9ZoU/view",
  },
  {
    title: "Ishq-e-Atish",
    author: "Sadia Rajpoot",
    description: "دل کو چھو لینے والی محبت کی کہانی۔",
    image: "/images/ishq-e-atish.jpg",
    pdf: "https://www.mediafire.com/file/a8q3juzy886v54u/Ishq-e-Atish-by-Sadia-Rajpoot.pdf/file",
    onlineRead: "https://drive.google.com/file/d/1SrPjX8bRied-E2XQiBkqluvgPYvFhi6G/view",
  },
  {
    title: "Yaram",
    author: "Sumaira Hameed",
    description: "ایک دلچسپ کہانی جو محبت کے رنگین پہلوؤں کو اجاگر کرتی ہے۔",
    image: "/images/yaram.jpg",
    pdf: "https://www.mediafire.com/file/t2x2rlkt93wo28o/Yaaram_novel_by_Sumaira_Hameed.pdf/file",
    onlineRead: "https://drive.google.com/file/d/1XM7Y9xyc9xtA_WIQCxja0RhowgDsgbkG/view",
  },
  {
    title: "Kun Faya Kun",
    author: "Qaisra Hayat",
    description: "خود کو تلاش کرنے کی ایک خوبصورت کہانی۔",
    image: "/images/kun-faya-kun.jpg",
    pdf: "https://www.scribd.com/document/741343116/Kun-Faya-Kun-by-Amna-Gul-Www-urdunovelbank-com",
    onlineRead: "https://www.scribd.com/document/741343116/Kun-Faya-Kun-by-Amna-Gul-Www-urdunovelbank-com",
  },
  {
    title: "Hum Kahan Ke Sachy Thay",
    author: "Umera Ahmed",
    description: "سچائی اور حقیقت کے سفر پر مبنی ایک سنجیدہ کہانی۔",
    image: "/images/hum-kahan-ke-sachy-thay.jpg",
    pdf: "https://www.mediafire.com/file/jrz81tldw4i9ez0/Hum_Kahan_Ke_Sachay_Thay_Novel_by_Umera_Ahmed.pdf/file",
    onlineRead: "https://drive.google.com/file/d/1ojcph7bYBqTGk0x47Jsu2WnEkZYSXi8B/view",
  },
];

const Novels = () => {
  return (
    <div>
      <main className="novels-container">
        <h1>
          Novels
        </h1>
        <div className="novels-div">
          {novelsData.map((novel, index) => (
            <NovelCard key={index} {...novel} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Novels;
