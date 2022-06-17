import { useQuery } from "react-query";
import QRCode from "qrcode";

export function useQRCode({
  text
}) {
  return useQuery(["qrcode", text], () => {
    return QRCode.toDataURL(text, {
      errorCorrectionLevel: "H",
      type: "image/jpeg"
    });
  });
}