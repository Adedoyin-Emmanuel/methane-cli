# Methane 🚀

<div style="display: flex; justify-content: start;">
 <a href="https://wakatime.com/badge/github/Adedoyin-Emmanuel/methane-cli"><img src="https://wakatime.com/badge/github/Adedoyin-Emmanuel/methane-cli.svg" alt="wakatime"></a>

<a href="https://github.com/adedoyin-emmanuel/methane-cli/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/adedoyin-emmanuel/methane-cli.svg?style=social"></a>
<a href="https://github.com/adedoyin-emmanuel/fotograph/network/members"><img alt="GitHub forks" src="https://img.shields.io/github/forks/adedoyin-emmanuel/methane-cli.svg?style=social"></a>
<a href="https://www.npmjs.com/package/methane-cli"><img alt="GitHub downloads" src="https://img.shields.io/npm/dt/methane-cli.svg"></a>

</div>

Methane is a **CLI** tool that helps developers easily create **React components, pages or NextJS components, pages, dynamic pages and service worker files** with boilerplate codes. It also comes with extra configration that allows you choose either **JavaScript** or **TypeScript** templates.

## What's New ❓

The latest patch version 1.4.4 introduces a crucial fix that enhances the naming conventions for generated components and Next.js pages. This update ensures that hyphenated names are correctly capitalized, providing a more consistent and readable codebase.

**Component Capitalization Fix:**

When generating components with hyphenated names, **Methane** will now correctly capitalize each segment of the name. For instance, creating a component named `animated-button` will result in a component named `AnimatedButton`. This ensures that components follow standard **PascalCase** naming conventions, enhancing code readability and consistency.

**Next.js Page Capitalization Fix:**

Similarly, generating Next.js pages with hyphenated names will now produce correctly capitalized page names. For example, a page named 2fa-auth will be created as 2FaAuth, user-appointments as UserAppointments, and privacy-policy as PrivacyPolicy. This fix ensures that page names are intuitive and follow common naming practices.
**Please Note:** Your nextJs page route will not be affected by this change. This change only affects the name of the generated page or component.

## Installation 💿

To install **Methane-Cli**, run the following command. Note you've to install it as a global package.
**Note** You've to init methane before using it in your project.

```bash
npm install -g methane-cli
```

```bash
bun install -g methane-cli
```

```bash
yarn add -g methane-cli
```

## Usage 🚦

To use **methane** or **rg**, simply run the command

```bash
methane
rg

```

This would show a welcome message with information about the tool. Then you need to run the init command. This would help you to configure methane to your taste 😛.

```bash

methane init

```

This would prompt you to answer some questions and a config file will be created. Note you can't use **Methane** if you don't have the config file.

Optionally, you can also add the `-d` or `--default` argument to skip the prompt and use the default configuration.

```bash
methane init --default
```

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
mac@Macs-MBP~/D/react-app$ methane c --template tsx

```

_jsx or tsx are the only options available_

#### Change Component Generation Style

To change the component generation style, run the following command.

```bash
mac@Macs-MBP~/D/react-app$ methane config -c arrow

```

_arrow or functional are the only options available_

#### Change Page Generation Style

To change the page generation style, run the following command

```bash
mac@Macs-MBP~/D/react-app$ methane config -p arrow

```

_arrow or functional are the only options available_

#### Generate Stylesheet

To generate stylesheet file for components and pages, run the following command

```bash
mac@Macs-MBP~/D/react-app$ methane config -gs true

```

_true or false are the only options available_

#### Generate Folder

To generate a folder for components and pages, run the following command

```bash
mac@Macs-MBP~/D/react-app$ methane config -gf true

```

_true or false are the only options available_

#### Register Generated Pages

To register the generated pages in your **App.js or App.jsx or App.tsx or App.ts** file, run the following command. This is strictly or **React** and not **NextJS**

```bash
mac@Macs-MBP~/D/react-app$ methane config -r true

```

_true or false are the only options available_

#### Stylesheet Type

To change the stylesheet type for your components and pages, run the following command.

```bash
mac@Macs-MBP~/D/react-app$ methane config -st css

```

_css or scss are the only options available_

## Create a Component ⏭

With the new update, you can generate **React** or **NextJS** server or client components. Intresting right 😄. But the commands are different.

### Generating A React Component

```bash
mac@Macs-MBP~/D/react-app$ methane g -c componentName

