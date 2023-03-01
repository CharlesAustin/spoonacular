# Recipe App

This app uses the Spoonacular API to retrieve recipe data. Users can search for specific recipes, filter by cuisine and view details about a particular recipe.

## General Notes

-   You may need your own API key as this API is rate limited and won't work once the daily limit has been reached.
-   Number of results per query is set at a maximum of 20 to keep rate consumption down.
-   An Api key can be set by creating an `env` file and assigning the API key value to `VITE_API_KEY`.
-   Alternatively you replace `VITE_API_KEY` directly in the Search component.

### Setup and configuration

-   `yarn install`
-   Using Vite, start the project for development like so:
    `vite`
-   Build the app for production with:
    `vite build`

### Built with

-   Vite
-   React
