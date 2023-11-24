# Minimal Reproducible Example Color Issue Dark Mode

This repo contains the code to run an Expo app that shows a button of color gold and a white background.

When launching via 'npm start' using Expo App on a Redmi phone the following behaviour shows up depending on the mode of the phone:

- light mode: the colors are shown as expected

  <!-- ![light](./screenshots/light_mode.jpg) -->
  <img src="./screenshots/light_mode.jpg" width="300">

- dark mode: the colors are wrong

  <img src="./screenshots/dark_mode.jpg" width="300">

Even forcing the app only to userInterfaceStyle to light does not make the button gold.
