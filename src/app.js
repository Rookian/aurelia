import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    
    config.map([
      { route: ['','welcome'],  name: 'welcome', moduleId: 'welcome/index', nav: true, title:'Welcome' },
      { route: ['test'], name: 'test', moduleId: 'test/index', nav: true, title: 'Test'}   
    ]);

    this.router = router;
  }
}
