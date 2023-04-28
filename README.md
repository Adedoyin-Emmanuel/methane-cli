# Methane-Cli

Methane-Cli is a CLI tool that helps developers easily create **React Components, Pages and Service Worker Files**. The CLI tool provides tons of powerful configurations for creating **React Components, Pages and Service Worker Files**

![Methane-**Cli**](/assets/screenshots/screenshot-1.png)

## Installation 💿

To install **Methane-Cli**, run the following command.

```bash
# npm
npm install -g methane-cli

# yarn
yarn add global methane-cli
```

## Usage 🚦

To use **Methane-Cli** or **rg**, simply run the command

```bash
methane-cli
rg
```

This would show a welcome message with information about the tool.

## Commands

The following commands are available in **methane-cli**

- `--help` or `-h`: Displays a list of available commands.
- `--version` or `-v`: Displays the version of methane-cli.
- `--generate` or `-g`: Generates Components, Pages or Service Worker files.
- `--config` or `-c`: Configures the CLI tool to your taste.
- `--init` or `-i`: Initializes default configuration files in root directory.

#### Note:

_Use the `init` command to configure **methane-cli** if you run into any error_

To run a command, simply add it at the end of **methane-cli** or **rg** for example,

## Configurations 🔥.

To enjoy **methane-cli** you can configure the tool to your taste. Here are some default configuration.

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
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli c --template tsx

```

_jsx or tsx are the only options available_

#### Change Component Generation Style

To change the component generation style, run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli config -c arrow

```

_arrow or functional are the only options available_

#### Change Page Generation Style

To change the page generation style, run the following command

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli config -p arrow

```

_arrow or functional are the only options available_

#### Generate Stylesheet

To generate stylesheet file for components and pages, run the following command

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli config -gs true

```

_true or false are the only options available_

#### Generate Folder

To generate a folder for components and pages, run the following command

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli config -gf true

```

_true or false are the only options available_

#### Register Generated Pages

To register the generated pages in your **App.js or App.jsx or App.tsx or App.ts** file, run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli config -r true

```

_true or false are the only options available_

#### Stylesheet Type

To change the stylesheet type for your components and pages, run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli config -st css

```

_css or scss are the only options available_

## Stuck :(

If you are stuck or you want to learn more about the different configurations, run the following command.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli c --help

```

## Create a Component ⏭.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli g -c componentName

```

This would create a new component according to the global configuration and add the component to the components folder in your react-app application.

#### Note:

_You don't have to be in your react-app components folder. you can run the command from the root folder of your react-application_

## Create a Page ⏭.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli g -c componentName

```

This would create a new page according to the global configuration and add the pages to the components pages in your react-app application. By default, a page generated comes with a **useNavigate()** hook and the **Link** tag.

#### Note:

_You don't have to be in your react-app pages folder. you can run the command from the root folder of your react-application_
Also, if you configure **methane-cli** to automatically import your pages, it would add the page once it is generated.

## Create a Service Worker ⏭.

```bash
doyin@doyinHpLaptop:~/Desktop/react-app$ methane-cli g -sw

```

This would create a service worker and add the service worker to the [index.js, main.js, index.jsx, main.jsx] or tsx respectively.

You can now register the service worker by adding

```javascript
serviceWorkerRegistration.register();
```

#### Note:

_You don't have specify any name for the service-worker_

### Architecture 🛠

`methane-cli` uses a `modular` architecture.It consists of different modules that perform specific tasks such as generating components, pages, and service worker files.

## Contributing ❤️

If you'd like to contribute to **methane-cli**, please follow these steps:

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
