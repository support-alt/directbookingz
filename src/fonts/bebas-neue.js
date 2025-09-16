import localFont from "next/font/local";

export const bebasNeue = localFont({
    src: [
        {
            path: "../../public/fonts/bebas-neue/BebasNeue-Regular.ttf",
            weight: "400",
            style: "normal",
        }
    ],
    variable: "--font-bebas-neue",
    display: "swap",
});
