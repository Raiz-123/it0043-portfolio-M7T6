const STORAGE_KEY = "portfolio-settings";

const DEFAULT_SETTINGS = {
    theme: "light",
    visitorName: "",
    lastVisit: null
};

function loadSettings() {
    try {
        const storedSettings = localStorage.getItem(STORAGE_KEY);

        if (storedSettings === null) {
            return { ...DEFAULT_SETTINGS };
        }

        const parsedSettings = JSON.parse(storedSettings);

        if (
            parsedSettings === null ||
            typeof parsedSettings !== "object" ||
            Array.isArray(parsedSettings)
        ) {
            return { ...DEFAULT_SETTINGS };
        }

        return {
            theme: parsedSettings.theme === "dark" ? "dark" : "light",
            visitorName:
                typeof parsedSettings.visitorName === "string"
                    ? parsedSettings.visitorName
                    : "",
            lastVisit:
                typeof parsedSettings.lastVisit === "string"
                    ? parsedSettings.lastVisit
                    : null
        };

    } catch (error) {
        console.error("Unable to load saved settings:", error);
        return { ...DEFAULT_SETTINGS };
    }
}

function saveSettings(settings) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(settings)
        );

        return true;

    } catch (error) {
        console.error("Unable to save settings:", error);
        return false;
    }
}