```

### Generating A NextJS Component

```bash
mac@Macs-MBP~/D/react-app$ methane g -nc componentName

```

**Optionally, you can specify your nextJs component to be a server or client component** To do this, Simply add the **ct** flag, then you can specify server or client omitting the **ct** would generate a client component by default.

The convention is that you've a component or components directory in your application. **Methane** would find that directory and then place your component in it.

#### Note

\_You don't have to be in your react-app components folder. You can run the command from the root folder of your react-application and that's infact how

## Create a Page ⏭

With the new update, you can generate **React** or **NextJS** server or client pages.

### Generating A React Page

```bash
mac@Macs-MBP~/D/react-app$ methane g -p pageName

```

This would create a new page according to the global configuration and add the pages to the components pages in your react-app application. By default, a page generated comes with a **useNavigate()** hook and the **Link** tag.

### Generating A NextJS Page

```bash
mac@Macs-MBP~/D/react-app$ methane g -np pageName

```

This would generate a new page according to the configuration in your _/methane/methane.json_ file. Methane would check for your project structure and then create a new page in according to your project structure. By default a generated NextJS page comes with a useRouter and usePathname hook for navigation and also a **Rafce** component template.

**Optionally, you can specify your nextJs page to be a server or client page** To do this, Simply add the **ct** flag, then you can specify server or client omitting the **ct** would generate a client page by default.

```bash
mac@Macs-MBP~/D/react-app$ methane g -np pageName -ct server

```

### Generating A Dynamic NextJS Page

As you already know, in **NextJS** dynamic pages are pages whose content is determined by parameters included in the URL. For example _/product/1_ is a dynamic URL. Now Methane can also help you create dynamic pages. Usually, a dynamic page would be nested within a page. For example, I've a products page already _/products_, my dynamic page would most likely be productId. So using Methane, you can generate a dynamic page using the command below

```bash
mac@Macs-MBP~/D/react-app$ methane g -nid productId -sp /products

```

##### Command Arguments

1. **-nid** -nid (Next Dynamic Page Id) is the dynamic page name, which in this case is _productId_
2. **-sp** -sp is an optional parameter called (Start Page) which is indicates the folder to place the dynamic page in. You don't need to specify the default nextJS _/app_ when specifying the folder to place the dynamic page.

**Optionally, you can specify your nextJs page to be a server or client page** To do this, Simply add the **ct** flag, then you can specify server or client omitting the **ct** would generate a client page by default.

```bash
mac@Macs-MBP~/D/react-app$ methane g -ndp productId -sp /products -ct server

```

You can also nest different directory structure. for example, if you've a _/products_ directory and then you've a dynamic page called _/products/[productId]/_ you can still add a page like _/products/[productId]/edit_ or even _/products/[productId]/sub/[subId]/edit_. The choice is yours. With this awesome command, you would never have to manually create a new page.

## Configurations ⚙️

Added a new command **`list-config [ls]`**

- `--list-config` or `-lc`: Lists all Methane configurations.

````bash
mac@Macs-MBP~/D/react-app$ methane list-config

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


```bash
mac@Macs-MBP~/D/react-app$ methane g -sw

````

## Create a Service Worker ⏭

This would create a service worker and add the service worker to the [index.js, main.js, index.jsx, main.jsx] or tsx respectively.

You can now register the service worker by adding

```javascript
serviceWorkerRegistration.register();
```

#### Note

_You don't have specify any name for the service-worker_

## Stuck :(

If you are stuck or you want to learn more about the different configurations, run the following command.

```bash
mac@Macs-MBP~/D/react-app$ methane c --help

```

### Architecture 🛠

`methane-cli` uses a `modular` architecture.It consists of different modules that perform specific tasks such as generating components, pages, and service worker files.

## Contributing ❤️

If you'd like to contribute to **Methane**, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push your changes to your fork
5. Create a pull request :)

Please star this repo if you find it useful. Also share the good news with your community.

## License 🧐

**Methane-Cli** is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contibutors 👨‍

<a href="https://github.com/adedoyin-emmanuel"> <img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82YjdmNjY1YjY5NzNlMTA5MDY5NWYxNGQ5ZTFjN2FlMT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.VLsXZqAcYRo73KaG7EmkZtMv67-fHx-8x4Fo_nXv_b4"  style="border-radius:50%" width="30" height="30"/>
</a>
