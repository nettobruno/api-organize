import { celebrate, Segments, Joi } from 'celebrate';

class ValidatorUser {
  constructor() {
    this.create = celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
      }),
    });
  }
}

export default new ValidatorUser();
