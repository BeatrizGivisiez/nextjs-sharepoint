import dynamic from 'next/dynamic';

const CancelarEmailPage = dynamic(
  () => import("@/modules/cancelar-email").then((mod) => mod.CancelarEmailPage),
  { ssr: false }
);

export default function SubscribeEmail() {
  return <CancelarEmailPage />;
}
