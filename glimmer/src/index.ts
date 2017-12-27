import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';

import './utils/tags/Systems'
import './utils/tags/Republic'
import './utils/tiles/DefaultTiles'

const app = new App();
const containerElement = document.getElementById('app');

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager);
  }
});

app.renderComponent('xsg-app', containerElement, null);

app.boot();
