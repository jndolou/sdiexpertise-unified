import { ITestimonialRepository } from '../../Domain/Repositories';
import { Testimonial } from '../../Domain/Models';
import { testimonialsMock } from '../Data/Mocks';

export class TestimonialRepository implements ITestimonialRepository {
  async getAll(): Promise<Testimonial[]> {
    return Promise.resolve(testimonialsMock);
  }

  async getById(id: string): Promise<Testimonial | null> {
    const testimonial = testimonialsMock.find((t, index) => index.toString() === id);
    return Promise.resolve(testimonial || null);
  }
}
