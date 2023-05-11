# About Delugian

With the exciting news that Synthstrom Audible will be open sourcing the firmware for the Deluge, I have created a repository for what will be a cross-platform companion app for the Deluge, a la Overbridge for Elektron devices.

I've chosen to use Tauri.app for this project since it has a lot of capabilities baked in i.e. (auto-updater, app storage, cross-platform etc.) and is built on dev-friendly languages like Rust and Typescript. I've also chosen React as the UI framework. I think this stack will allow a community of developers to quickly and efficiently build a beautiful, capable, and stable companion app for our beloved groovebox. Something akin to Downrush by Jamie Fenton but without the requirement for a FlashAir SD card as this app will work over USB. Obviously, this will require an API within the Deluge firmware to hook on to but this project's specific aim is to provide a GUI for managing and creating with your Deluge.

# Development

To begin working on Deluge, follow these commands.

    git clone git@github.com:alifeinbinary/Delugian.git

    cd Delugian

## Install dependencies

    yarn

## Build and monitor

    yarn tauri dev

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
