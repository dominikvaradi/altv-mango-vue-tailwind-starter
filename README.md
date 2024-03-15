# alt:V Mango Framework boilerplate with Vue.js and TailwindCSS

The project is a boilerplate for alt:V Mango Framework with Vue.js and TailwindCSS.
Mango Framework is a server-side framework for alt:V, which is a multiplayer modification for Grand Theft Auto V.
Check out the [alt:V](https://altv.mp/) and [Mango Framework](https://altv-mango.vercel.app/) documentations for more information.

The project utilizes the monorepo concept by [Turborepo](https://turbo.build/)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [alt:V JS Module v2](https://github.com/altmp/altv-js-module-v2)
- [Mango Framework](https://altv-mango.vercel.app/)
- [vue.js](https://vuejs.org/)
- [tailwindcss](https://tailwindcss.com/)

The project is using [pnpm](https://pnpm.io/) as a package manager, but you can use other package managers, you'll need to update the `package.json` file accordingly.

## Features

- Power of Mango Framework
- Power of Vue.js
- Power of TailwindCSS
- Hot Module Replacement (HMR)

## Installation

1. Clone the repository: `git clone https://github.com/dominikvaradi/altv-mango-vue-tailwind-starter.git`
2. Install the dependencies: `pnpm install`
3. Download latest alt:V files (based on development branch): `pnpm run update-altv`
4. Build the project: `pnpm run build`
5. Start the production server: `pnpm run start`

## Development mode

You can start the development server with the following command: `pnpm run dev`
This will start the development server with hot module replacement (HMR).

You can enable or disable player reconnection on core module restart by setting the `RECONNECT_PLAYERS_ON_CORE_MODULE_RESTART` environment variable to `true` or `false` running the `pnpm run dev` script.

To enable player reconnection on core module restart by default, you can run the following command: `pnpm run dev:reconnect-players-true`
