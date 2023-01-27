import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CalculadoraService } from './app/calculadora';
import { AppModule } from './app/app.module';

providers:[
  CalculadoraService,
]

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
