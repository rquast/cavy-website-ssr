import {inject} from 'aurelia-framework';
import SsrTransformer from './ssr-transformer';

@inject(SsrTransformer)
export class TransformerStep {

  constructor(transformer) {
    this.transformer = transformer;
  }

  run(navigationInstruction, next) {
    this.transformer.mutate(navigationInstruction.config);
    return next();
  }

}
