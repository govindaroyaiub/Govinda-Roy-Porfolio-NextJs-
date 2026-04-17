import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark" lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
          <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
          <script
            id="tailwind-config"
            dangerouslySetInnerHTML={{
              __html: `tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#00e3fd",
        tertiary: "#70aaff",
        primary: "#81ecff",
        "tertiary-dim": "#5c9ffc",
        "secondary-fixed": "#78dfff",
        "surface-container": "#171a1f",
        "primary-dim": "#00d4ec",
        "on-primary": "#005762",
        "on-secondary": "#004554",
        surface: "#0c0e12",
        "error-container": "#9f0519",
        "on-tertiary-container": "#001d3f",
        "tertiary-container": "#599cf9",
        "on-secondary-fixed": "#003a47",
        "tertiary-fixed-dim": "#65a4ff",
        "on-tertiary-fixed-variant": "#003971",
        "primary-fixed": "#00e3fd",
        "on-surface": "#f6f6fc",
        "on-primary-fixed-variant": "#005762",
        "on-primary-fixed": "#003840",
        outline: "#74757a",
        "secondary-container": "#00677d",
        "surface-bright": "#292c32",
        "surface-dim": "#0c0e12",
        "inverse-surface": "#f9f9ff",
        "secondary-fixed-dim": "#10d5ff",
        secondary: "#10d5ff",
        "on-tertiary-fixed": "#001835",
        "error-dim": "#d7383b",
        "inverse-primary": "#006976",
        "surface-variant": "#23262c",
        "inverse-on-surface": "#53555a",
        "on-error-container": "#ffa8a3",
        "on-tertiary": "#002a55",
        background: "#0c0e12",
        "on-background": "#f6f6fc",
        "surface-tint": "#81ecff",
        "outline-variant": "#46484d",
        "surface-container-low": "#111318",
        "tertiary-fixed": "#80b2ff",
        "on-surface-variant": "#aaabb0",
        "surface-container-high": "#1d2025",
        "secondary-dim": "#00c6ee",
        "surface-container-highest": "#23262c",
        error: "#ff716c",
        "primary-fixed-dim": "#00d4ec",
        "on-secondary-fixed-variant": "#00586b",
        "surface-container-lowest": "#000000",
        "on-primary-container": "#004d57",
        "on-error": "#490006",
        "on-secondary-container": "#edfaff"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Space Grotesk"],
        body: ["Inter"],
        label: ["Inter"]
      }
    }
  }
};`,
            }}
          />
        </Head>
        <body className="selection:bg-primary-container selection:text-on-primary-container">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
