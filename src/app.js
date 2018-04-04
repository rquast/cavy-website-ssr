import {PLATFORM} from 'aurelia-pal';
import '../cavy.css';
import {TransformerStep} from './transformer-step';
import Routes from './routes';

export class App {

  scrollAtTop = true;
  lastScrollPosition = 0;
  ticking = false;

  attached() {
    this.checkScroll();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.lastScrollPosition = window.scrollY;
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.checkScroll();
            this.ticking = false;
          });
          this.ticking = true;
        }
      });
    }
  }

  claim() {
    this.router.navigateToRoute('claim');
  }

  checkScroll() {
    if (typeof window !== 'undefined') {
      this.scrollAtTop = window.scrollY < 50;
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      if (typeof window !== 'undefined' && window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }
  }

  configureRouter(config, router) {
    config.title = 'Get Cavy';
    config.options.pushState = true;
    config.options.root = '/';
    config.map(Routes);
    config.mapUnknownRoutes(PLATFORM.moduleName('not-found'));
    config.addPreRenderStep(TransformerStep);
    this.router = router;
  }

}
