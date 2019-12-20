import './src/styles/App.scss';
import App from './src/components/App.svelte';

window.app = new App({
  target: document.getElementsByTagName('app')[0]
});