import { celebrate, Segments, Joi } from 'celebrate';

class ValidatorItems {
  constructor() {
    this.create = celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        active: Joi.boolean().required(),
      }),
    });
  }
}

export default new ValidatorItems();
