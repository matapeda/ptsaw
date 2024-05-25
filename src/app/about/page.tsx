import Image from "next/image";
import Container from "../ui/Container";

export default function page() {
  return (
    <>
      <div
        className="hero h-60 sm:h-96"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl sm:text-6xl font-bold">Who We Are?</h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="mt-24 grid grid-cols-1 gap-3 my-16 lg:grid-cols-2 lg:gap-4">
          <div className="space-y-4">
            <h3 className="mb-4 text-lg sm:text-3xl font-bold text-center sm:text-left">
              TENTANG KAMI
            </h3>
            <p className="mb-2 sm:text-sm lg:text-base text-center sm:text-left">
              Bergerak di bidang jasa arsitek dan konstruksi, kami selalu
              berkomitmen memberikan pelayanan terbaik dalam mewujudkan sebuah
              bangunan yang ideal. Dengan didukung manajerial owner berlatar
              belakang teknik sipil, segala kegiatan CV Kontraktor dilakukan
              secara profesional dan sesuai prosedur dalam merancang, membangun,
              hingga merenovasi suatu konstruksi. <br />
              <br />
              Jangkauan layanan kami meliputi survei lokasi, desain arsitektur
              2D & 3D, perencanaan anggaran biaya pembangunan (RAB), dan tahap
              realisasi pembangunan. Dalam perencanaan pembangunan, kami akan
              menyesuaikan dengan anggaran biaya yang Anda miliki dan kebutuhan
              yang Anda inginkan. Proses realisasi pembangunan dilakukan oleh
              tenaga profesional dan ahli di bidangnya.
            </p>
          </div>
          <div className="">
            <Image
              className="shadow-lg shadow-slate-500"
              src="https://source.unsplash.com/400x400/?building"
              alt="misi"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* visi dan misi */}
        <div className="my-24 space-y-4">
          <div className="card shadow-xl border">
            <div className="card-body">
              <h3 className="card-title">VISI</h3>
              <p>
                Menghasilkan karya desain bangunan modern yang menarik, dengan
                mempertimbangkan aspek Biaya, Mutu, dan Waktu pelaksanaan
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card shadow-xl border">
            <div className="card-body">
              <h3 className="card-title">MISI</h3>
              <ol className="list-decimal list-inside">
                <li>
                  Menciptakan desain bangunan modern dengan menyesuaikan
                  kebutuhan setiap klien.
                </li>
                <li>
                  Memberikan biaya konstruksi yang bersaing, namun kualitas
                  tetap terjaga.
                </li>
                <li>
                  Memberikan ide & solusi terbaik untuk menghasilkan output
                  sesuai dengan apa yang diharapkan.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
