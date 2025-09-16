import localFont from "next/font/local";

export const helveticaNow = localFont({
    src: [
        {
            path: "../../public/fonts/helvetica-now/HelveticaNowText-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-now/HelveticaNowText-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-now/HelveticaNowText-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-now/HelveticaNowText-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-now/HelveticaNowText-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-helvetica-now",
    display: "swap",
});
