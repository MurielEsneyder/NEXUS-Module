// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    name: "local",
    origin: "HyL-Sparta-V2",
    production: false,


    auth: 'https://cortana.asmetsalud.com/auth/login',
    services: 'https://cortana.asmetsalud.com/api',
    menu: 'https://cortana.asmetsalud.com/api/menu/ejecutarMenus'

    // auth: 'http://localhost:8081/services/auth',
    // services: 'http://localhost:8081/services/request',
    // menu: 'http://localhost:8081/services/menu'

    // auth : 'https://lannister.asmetsalud.org.co:8443/services_c1/auth',
    // services : 'https://lannister.asmetsalud.org.co:8443/services_c1/request',
    // menu: 'https://lannister.asmetsalud.org.co:8443/services_c1/menu',
    // embebido_HylEps:'http://127.0.0.1:7101/ASEGURAMIENTO/faces/autorizacion/solicitudservicio/stsSolicitudServicio/stsSolicitudServicio.jsf'
};
