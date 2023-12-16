# Methane 🚀

<div style="display: flex; justify-content: start;">
 <a href="https://wakatime.com/badge/github/Adedoyin-Emmanuel/methane-cli"><img src="https://wakatime.com/badge/github/Adedoyin-Emmanuel/methane-cli.svg" alt="wakatime"></a>

<a href="https://github.com/adedoyin-emmanuel/methane-cli/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/adedoyin-emmanuel/methane-cli.svg?style=social"></a>
<a href="https://github.com/adedoyin-emmanuel/fotograph/network/members"><img alt="GitHub forks" src="https://img.shields.io/github/forks/adedoyin-emmanuel/methane-cli.svg?style=social"></a>
<a href="https://www.npmjs.com/package/methane-cli"><img alt="GitHub downloads" src="https://img.shields.io/npm/dt/methane-cli.svg"></a>

</div>

Methane is a **CLI** tool that helps developers easily create **React components, pages or NextJS components, pages, dynamic pages and service worker files** with boilerplate codes. It also comes with extra configration that allows you choose either **JavaScript** or **TypeScript** templates.

<p align="center">
  <img src="./assets/MethaneLogo.png" alt="Methane Logo" style="max-width: 100%; width: 100%; height:40%;">
</p>

## What's New ❓

The new major version **2.0.0** comes with support for **NextJS**. This is a game changer for NextJs developers, with **Methane** you can easily generate your components from the command line and bingo 🚀

1. Support for **NextJS**
2. Migrated codebase from **JS** to **TS**
3. Cleaner CLI Interface
4. Customize your project based on your local configuration.

## Installation 💿

To install **Methane-Cli**, run the following command. Note you've to install it as a global package.
**Note** You've to init methane before using it in your project.

```bash
# npm
npm install -g methane-cli

```

## Usage 🚦

To use **methane** or **rg**, simply run the command

```bash
methane
rg

```

This would show a welcome message with information about the tool. Then you need to run the init command. This would help you to configure methane to your taste. 😛

```bash

methane init

```

This would prompt you to answer some questions and a config file will be created. Note you can't use **Methane** if you don't have the config file.

## Commands

The following commands are available in **methane-cli**

- **`--help` or `-h`**: Displays a list of available commands.
- **`--version` or `-v`**: Displays the version of methane-cli.
- **`--generate` or `-g`**: Generates Components, Pages or Service Worker files.
- **`--config` or `-c`**: Configures the CLI tool to your taste.
- **`--init` or `-i`**: Initializes default configuration files in root directory.
- **`--list-config` or `-lc`**: Lists all Methane-Cli configurations.

To run a command, simply add it at the end of **methane** or **rg** for example,

## Configurations 🔥

By default, when you run **methane init** you would be prompted to select some configurations. If you would love to change the configurations at some point, You can follow this format.

```json
{
  "template": "jsx",
  "component": "arrow",
  "page": "arrow",
  "generateStylesheet": "true",
  "generateFolder": "true",
  "register": "true",
  "stylesheetType": "css"
}
```

To change the configurations, run the following command.

#### Change Template

To change the template to **tsx** run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane c --template tsx

```

_jsx or tsx are the only options available_

#### Change Component Generation Style

To change the component generation style, run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane config -c arrow

```

_arrow or functional are the only options available_

#### Change Page Generation Style

To change the page generation style, run the following command

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane config -p arrow

```

_arrow or functional are the only options available_

#### Generate Stylesheet

To generate stylesheet file for components and pages, run the following command

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane config -gs true

```

_true or false are the only options available_

#### Generate Folder

To generate a folder for components and pages, run the following command

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane config -gf true

```

_true or false are the only options available_

#### Register Generated Pages

To register the generated pages in your **App.js or App.jsx or App.tsx or App.ts** file, run the following command. This is strictly or **React** and not **NextJS**

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane config -r true

```

_true or false are the only options available_

#### Stylesheet Type

To change the stylesheet type for your components and pages, run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane config -st css

```

_css or scss are the only options available_

## Stuck :(

If you are stuck or you want to learn more about the different configurations, run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane c --help

```

## Create a Component ⏭

With the new update, you can generate **React** or **NextJS** server or client components. Intresting right 😄. But the commands are different.

### Generating A React Component

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane g -c componentName

```

### Generating A NextJS Component

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane g -nc componentName

```

**Optionally, you can specify your nextJs component to be a server or client component** To do this, Simply add the **ct** flag, then you can specify server or client omitting the **ct** would generate a client component by default.

The convention is that you've a component or components directory in your application. **Methane** would find that directory and then place your component in it.

#### Note

\_You don't have to be in your react-app components folder. You can run the command from the root folder of your react-application and that's infact how

## Create a Page ⏭

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane g -c componentName

```

This would create a new page according to the global configuration and add the pages to the components pages in your react-app application. By default, a page generated comes with a **useNavigate()** hook and the **Link** tag.

#### Note

_You don't have to be in your react-app pages folder. you can run the command from the root folder of your react-application_
Also, if you configure **methane-cli** to automatically import your pages, it would add the page once it is generated.

## Configurations ⚙️

Added a new command **`list-config [ls]`**

- `--list-config` or `-lc`: Lists all Methane configurations.

````bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane list-config

All configurations
{
  template: 'jsx',
  component: 'arrow',
  page: 'arrow',
  generateStylesheet: 'true',
  generateFolder: 'true',
  register: 'true',
  stylesheetType: 'css'
}

## Create a Service Worker ⏭.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane g -sw

````

This would create a service worker and add the service worker to the [index.js, main.js, index.jsx, main.jsx] or tsx respectively.

You can now register the service worker by adding

```javascript
serviceWorkerRegistration.register();
```

#### Note

_You don't have specify any name for the service-worker_

### Architecture 🛠

`methane-cli` uses a `modular` architecture.It consists of different modules that perform specific tasks such as generating components, pages, and service worker files.

## Contributing ❤️

If you'd like to contribute to **methane**, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push your changes to your fork
5. Create a pull request :)

## License 🧐

**methane-cli** is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contibutors 👨‍

<img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82YjdmNjY1YjY5NzNlMTA5MDY5NWYxNGQ5ZTFjN2FlMT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.VLsXZqAcYRo73KaG7EmkZtMv67-fHx-8x4Fo_nXv_b4" />
<a target="_blank" href="https:adedoyin-emmanuel.netlify.app">Adedoyin Emmanuel Adeniyi</a>
