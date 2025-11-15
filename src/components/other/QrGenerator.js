"use client"

import Image from "next/image";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function QrGenerator() {
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    useEffect(() => {
        // Fixed Client Data
        const firstName = "Vijay";
        const lastName = "Ramasundaram";
        const company = "Trident Group";
        const title = "CEO";
        const phone = "+61402936482";
        const email = "vijay@tridentgroup.au";
        const website = "https://carrumdownsdental.com.au/";
        const address = "Shop T5, 100 Hall Road, Carrum Downs";

        // vCard Data Generation (corrected format)
        const vCardData =
            `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
ORG:${company}
TITLE:${title}
TEL;TYPE=WORK,VOICE:${phone}
EMAIL:${email}
URL:${website}
ADR;TYPE=WORK:;;${address}
END:VCARD`;

        const generateQRCode = async () => {
            try {
                const url = await QRCode.toDataURL(vCardData);
                setQrCodeUrl(url);
            } catch (err) {
                console.error("Error generating QR Code:", err);
            }
        };
        generateQRCode();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            {qrCodeUrl ? (
                <>
                    <Image src={qrCodeUrl} alt="Business Card QR Code" style={{ width: "250px" }} width={250} height={250} />
                </>
            ) : (
                <p>Generating QR Code...</p>
            )}
        </div>
    );
}