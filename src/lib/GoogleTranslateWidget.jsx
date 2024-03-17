import { useEffect } from "react";

const GoogleTranslateWidget = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = googleTranslateElementInit;

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslateWidget;
