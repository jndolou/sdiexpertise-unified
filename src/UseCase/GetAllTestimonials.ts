import { ITestimonialRepository } from '../Domain/Repositories';
import { Testimonial } from '../Domain/Models';

export class GetAllTestimonials {
  constructor(private testimonialRepository: ITestimonialRepository) {}

  async execute(): Promise<Testimonial[]> {
    return await this.testimonialRepository.getAll();
  }
}
