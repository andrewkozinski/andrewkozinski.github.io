//This function sets the page title. Takes in a string to do so
export const setTitle = (title: string) => {
    document.title = title;
}
// This function sets the favicon. Takes in a string to do so
// The string should be a URL to the image.
export const setFavicon = (iconUrl: string) => {
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = iconUrl;
}