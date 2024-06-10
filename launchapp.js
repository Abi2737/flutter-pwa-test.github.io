import { getSheetTemplate as getInstallSheetTemplate } from './installsheet.js';

const installButton = document.querySelector('#install-button');
const installDialog = document.querySelector('#install-dialog');
const closeButton = document.querySelector('#close-install-dialog');
const backButton = document.querySelector('#back-button');
const forwardButton = document.querySelector('#forward-button');
const screenShots = document.querySelector('#install-dialog .screenshots');
const scrollDiv = screenShots.querySelector('#install-dialog .screenshots .scroll-div');
const innerDiv = scrollDiv.querySelector('div');
let curPos;

const supportsInstallPrompt = 'onbeforeinstallprompt' in window;

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});

if (!supportsInstallPrompt) {
    const template = getInstallSheetTemplate();

    if (!installDialog.querySelector('.body')) {
        screenShots.insertAdjacentHTML('beforebegin', template);
    }
}

installDialog.addEventListener('transitionend', (e) => {
    if (!installDialog.hasAttribute('opened')) {
        installDialog.close();
    }
});

closeButton.addEventListener('click', e => {
    installDialog.removeAttribute('opened');
});

backButton.addEventListener('click', e => {
    curPos = Math.max(scrollDiv.scrollLeft - 276, 0);
    scrollDiv.scrollTo({ left: curPos, behavior: 'smooth' });
});

forwardButton.addEventListener('click', e => {
    curPos = Math.min(scrollDiv.scrollLeft + 276, 552);
    scrollDiv.scrollTo({ left: curPos, behavior: 'smooth' });
});

export function promptInstall() {
    // deferredPrompt.prompt();

    if (window.deferredPrompt) {
        //window.deferredPrompt.prompt();
        deferredPrompt.prompt();
    }
    else if (!supportsInstallPrompt) {
        curPos = 0;
        scrollDiv.scrollLeft = 0;
        installDialog.showModal();
        installDialog.querySelector('.body').scrollTop = 0;

        setTimeout(() => {
            installDialog.setAttribute('opened', '');
        })
    }
}

// Track how PWA was launched (either from browser or as PWA)
export function getLaunchMode() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (deferredPrompt) hasPrompt();
    if (document.referrer.startsWith('android-app://')) {
        appLaunchedAsTWA();
    } else if (navigator.standalone || isStandalone) {
        appLaunchedAsPWA();
    } else {
        window.appLaunchedInBrowser();
    }
}

// Listen for app install event
window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    appInstalled();
});