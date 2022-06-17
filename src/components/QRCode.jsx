import Image from 'next/image'
import { useQRCode } from "../hooks/useQRCode";
import { useDownload } from "../hooks/useDownload";

function QRCodeImage(props) {
  return (
    <Image
      style={{ alignSelf: "center", width: "100%", height: "100%" }}
      alt="QR Code"
      {...props}
    />
  );
}

export function QRCode({ width, height, text }) {
  const { data: qrCode, isLoading } = useQRCode({ text: text || "empty" });
  const { mutateAsync: download } = useDownload();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <QRCodeImage src={qrCode} width={width} height={height} />

      <button
        style={{
          width: '200px',
          height: '40px',
          fontSize: '17px',
        }}
        onClick={() => {
          download({
            src: qrCode,
            filename: "QR Code Image"
          });
        }}
      >
        download
      </button>
    </div>
  );
}
