import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route("buttons");
  this.route("colors");
  docsRoute(this, function() {
    /* Your docs routes go here */
    this.route('components', function() {
      this.route('buttons');
      this.route('alertBox');
      this.route('checkBox');
      this.route('detailsBlock');
      this.route('emptyList');
      this.route('freeformLineItem');
      this.route('loadingStatePlaceholder');
      this.route('navTabs');
      this.route('progressBar');
      this.route('quantityInputModal');
      this.route('scannerIncrementModal');
      this.route('siteHeader');
      this.route('statusTag');
      this.route('summeryLineItem');
    });
  });
  this.route('not-found', { path: '/*path' });
});

export default Router;
