# Minimal Reproducible Example Color Issue Dark Mode

This repo contains the code to run an Expo app that shows a button of color gold and a white background.

When launching via `npm start` using Expo App on a Redmi phone the following behaviour shows up depending on the mode of the phone:

- light mode: the colors are shown as expected

  <!-- ![light](./screenshots/light_mode.jpg) -->
  <img src="./screenshots/light_mode.jpg" width="300">

- dark mode: the colors are wrong

  <img src="./screenshots/dark_mode.jpg" width="300">

Even setting `userInterfaceStyle` to "light" does not make the button gold.

Attempts:

- on `pluginsAttempt` branch: modified `app.json` with a plugin that should disable force dark mode on android as outlined in this answer https://stackoverflow.com/a/74239739. It does not work.
