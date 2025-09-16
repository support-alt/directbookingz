import localFont from "next/font/local";

export const outfit = localFont({
    src: [
        {
            path: "../../public/fonts/outfit/static/Outfit-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/outfit/static/Outfit-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/outfit/static/Outfit-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/outfit/static/Outfit-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/outfit/static/Outfit-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/outfit/static/Outfit-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-outfit",
    display: "swap",
});
